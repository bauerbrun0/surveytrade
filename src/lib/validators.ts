import { isString } from "./helpers";

export function parseLoginEmail(value: unknown): [string, string | undefined] {
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

export function parseSignupEmail(value: unknown): [string, string | undefined] {
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

export function parseLoginPassword(value: unknown): [string, string | undefined] {
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

	return [password, undefined];
}

export function parseSignupPassword(value: unknown): [string, string | undefined] {
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

export function parseRequiredStringField(value: unknown): [string, string | undefined] {
	if (!value) {
		return ["", "This field cannot be empty"];
	}

	if (!isString(value)) {
		return ["", "This field must be a string"];
	}

	const fieldValue = value.trim();

	if (fieldValue === "") {
		return ["", "This field cannot be empty"];
	}

	return [fieldValue, undefined];
}