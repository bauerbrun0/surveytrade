<script>
	import "../app.css";
	import { AppShell } from '@skeletonlabs/skeleton';
  	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	// setting up floating-ui for popups
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<svelte:head>
	<title>SurveyTrade</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<Header/>
	</svelte:fragment>
	<main
		class="
			mx-auto 2xl:max-w-screen-2xl 2xl:min-w-screen-2xl
			p-2 md:p-4
		"
	>
		<slot />
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>