import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: text("id").notNull().primaryKey(),
	email: text("email").notNull().unique(),
	hashedPassword: text("hashed_password").notNull(),
	emailVerified: integer("email_verified", { mode: "boolean" })
		.notNull()
		.default(false)
});

export const sessions = sqliteTable("session", {
	id: text("id").notNull().primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	expiresAt: integer("expires_at").notNull()
});

export const emailVerificationCodes = sqliteTable("email_verification_codes", {
	id: integer("id").notNull().primaryKey({ autoIncrement: true }),
	code: text("code").notNull(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	email: text("email").notNull(),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull()
});

export type NewUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewSessionData = typeof sessions.$inferInsert;
export type SessionData = typeof sessions.$inferSelect;
export type NewEmailVerificationCode = typeof emailVerificationCodes.$inferInsert;
export type EmailVerificationCode = typeof emailVerificationCodes.$inferSelect;
