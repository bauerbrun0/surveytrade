import { dev } from "$app/environment";
import type { ToastMessage } from "$lib/utils/types";
import { redirect } from "@sveltejs/kit";
import type { Cookies } from "@sveltejs/kit";

/**
 * Executes a custom redirection with an optional referrer URL, and toast messages (sent with cookies). 
 * @param {object} props - The properties for the custom redirection.
 * @param {301|302|303|304|305|306|307|308} props.status - The HTTP status code for the redirection.
 * @param {string} props.targetPath - The target path to redirect to.
 * @param {URL} [props.sourceUrl] - The URL of the referring page. Will set a redirect query parameter if provided.
 * @param {object} [props.toast] - Optional toast messages.
 * @param {Array<Object>} props.toast.toastMessages - Array of toast messages.
 * @param {Array<Object>} props.toast.cookies - Cookies for setting the toast messages.
 * @throws {never} This function never returns.
 * @returns {never} This function never returns.
 */
export function customRedirect(props: {
	status: 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308;
	targetPath: string;
	referrerUrl?: URL;
	toast?: { toastMessages: ToastMessage[], cookies: Cookies };
}): never {
	if (props.toast) {
		const { toastMessages, cookies } = props.toast;
		cookies.set("toastMessages", JSON.stringify(toastMessages), {
			path: "/",
			secure: dev,
			httpOnly: false 
		});
	}

	if (props.referrerUrl) {
		const fromUrl = props.referrerUrl.pathname + props.referrerUrl.search;
		const encodedFromUrl = encodeURIComponent(fromUrl);
		return redirect(props.status, `${props.targetPath}?redirect=${encodedFromUrl}`);
	}

	return redirect(props.status, props.targetPath);
}

export function signinRedirect(props: { referrerUrl?: URL, toast?: { toastMessages: ToastMessage[], cookies: Cookies } }): never {
	return customRedirect({
		status: 302,
		targetPath: "/account/signin",
		referrerUrl: props.referrerUrl,
		toast: props.toast
	});
}

export function emailVerificationRedirect(props: { referrerUrl?: URL, toast?: { toastMessages: ToastMessage[], cookies: Cookies } }): never {
	return customRedirect({
		status: 302,
		targetPath: "/account/email-verification",
		referrerUrl: props.referrerUrl,
		toast: props.toast
	});
}

export function getRedirectPathFromSearchParams(searchParams: URLSearchParams): string | null {
	const redirect = searchParams.get("redirect");

	if (!redirect) {
		return null;
	}

	return `/${decodeURIComponent(redirect).slice(1)}`;
}

export function getRedirectFormActionExtraParamFromUrl(url: URL): string | null {
	const redirect = url.searchParams.get("redirect");

	if (!redirect) {
		return null;
	}

	return `&redirect=${encodeURIComponent(redirect)}`;
}