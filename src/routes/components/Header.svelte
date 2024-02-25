<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import Avatar from "$lib/components/icons/Avatar.svelte";
  	import { popup, type PopupSettings} from "@skeletonlabs/skeleton";
	import ProfilePopup from "./ProfilePopup.svelte";
	import { page } from "$app/stores";

	// You have to reload the page after modifying the popup or its 'trigger' button
	// see: https://github.com/skeletonlabs/skeleton/issues/2465
	const popupProfile: PopupSettings = {
		event: 'click',
		target: 'popupProfile',
		placement: 'bottom-end',
	};

	$: email = $page.data.user?.email;
	$: userLoggedIn = $page.data?.user;
</script>

<header
	class="
		flex items-center
		mx-auto 2xl:max-w-screen-2xl 2xl:min-w-screen-2xl
		p-2 md:p-4
	"
>
	<a href="/">
		<Logo className="w-10 h-10 md:w-12 md:h-12"/>
	</a>
	<a href="/">
		<h1 class="text-xl md:text-2xl ml-1 font-bold">
			Survey<span class="text-transparent bg-gradient-to-r bg-clip-text from-primary-500 to-tertiary-500">Trade</span>
		</h1>
	</a>
	<div class="ml-auto flex items-center space-x-3 md:space-x-4 font-bold">
		{#if userLoggedIn}
			<a href="/" class="hover:text-primary-500 hidden md:block">Browse</a>
			<a href="/" class="hover:text-primary-500 hidden md:block">My Surveys</a>
			<button
				type="button"
				class="flex items-center rounded-full hover:bg-secondary-500 pl-2 py-0.5"
				use:popup={popupProfile}
			>
				{email}
				<Avatar className="w-8 h-8 md:w-9 md:h-9 ml-2"/>
			</button>
		{:else}
			{#if $page.url.pathname !== "/account/signup"}
				<a href="/account/signup" class="hover:text-primary-500">Sign up</a>
			{/if}
			{#if $page.url.pathname !== "/account/signin"}
				<a href="/account/signin" class="hover:text-primary-500">
					<button type="button" class="btn variant-filled-primary py-1.5 md:py-2">Sign in</button>
				</a>
			{/if}
		{/if}
	</div>
</header>
<hr>
<ProfilePopup/>
