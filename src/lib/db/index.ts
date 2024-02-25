import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";
import { users, sessions } from "./schema";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";

const sqlite = new Database("./drizzle/.db/sqlite.db");
const db = drizzle(sqlite, { schema });

export const luciaAdapter = new DrizzleSQLiteAdapter(db, sessions, users);

export default db;