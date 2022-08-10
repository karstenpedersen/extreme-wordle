<script>
	import { correctGuesses, correctWord, hintCount } from '../stores/gameStore';
	import TileText from './TileText.svelte';

	export let character = '';
	export let charIndex = -1;

	$: charAtIndex = $correctWord.charAt(charIndex);
	$: hidden = charAtIndex === ' ';
	$: correct = character.length > 0 && charAtIndex === character && !hidden;
	$: clickable = $hintCount > 0 && character === ' ' && !hidden;

	$: type = hidden ? 'hidden' : correct ? 'correct' : 'clickable';

	const handleClick = () => {
		if (clickable) {
			correctGuesses.update((progress) => {
				var chars = progress.split('');
				chars[charIndex] = charAtIndex;
				return chars.join('');
			});

			$hintCount = $hintCount - 1;
		}
	};
</script>

<button
	on:click={handleClick}
	class="tile"
	class:hidden={type === 'hidden'}
	class:correct={type === 'correct'}
	class:clickable={type === 'clickable' && clickable}
>
	<TileText {character} />
</button>

<style>
	button:focus {
		outline: none;
	}

	.clickable:hover {
		border-color: var(--color-magic);
		cursor: pointer;
	}

	.correct {
		color: white;
		background-color: var(--color-magic);
		border-color: var(--color-magic);
	}

	.hidden {
		color: transparent !important;
		background-color: transparent !important;
		border-color: transparent;
	}
</style>
