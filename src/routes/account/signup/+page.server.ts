import userService from "$lib/services/userService";
import { parseRequiredStringField, parseLoginPassword, parseSignupEmail, parseSignupPassword } from "$lib/validators";
import { fail, type Actions, type Action, redirect } from "@sveltejs/kit";

type FormErrors = {
	email?: string;
	firstName?: string;
	lastName?: string;
	password?: string;
	confirmPassword?: string;
	terms?: string;
};

type FormFields = {
	email?: string;
	firstName?: string;
	lastName?: string;
};

const signup: Action = async ({ request }) => {
	const data = await request.formData();
	const [email, emailErr] = parseSignupEmail(data.get("email"));
	const [firstName, firstNameErr] = parseRequiredStringField(data.get("first_name"));
	const [lastName, lastNameErr] = parseRequiredStringField(data.get("last_name"));
	const [password, passwordErr] = parseSignupPassword(data.get("password"));
	// using parseLoginPassword for confirmPassword, which only checks for blankness
	// this way no duplicate validation error message will show up
	const [confirmPassword, confirmPasswordErr] = parseLoginPassword(data.get("confirm_password"));
	const terms = data.get("terms");

	const errors: FormErrors = {
		email: emailErr,
		firstName: firstNameErr,
		lastName: lastNameErr,
		password: passwordErr,
		confirmPassword: confirmPasswordErr
	};

	const fields: FormFields = {
		email: email,
		firstName: firstName,
		lastName: lastName
	};

	const hasErrors = Object.values(errors).some(error => error);

	if (hasErrors) {
		return fail(422, { errors, fields });
	}

	if (password !== confirmPassword) {
		errors.confirmPassword = "Passwords do not match";
		return fail(422, { errors, fields });
	}

	if (!terms) {
		errors.terms = "You must accept the terms and conditions to sign up";
		return fail(422, { errors, fields });
	}

	try {
		await userService.createUser(email, firstName, lastName, password);
	} catch (e: unknown) {
		errors.email = "Email is already in use";
		return fail(422, { errors, fields });
	}

	redirect(303, "/account/login");
};

export const actions: Actions = { signup };
