// See https://kit.svelte.dev/docs/types#app
import type { LoggedInUser } from "$lib/types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: LoggedInUser;
		}
		// Not sure if it's type safety is actually enforced
		// Probably not
		interface PageData {
			user?: LoggedInUser;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
