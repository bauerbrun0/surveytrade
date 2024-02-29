import { isString } from "$lib/utils/typeguards";

export type SignupFormFields = {
	email: string;
	password: string;
	passwordConfirmation: string;
	terms: string;
};

export type SignupFormErrors = {
	email: string | undefined;
	password: string | undefined;
	passwordConfirmation: string | undefined;
	terms: string | undefined;
};

export function parseSignupForm(formData: FormData): { signupFormFields: SignupFormFields; signupFormErrors?: SignupFormErrors } {
	const [email, emailError] = parseSignupEmail(formData.get("email"));
	const [password, passwordError] = parseSignupPassword(formData.get("password"));
	const [passwordConfirmation, passwordConfirmationError] = parseSignupPasswordConfirmation(formData.get("confirm_password"));
	const [terms, termsError] = parseSignupTerms(formData.get("terms"));

	const signupFormFields = {
		email,
		password,
		passwordConfirmation,
		terms
	};

	if (emailError || passwordError || passwordConfirmationError || termsError) {
		return {
			signupFormFields,
			signupFormErrors: {
				email: emailError,
				password: passwordError,
				passwordConfirmation: passwordConfirmationError,
				terms: termsError
			}
		};
	}

	if (password !== passwordConfirmation) {
		return {
			signupFormFields,
			signupFormErrors: {
				email: undefined,
				password: undefined,
				terms: undefined,
				passwordConfirmation: "Passwords do not match"
			}
		};
	}

	return {
		signupFormFields
	};
}

export type SigninFormFields = {
	email: string;
	password: string;
};

export type SigninFormErrors = {
	email: string | undefined;
	password: string | undefined;
};

export function parseSigninForm(formData: FormData): { signinFormFields: SigninFormFields; signinFormErrors?: SigninFormErrors } {
	const [email, emailError] = parseSigninEmail(formData.get("email"));
	const [password, passwordError] = parseSigninPassword(formData.get("password"));

	const signinFormFields = {
		email,
		password
	};

	if (emailError || passwordError) {
		return {
			signinFormFields,
			signinFormErrors: {
				email: emailError,
				password: passwordError
			}
		};
	}

	return {
		signinFormFields
	};
}

export function parseEmailVerificationCode(value: unknown): [string, string | undefined] {
	if (!value) {
		return ["", "Verification code is required"];
	}

	if (!isString(value)) {
		return ["", "Verification code must be a string"];
	}

	const code = value.trim();

	if (code === "") {
		return ["", "Verification code is required"];
	}

	return [code, undefined];
}

function parseSignupEmail(value: unknown): [string, string | undefined] {
	if (!value) {
		return ["", "Email is required"];
	}

	if (!isString(value)) {
		return ["", "Email is not a string"];
	}

	const email = value.trim();

	if (email === "") {
		return ["", "Email is required"];
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(email)) {
		return [email, "Email is not a valid email"];
	}

	return [email, undefined];
}

function parseSignupPassword(value: unknown): [string, string | undefined] {
	if (!value) {
		return ["", "Password is required"];
	}

	if (!isString(value)) {
		return ["", "Password is not a string"];
	}

	const password = value.trim();

	if (password === "") {
		return ["", "Password is required"];
	}

	if (password.length < 8) {
		return [password, "Password must be at least 8 characters long"];
	}

	if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
		return [password, "Password must contain at least one lowercase letter, one uppercase letter, and one digit"];
	}

	return [password, undefined];
}

function parseSignupPasswordConfirmation(value: unknown): [string, string | undefined] {
	if (!value) {
		return ["", "Password confirmation is required"];
	}

	if (!isString(value)) {
		return ["", "Password confirmation must be a string"];
	}

	const passwordConfirmation = value.trim();

	if (passwordConfirmation === "") {
		return ["", "Password confirmation is required"];
	}

	return [passwordConfirmation, undefined];
}

function parseSignupTerms(value: unknown): [string, string | undefined] {
	if (!value) {
		return ["", "You must agree to the Terms and Conditions"];
	}

	return ["", undefined];
}

function parseSigninEmail(value: unknown): [string, string | undefined] {
	if (!value) {
		return ["", "Email is required"];
	}

	if (!isString(value)) {
		return ["", "Email is not a string"];
	}

	const email = value.trim();

	if (email === "") {
		return ["", "Email is required"];
	}

	return [email, undefined];
}

function parseSigninPassword(value: unknown): [string, string | undefined] {
	if (!value) {
		return ["", "Please enter a password"];
	}

	if (!isString(value)) {
		return ["", "Password must be a string"];
	}

	const fieldValue = value.trim();

	if (fieldValue === "") {
		return ["", "Please enter a password"];
	}
		
	return [fieldValue, undefined];
}