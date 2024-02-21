import userService from "$lib/services/userService";
import { parseLoginEmail, parseLoginPassword } from "$lib/validators";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions } from "@sveltejs/kit";

type FormErrors = {
	email?: string;
	password?: string;
};

type FormFields = {
	email?: string;
};

const login: Action = async ({ request, cookies }) => {
	const data = await request.formData();
	const [email, emailErr] = parseLoginEmail(data.get("email"));
	const [password, passwordErr] = parseLoginPassword(data.get("password"));

	const errors: FormErrors = {
		email: emailErr,
		password: passwordErr
	};

	const fields: FormFields = {
		email: email
	};

	if (errors.email || errors.password) {
		return fail(422, { errors, fields });
	}

	let token: string;

	try {
		token = await userService.authenticateUser(email, password);
	} catch (e: unknown) {
		errors.password = "Email or password is incorrect";
		return fail(422, { errors, fields });
	}

	cookies.set("session", token, {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secure: false
	});

	redirect(303, "/");
};

export const actions: Actions = { login };