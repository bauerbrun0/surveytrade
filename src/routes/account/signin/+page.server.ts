import userService from "$lib/services/userService";
import { parseSigninForm } from "$lib/validators";
import type { Action, Actions } from "@sveltejs/kit"
import { fail } from "@sveltejs/kit";
import { lucia } from "$lib/auth";
import type { User } from "$lib/db/schema";
import { InvalidCredentialsError } from "$lib/errors";
import { customRedirect, getRedirectPathFromSearchParams } from "$lib/utils/redirects";

const signin: Action = async ({ request, cookies, url }) => {
	const formData = await request.formData();
	const { signinFormFields: fields, signinFormErrors: errors } = parseSigninForm(formData);

	if (errors) {
		return fail(422, { 
			fields: {
				email: fields.email,
			},
			errors
		});
	}

	let user: Omit<User, "hashedPassword">;

	try {
		user = await userService.signin(fields.email, fields.password);
	} catch (e: unknown) {
		if (e instanceof InvalidCredentialsError) {
			return fail(422, {
				fields: {
					email: fields.email
				},
				errors: {
					email: undefined,
					password: "Invalid email or password"
				}
			});
		}
		throw e;
	}

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
			toastMessages: [{ message: `👋 Welcome back! What a nice day to fill out some forms!`, type: "success" }],
			cookies
		}
	});
};

export const actions: Actions = { signin };