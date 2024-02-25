import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: text("id").notNull().primaryKey(),
	email: text("email").notNull().unique(),
	hashedPassword: text("hashed_password").notNull()
});


export const sessions = sqliteTable("session", {
	id: text("id").notNull().primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	expiresAt: integer("expires_at").notNull()
});


export type NewUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewSessionData = typeof sessions.$inferInsert;
export type SessionData = typeof sessions.$inferSelect;
