<script>
	import { createEventDispatcher } from 'svelte';
	import FaBackspace from 'svelte-icons/fa/FaBackspace.svelte';

	export let key = '';

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('clicked', {
			key: key
		});
	};
</script>

<button on:click={handleClick}>
	{#if key === 'Backspace'}
		<FaBackspace />
	{:else}
		{key}
	{/if}
</button>

<style>
	button {
		padding-inline: min(1vw, 12px);
		font-size: min(4vw, 14px);
		border-radius: 1px;
		color: var(--color-white);
		background-color: var(--color-gray);
		font-weight: 700;
	}
</style>
