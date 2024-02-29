<!--
	Profile Popup
	You have to reload the page after modifying the popup or its 'trigger' button
	see: https://github.com/skeletonlabs/skeleton/issues/2465
-->
<script lang="ts">
	import { page } from "$app/stores";

	$: name = $page.data.user?.email;
	$: email = $page.data.user?.email;
</script>

<div class="rounded-lg bg-surface-500 p-4 w-fit min-w-64 duration-0 hidden:duration-0" data-popup="popupProfile">
	<div>
		<p class="font-bold my-1 px-2">{name}</p>
		<p class="text-sm font-light px-2">{email}</p>
	</div>
	<hr class="my-2 md:my-4 !border-secondary-500"/>
	<div>
		<a href="/account/profile" class="block my-1 px-2 py-1 rounded-md hover:bg-secondary-500">Profile</a>
		<a href="/" class="block my-1 px-2 py-1 rounded-md hover:bg-secondary-500">Settings</a>
		<form class="w-full" action="/account/signout" method="POST">
			<button 
				class="block w-full text-left my-1 px-2 py-1 rounded-md hover:bg-secondary-500"
				type="submit"
			>
				Sign out
			</button>
	</div>
</div>