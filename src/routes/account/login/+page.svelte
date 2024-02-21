<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<!-- Full screen height using mobile -->
<div class="flex items-center min-h-[calc(100dvh-57px)] md:min-h-0">
	<div 
		class="
			card w-full mx-auto my-10 px-3 py-6
			md:w-2/3 lg:w-1/2 md:px-6 md:py-10
		"
	>
		<h1 class="text-center text-xl font-bold md:text-2xl">Welcome back!</h1>
		<form
			class="w-full mx-auto my-4 flex flex-col space-y-4 lg:w-2/3"
			method="POST"
			action="?/login"
			use:enhance
		>
			<div class="space-y-1">
				<label for="email" class="block font-bold">
					Email	
				</label>
				<input
					type="email"
					id="email"
					name="email"
					class="input w-full"
					autocapitalize="off"
					spellcheck="false"
					autocomplete="off"
					required
					value={form?.fields?.email || ""}
				/>
				{#if form?.errors?.email}
					<p class="block text-red-500">
						{form.errors.email}	
					</p>
				{/if}
			</div>
			<div class="space-y-1">			
				<label for="password" class="block font-bold">
					Password	
				</label>
				<input
					type="password"
					id="password"
					name="password"
					class="input w-full"
					autocapitalize="off"
					spellcheck="false"
					autocomplete="off"
					required
				/>
				{#if form?.errors?.password}
					<p class="block text-red-500">
						{form.errors.password}	
					</p>
				{/if}
			</div>
			<div class="pt-7">
				<button
					type="submit"
					class="btn variant-filled-primary w-full font-bold"
				>
					Login
				</button>
			</div>
		</form>
		<div class="w-full lg:w-2/3 mx-auto flex items-center justify-between">
			<a href="/account/reset-password" class="text-blue-500">Forgot password?</a>
			<a href="/account/signup" class="text-blue-500 text-right">Don't have an account?</a>
		</div>
	</div>
</div>