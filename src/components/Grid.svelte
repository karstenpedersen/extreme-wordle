<script>
	import { correctWord, currentInput, guessedWords, guesses } from '../stores/gameStore';
	import GridCell from './GridCell.svelte';

	$: rowCount = $guesses;
	$: columnCount = $correctWord.length;
</script>

<div class="grid" style="--rows: {rowCount}; --columns: {columnCount};">
	{#each Array(rowCount) as _, i}
		<div class="row">
			{#each Array(columnCount) as _, j}
				{#if i < $guessedWords.length}
					<GridCell character={$guessedWords[i].charAt(j)} charIndex={j} />
				{:else if i === $guessedWords.length}
					<GridCell character={$currentInput?.charAt(j)} charIndex={j} input={true} />
				{:else}
					<GridCell charIndex={j} />
				{/if}
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: repeat(var(--rows), 1fr);
		width: calc(min(6vw, 70px) * var(--columns));
		height: calc(min(6vw, 70px) * var(--rows));
		gap: min(0.5vw, 5px);
	}

	.row {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: min(0.5vw, 5px);
	}
</style>
