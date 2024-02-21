import { redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	// GET /account/logout is not allowed, redirect to home
	redirect(302, "/")
};

const logout: Action = async ({ cookies }) => {
	cookies.delete("session", {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secure: false
	})
	redirect(302, "/account/login")
};

export const actions: Actions = { default: logout };