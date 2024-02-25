<script lang="ts">
	import "../app.css";
	import { AppShell } from '@skeletonlabs/skeleton';
  	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	// popups floating-ui imports
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	// toast imports
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Toast } from '@skeletonlabs/skeleton';
	
	// setting up popups	
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	// setting up toast
	initializeStores();
</script>

<svelte:head>
	<title>SurveyTrade</title>
</svelte:head>

<Toast />

<AppShell>
	<svelte:fragment slot="header">
		<Header/>
	</svelte:fragment>
	<main
		class="
			mx-auto 2xl:max-w-screen-2xl 2xl:min-w-screen-2xl
			px-2 md:px-4
		"
	>
		<slot />
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>