import type { Action, Actions, PageServerLoad } from "./$types";
import { fail } from "@sveltejs/kit";
import { lucia } from "$lib/auth";
import { signinRedirect, customRedirect, getRedirectPathFromSearchParams } from "$lib/utils/redirects";
import { parseEmailVerificationCode } from "$lib/utils/validators";
import emailVerificationService from "$lib/services/emailVerificationService";
import userService from "$lib/services/userService";

export const load: PageServerLoad = async ({ locals, url, cookies  }) => {
	if (!locals.user) {
		return signinRedirect({
			referrerUrl: url,
			toast: {
				toastMessages: [{ message: "You must be signed in to view this page. Not to worry, once you sign in, you'll be redirected.", type: "error" }],
				cookies
			}
		});
	}
}

const verify: Action = async ({ request, locals, cookies, url }) => {
	if (!locals.session) {
		return fail(401);
	}
	
	const formData = await request.formData();
	const [code, codeErr] = parseEmailVerificationCode(formData.get("code"));
	
	if (codeErr) {
		return fail(422, {
			errors: {
				code: codeErr
			},
			fields: {
				code
			}
		});
	}

	const { user } = await lucia.validateSession(locals.session.id);
	if (!user) {
		return fail(401);
	}

	const emailVerified = await emailVerificationService.verifyVerificationCode(user, code);
	if (!emailVerified) {
		return fail(422, {
			errors: {
				code: "The code you entered is invalid or has expired, please try again!"
			},
			fields: {
				code
			}
		});
	}

	await lucia.invalidateUserSessions(user.id);
	await userService.updateUserEmailVerified(user.id, true);

	const session = await lucia.createSession(user.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: ".",
		...sessionCookie.attributes,
	});

	const redirectTo = getRedirectPathFromSearchParams(url.searchParams) ?? "/";
	
	return customRedirect({
		status: 302,
		targetPath: redirectTo,
		toast: {
			toastMessages: [{ message: "💌 Your email has been verified!", type: "success" }],
			cookies
		}
	});
}

export const actions: Actions = { verify };