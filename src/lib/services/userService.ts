import type { LoggedInUser } from "$lib/types";

async function authenticateUser(email: string, password: string): Promise<string> {
	await Promise.resolve();
	if (email === "john@example.com" && password === "Password123") {
		return "abcd1234sessiontoken";
	}

	throw new Error("Invalid email or password");
}

async function createUser(email: string, firstName: string, lastName: string, password: string): Promise<void> {
	await Promise.resolve();
	console.log("Registering user with the following details:");
	console.log("email: ", email);
	console.log("firstName: ", firstName);
	console.log("lastName: ", lastName);
	console.log("password: ", password);
}

async function getLoggedInUserDetails(session: string): Promise<LoggedInUser> {
	await Promise.resolve(session);
	return {
		id: "123",
		email: "john@example.com",
		firstName: "John",
		lastName: "Doe",
		emailVerified: true,
		created: new Date()
	};
}

const userService = {
	authenticateUser,
	createUser,
	getLoggedInUserDetails
};

export default userService;