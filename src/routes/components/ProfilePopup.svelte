<!--
	Profile Popup
	You have to reload the page after modifying the popup or its 'trigger' button
	see: https://github.com/skeletonlabs/skeleton/issues/2465
-->
<script lang="ts">
	export let name: string = "John";
	export let email: string = "john@example.com";
</script>

<div class="rounded-lg bg-surface-500 p-4 w-fit min-w-64 duration-0 hidden:duration-0" data-popup="popupProfile">
	<div>
		<p class="font-bold my-1 px-2">{name}</p>
		<p class="text-sm font-light px-2">{email}</p>
	</div>
	<hr class="my-2 md:my-4 !border-secondary-500"/>
	<div>
		<a href="/" class="block my-1 px-2 py-1 rounded-md hover:bg-secondary-500">Profile</a>
		<a href="/" class="block my-1 px-2 py-1 rounded-md hover:bg-secondary-500">Settings</a>
		<a href="/" class="block my-1 px-2 py-1 rounded-md hover:bg-secondary-500">Log out</a>
	</div>
</div>