import { isArray, isToastMessage } from "$lib/utils/typeguards";
import type { ToastMessage } from "$lib/utils/types";
import { browser } from '$app/environment';
import type { ToastStore } from "@skeletonlabs/skeleton";
import Cookie from "js-cookie";
import { onMount } from "svelte";
import { onNavigate } from "$app/navigation";

export function showToastMessage(toastStore: ToastStore, toastMessage: ToastMessage) {
	toastStore.trigger({
		message: toastMessage.message,
		background: `variant-filled-${toastMessage.type}`
	});
}

export function showToastMessages(toastStore: ToastStore, toastMessages: ToastMessage[]) {
	toastMessages.forEach((toastMessage) => {
		showToastMessage(toastStore, toastMessage);
	});
}

export function subscribeToRedirectToastMessages(toastStore: ToastStore) {
	function showCookieToastMessages() {
		const toastMessages = popToastMessagesFromCookies();
		if (toastMessages) {
			showToastMessages(toastStore, toastMessages);
		}
	}

	onMount(showCookieToastMessages);
	onNavigate(showCookieToastMessages);
}

function popToastMessagesFromCookies(): ToastMessage[] | null {
	if (!browser) {
		return null;
	}

	const cookie = Cookie.get("toastMessages");
	if (!cookie) {
		return null;
	}

	Cookie.remove("toastMessages");

	const toastMessages = JSON.parse(cookie);

	if (!isArray(toastMessages)) {
		return null;
	}

	if (toastMessages.some((message: unknown) => !isToastMessage(message))) {
		return null;
	}

	return toastMessages as ToastMessage[];
}
