import { emailVerificationRedirect, signinRedirect } from "$lib/utils/redirects";
import type { PageServerLoad } from "./$types";
// import { lucia } from "$lib/auth";

export const load: PageServerLoad = async ({ locals, url, cookies }) => {
	if (!locals.user) {
		return signinRedirect({
			referrerUrl: url,
			toast: {
				toastMessages: [{ message: "You must be signed in to view this page. Not to worry, once you sign in, you'll be redirected.", type: "error" }],
				cookies
			}
		});
	}

	if (!locals.user.emailVerified) {
		return emailVerificationRedirect({
			referrerUrl: url,
			toast: {
				toastMessages: [{ message: "Your email must be verified before using SurveyTrade.", type: "error" }],
				cookies
			}
		});
	}
}