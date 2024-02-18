<script lang="ts">
	export let items: string[]
</script>

<ul class="m-3">
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>