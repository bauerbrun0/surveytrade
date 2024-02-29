<script lang="ts">
	export let form;

	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { getRedirectFormActionExtraParamFromUrl } from '$lib/utils/redirects';

	let redirectExtraParam = getRedirectFormActionExtraParamFromUrl($page.url);
</script>

<!-- Full screen height using mobile -->
<div class="flex items-center min-h-[calc(100dvh-57px)] md:min-h-0">
	<div 
		class="
			card w-full mx-auto my-10 px-3 py-6
			md:w-2/3 lg:w-1/2 md:px-6 md:py-10
		"
	>
		<h1 class="text-center text-xl font-bold md:text-2xl">Check your inbox!</h1>
		<div class="w-full mx-auto my-4 flex flex-col space-y-4 lg:w-2/3">
			<p class="text-center">
				We've sent you an email to <strong>{$page.data.user?.email}</strong> with a verification code. Please enter it below!
			</p>
		</div>
		<form
			class="w-full mx-auto my-4 flex flex-col space-y-4 lg:w-2/3"
			method="POST"
			action={`?/verify${redirectExtraParam ?? ''}`}
			use:enhance
		>
			<div class="space-y-1">
				<input
					type="password"
					id="code"
					name="code"
					class="input w-full"
					autocapitalize="off"
					spellcheck="false"
					autocomplete="off"
					required
					value={form?.fields?.code || ""}
				/>
				{#if form?.errors?.code}
					<p class="block text-red-500">
						{form.errors.code}	
					</p>
				{/if}
			</div>
			<div class="pt-2">
				<button
					type="submit"
					class="btn variant-filled-primary w-full font-bold"
				>
					Verify Email
				</button>
			</div>
		</form>
		<form
			class="w-full mx-auto my-4 flex flex-row space-x-1 lg:w-2/3"
			method="POST"
			action="?/resend"
			use:enhance
		>
			<p>Email not received? Code expired? </p>
			<button
				type="submit"
				class="text-blue-500"
			>
				Resend
			</button>
		</form>
	</div>
</div>