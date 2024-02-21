import type { Handle } from "@sveltejs/kit";
import userService from "$lib/services/userService";
import type { LoggedInUser } from "$lib/types";

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get("session");

	if (token) {
		try {
			const user: LoggedInUser = await userService.getLoggedInUserDetails(token);
			event.locals.user = user;
		} catch (e: unknown) {
			return await resolve(event);
		}
	}

	return await resolve(event);
};