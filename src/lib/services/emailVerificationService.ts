import { emailVerificationCodes } from "$lib/db/schema";
import db from "$lib/db";
import { TimeSpan, createDate, isWithinExpirationDate } from "oslo";
import { generateRandomString, alphabet } from "oslo/crypto";
import { eq } from "drizzle-orm";
import type { User } from "lucia";

async function generateEmailVerificationCode(userId: string, email: string): Promise<string> {
	// delete any existing codes for this user
	await db
		.delete(emailVerificationCodes)
		.where(eq(emailVerificationCodes.userId, userId));

	const code = generateRandomString(6, alphabet("0-9", "A-Z"));
	await db
		.insert(emailVerificationCodes)
		.values({
			userId,
			email,
			code,
			expiresAt: createDate(new TimeSpan(10, "m"))
		});

	return code;
}

async function verifyVerificationCode(user: User, code: string): Promise<boolean> {
	const databaseCode = await db.transaction(async (tx) => {
		// select the code for the user
		const results = await tx
			.select()
			.from(emailVerificationCodes)
			.where(eq(emailVerificationCodes.userId, user.id));
		
		// check if the code matches
		if (results.length === 0 || results[0].code !== code) {
			return null;
		}

		// delete the code
		await tx.delete(emailVerificationCodes).where(eq(emailVerificationCodes.id, results[0].id));
		return results[0];
	})

	if (!databaseCode) {
		return false;
	}

	if (!isWithinExpirationDate(databaseCode.expiresAt)) {
		return false;
	}

	if (databaseCode.email !== user.email) {
		return false;
	}

	return true;
}


const emailVerificationService = {
	generateEmailVerificationCode,
	verifyVerificationCode
};

export default emailVerificationService;