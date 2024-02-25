import { users, type User } from "$lib/db/schema";
import db from "$lib/db";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";
import { eq } from "drizzle-orm";
import { DuplicateEmailError, InvalidCredentialsError } from "$lib/errors";

async function signup(email: string, password: string): Promise<string> {
	const id = generateId(15);
	const hashedPassword = await new Argon2id().hash(password);

	// Check if username already exists
	const results = await db
		.select()
		.from(users)
		.where(eq(users.email, email));
	
	if (results.length !== 0) {
		throw new DuplicateEmailError();
	}

	// Insert new user
	await db.insert(users).values({
		id,
		email,
		hashedPassword
	})

	return id;
}

async function signin(email: string, password: string): Promise<Omit<User, "hashedPassword">> {
	const results = await db
		.select()
		.from(users)
		.where(eq(users.email, email.toLowerCase()));
	
	if (results.length === 0) {
		throw new InvalidCredentialsError();
	}

	const user = results[0];
	const validPassword = await new Argon2id().verify(user.hashedPassword, password);

	if (!validPassword) {
		throw new InvalidCredentialsError();
	}

	return {
		id: user.id,
		email: user.email
	};
}

const userService = {
	signup,
	signin
};

export default userService;