import type { Action, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { lucia } from "$lib/auth";
import { customRedirect } from "$lib/utils/redirects";

const signout: Action = async ({ locals, cookies }) => {
	if (!locals.session) {
		return fail(401);
	}

	await lucia.invalidateSession(locals.session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: ".",
		...sessionCookie.attributes,
	});

	return customRedirect({
		status: 302,
		targetPath: "/account/signin",
		toast: {
			toastMessages: [{ message: "🙋‍♀️ You've been signed out! See you next time! ", type: "success" }],
			cookies
		}
	});
};

export const actions: Actions = { default: signout };