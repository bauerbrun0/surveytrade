import { getToastStore } from "@skeletonlabs/skeleton";

export type ToastMessage = {
	message: string;
	type: ToastMessageType;
};

export type ToastMessageType = "success" | "error";

export type ToastStore = ReturnType<typeof getToastStore>;