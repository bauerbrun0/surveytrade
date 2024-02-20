import { parseLoginEmail, parseLoginPassword } from "$lib/validators";
import { fail, type Actions } from "@sveltejs/kit";

type FormErrors = {
	email?: string;
	password?: string;
};

type FormFields = {
	email?: string;
};

export const actions: Actions = {
	default: async ({ request }) => {
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

		// Parsed email and password
		console.log("email", email);
		console.log("password", password);
	}
};