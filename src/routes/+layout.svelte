<script>
	import "../app.css";
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>SurveyTrade</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<h1 class="text-2xl m-3 font-bold text-primary-500">SurveyTrade App</h1>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<p class="text-center text-gray-500 text-xs">© 2021 SurveyTrade</p>
	</svelte:fragment>
</AppShell>