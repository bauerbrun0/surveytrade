import type { ToastMessage, ToastMessageType } from "./types";

export function isString(value: unknown): value is string {
	return typeof value === "string" || value instanceof String;
}

export function isNumber(value: unknown): value is number {
	return typeof value === "number" || value instanceof Number;
}

export function isArray(value: unknown): value is unknown[] {
	return Array.isArray(value);
}

function isToastMessageType(value: unknown): value is ToastMessageType {
	if (!value) {
		return false;
	}

	if (!isString(value)) {
		return false;
	}

	if (value !== "success" && value !== "error") {
		return false;
	}

	return true;
}

export function isToastMessage(value: unknown): value is ToastMessage {
	if (!value || typeof value !== "object" || !("message" in value) || !("type" in value)) {
		return false;
	}

	if (!isString(value.message)) {
		return false
	}

	if (!isToastMessageType(value.type)) {
		return false;
	}

	return true;
}