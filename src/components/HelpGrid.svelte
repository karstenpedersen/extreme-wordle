<script>
	import { correctGuesses } from '../stores/gameStore';
	import HintTile from './HintTile.svelte';

	$: columnCount = $correctGuesses.length;
</script>

<div class="grid" style="--columns: {columnCount};">
	{#each Array(columnCount) as _, i}
		<HintTile character={$correctGuesses.charAt(i)} charIndex={i} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		width: 100%;

		max-width: calc(var(--prefered-tile-size) * var(--columns));
		max-height: calc(var(--prefered-tile-size) * var(--rows));

		gap: min(0.5vw, 5px);
	}
</style>
