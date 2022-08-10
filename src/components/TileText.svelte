<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	export let character = '';
</script>

{#if character !== ''}
	<div in:scale={{ duration: 300, easing: quintOut }}>{character}</div>
{/if}

<style>
</style>
