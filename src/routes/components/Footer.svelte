<script lang="ts">
  import Logo from "$lib/components/Logo.svelte";

  import Facebook from "$lib/components/icons/Facebook.svelte";
  import Instagram from "$lib/components/icons/Instagram.svelte";
  import GitHub from "$lib/components/icons/GitHub.svelte";

  let currentYear = new Date().getFullYear();
</script>

<hr>
<footer
  class="
	mx-auto 2xl:max-w-screen-2xl 2xl:min-w-screen-2xl
	p-2 md:p-4
  "
>
	<div class="grid grid-cols-2 gap-5 mb-5 pt-2 md:grid-flow-col md:grid-cols-10 md:mb-7 ">
		<div class="col-span-2 flex items-center self-start md:col-span-8">
			<Logo className="w-8 h-8"/>
			<h2 class="text-xl font-bold ml-1">
				Survey<span class="text-transparent bg-gradient-to-r bg-clip-text from-primary-500 to-tertiary-500">Trade</span>
			</h2>
		</div>
		<div class="col-span-1 md:col-span-4">
			<h2 class="font-bold pb-1">Follow Us</h2>
			<a href="/" class="block w-fit py-1 text-sm font-light hover:text-primary-500">Facebook</a>
			<a href="/" class="block w-fit py-1 text-sm font-light hover:text-primary-500">Instagram</a>
			<a href="/" class="block w-fit py-1 text-sm font-light hover:text-primary-500">GitHub</a>
		</div>
		<div class="col-span-1 md:col-span-4">
			<h2 class="font-bold pb-1">Legal</h2>
			<a href="/" class="block w-fit py-1 text-sm font-light hover:text-primary-500">Privacy Policy</a>
			<a href="/" class="block w-fit py-1 text-sm font-light hover:text-primary-500">Terms & Conditions</a>
			<a href="/" class="block w-fit py-1 text-sm font-light hover:text-primary-500">security.txt</a>
		</div>
	</div>
	<div class="flex items-center w-full">
		<p class="text-sm text-secondary-400 font-light">© {currentYear} SurveyTrade™.</p>
		<a href="/" class="ml-auto">
			<Facebook className="w-6 h-6 stroke-secondary-500 hover:stroke-primary-500"/>
		</a>
		<a href="/" class="mx-1 md:mx-4">
			<Instagram className="w-6 h-6 stroke-secondary-500 hover:stroke-primary-500"/>
		</a>
		<a href="/">
			<GitHub className="w-6 h-6 stroke-secondary-500 hover:stroke-primary-500"/>
		</a>
	</div>
</footer>