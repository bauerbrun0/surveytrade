import type { Action, Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { lucia } from "$lib/auth";

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
	redirect(302, "/account/signin");
};

export const actions: Actions = { default: signout };