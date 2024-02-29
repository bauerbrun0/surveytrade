// import { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_FROM_EMAIL } from "$env/static/private";
import { dev } from "$app/environment";

async function sendEmailVerificationCode(email: string, code: string): Promise<void> {
	const emailHtml = `<html><body><p>Your email verification code is: <strong>${code}</strong></p></body></html>`;
	await sendEmail(email, "Email Verification Code", emailHtml);
}

async function sendEmail(to: string, subject: string, html: string): Promise<void> {
	console.log(`Sending email to ${to}...`);
	console.log(`Subject: ${subject}`);
	console.log(`Content: ${html}`);

	if (dev) {
		await Promise.resolve(true);
		console.log("Email not sent in dev mode");
		return;
	}

	// TODO: Implement sending email with Mailgun
	// Will take a from something like this:
	
	// const form = new FormData();
	// form.append("from", `SurveyTrade <${MAILGUN_FROM_EMAIL}>`);
	// form.append("to", "John Doe <email@example.com>");
	// form.append("subject", subject);
	// form.append("html", html);
	
	// const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
	//	method: "POST",
	//	headers: {
	//		Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`
	//	},
	//	body: form
	// });

	// Check if the response is successful
}

const emailService = {
	sendEmailVerificationCode
};

export default emailService;