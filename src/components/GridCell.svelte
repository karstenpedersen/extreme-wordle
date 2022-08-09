<script>
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { correctWord } from '../stores/gameStore';

	export let character = '';
	export let charIndex = -1;
	export let input = false;

	$: charAtIndex = $correctWord.charAt(charIndex);

	$: space = charAtIndex === ' ';
	$: correct = character.length > 0 && charAtIndex === character && !space && !input;
	$: abscent =
		character.length > 0 && $correctWord.includes(character) && !correct && !space && !input;
</script>

<div class="cell noselect" class:space class:correct class:abscent>
	{#if character !== ''}
		<div in:scale={{ duration: 300, easing: quintOut }}>{character}</div>
	{/if}
</div>

<style>
	.cell {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: min(3vw, 3em);
		aspect-ratio: 1 / 1;
		background-color: var(--color-empty);
		color: var(--color-gray);
		border-radius: 0.4vw;
		text-transform: uppercase;
		font-weight: 700;
	}

	.space {
		color: transparent !important;
		background-color: transparent !important;
	}

	.correct {
		color: white;
		background-color: var(--color-correct);
	}

	.abscent {
		color: white;
		background-color: var(--color-abscent);
	}
</style>
