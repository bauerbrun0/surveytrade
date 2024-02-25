import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/lib/db/schema.ts",
	out: "./drizzle",
	driver: "better-sqlite",
	dbCredentials: {
		url: "./drizzle/.db/sqlite.db"
	},
	verbose: true,
	strict: true
});