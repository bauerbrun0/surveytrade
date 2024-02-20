export function isString(value: unknown): value is string {
	return typeof value === "string" || value instanceof String;
}

export function isNumber(value: unknown): value is number {
	return typeof value === "number" || value instanceof Number;
}