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
		<h1 class="text-center text-xl font-bold md:text-2xl">Create your account!</h1>
		<form
			class="w-full mx-auto my-4 flex flex-col space-y-4 lg:w-2/3"
			method="POST"
			action="?/signup"
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
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="space-y-1">
					<label for="first_name" class="block font-bold">
						First Name	
					</label>
					<input
						type="text"
						id="first_name"
						name="first_name"
						class="input w-full"
						autocapitalize="on"
						spellcheck="false"
						autocomplete="off"
						required
						value={form?.fields?.firstName || ""}
					/>
					{#if form?.errors?.firstName}
						<p class="block text-red-500">
							{form.errors.firstName}	
						</p>
					{/if}
				</div>
				<div class="space-y-1">
					<label for="last_name" class="block font-bold">
						Last Name	
					</label>
					<input
						type="text"
						id="last_name"
						name="last_name"
						class="input w-full"
						autocapitalize="on"
						spellcheck="false"
						autocomplete="off"
						required
						value={form?.fields?.lastName || ""}
					/>
					{#if form?.errors?.lastName}
						<p class="block text-red-500">
							{form.errors.lastName}	
						</p>
					{/if}
				</div>
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
			<div class="space-y-1">			
				<label for="confirm_password" class="block font-bold">
					Confrim Password
				</label>
				<input
					type="password"
					id="confirm_password"
					name="confirm_password"
					class="input w-full"
					autocapitalize="off"
					spellcheck="false"
					autocomplete="off"
					required
				/>
				{#if form?.errors?.confirmPassword}
					<p class="block text-red-500">
						{form.errors.confirmPassword}	
					</p>
				{/if}
			</div>
			<div class="space-y-1">
				<div class="flex items-center space-x-2 w-fit">
					<input
						type="checkbox"
						id="terms"
						name="terms"
						class="checkbox"
					/>
					<label for="terms">I accept the <a href="/" class="text-blue-500">Terms and Conditions</a></label>
				</div>
				{#if form?.errors?.terms}
					<p class="block text-red-500">
						{form.errors.terms}
					</p>
				{/if}
			</div>
			
			<div class="pt-4">
				<button
					type="submit"
					class="btn variant-filled-primary w-full font-bold"
				>
					Sign up
				</button>
			</div>
		</form>
		<div class="w-full lg:w-2/3 mx-auto flex items-center justify-between">
			<a href="/account/login" class="text-blue-500 text-right">Already have an account?</a>
		</div>
	</div>
</div>