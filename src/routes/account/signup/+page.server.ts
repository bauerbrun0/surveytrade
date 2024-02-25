import { DuplicateEmailError } from "$lib/errors";
import userService from "$lib/services/userService";
import { parseSignupForm } from "$lib/validators";
import type { Action, Actions } from "@sveltejs/kit"
import { fail, redirect } from "@sveltejs/kit";
import { lucia } from "$lib/auth";

const signup: Action = async ({ request, cookies }) => {
	const formData = await request.formData();
	const { signupFormFields: fields, signupFormErrors: errors } = parseSignupForm(formData);

	if (errors) {
		return fail(422, { 
			fields: {
				email: fields.email,
				terms: fields.terms
			},
			errors
		});
	}

	let userId: string;

	try {
		userId = await userService.signup(fields.email, fields.password);
	} catch (e: unknown) {
		if (e instanceof DuplicateEmailError) {
			return fail(422, {
				fields: {
					email: fields.email,
					terms: fields.terms
				},
				errors: {
					username: "Email already exists"
				}
			});
		}
		throw e;
	}

	const session = await lucia.createSession(userId, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: ".",
		...sessionCookie.attributes
	});

	redirect(302, "/");
};

export const actions: Actions = { signup };