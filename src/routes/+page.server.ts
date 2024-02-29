import { emailVerificationRedirect } from "$lib/utils/redirects";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, url, cookies }) => {
	if (locals.user && !locals.user.emailVerified) {
		return emailVerificationRedirect({
			referrerUrl: url,
			toast: {
				toastMessages: [{ message: "Your email must be verified before using SurveyTrade.", type: "error" }],
				cookies
			}
		});
	}
}