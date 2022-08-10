<script>
	import { correctWord, currentInput, guessedWords, guesses } from '../stores/gameStore';
	import BoardTile from './BoardTile.svelte';

	$: rowCount = $guesses;
	$: columnCount = $correctWord.length;
</script>

<div class="grid" style="--rows: {rowCount}; --columns: {columnCount};">
	{#each Array(rowCount) as _, i}
		<div class="row">
			{#each Array(columnCount) as _, j}
				{#if i < $guessedWords.length}
					<BoardTile character={$guessedWords[i].charAt(j)} charIndex={j} old={true} />
				{:else if i === $guessedWords.length}
					<BoardTile character={$currentInput?.charAt(j)} charIndex={j} input={true} />
				{:else}
					<BoardTile charIndex={j} />
				{/if}
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: repeat(var(--rows), 1fr);
		gap: min(0.5vw, 5px);
		width: 100%;
		height: 100%;
		max-width: calc(var(--prefered-tile-size) * var(--columns));
		max-height: calc(var(--prefered-tile-size) * var(--rows));
	}

	.row {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: min(0.5vw, 5px);
	}
</style>
