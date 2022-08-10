<script>
	import { correctWord, currentInput } from '../stores/gameStore';
	import TileText from './TileText.svelte';

	export let character = '';
	export let charIndex = -1;
	export let input = false;
	export let old = false;

	$: charAtIndex = $correctWord.charAt(charIndex);
	$: hidden = charAtIndex === ' ';
	$: correct = character.length > 0 && charAtIndex === character && !hidden && !input;
	$: abscent =
		character.length > 0 && $correctWord.includes(character) && !correct && !hidden && !input;
	$: selected = charIndex === $currentInput.length && input && !hidden;

	$: type = hidden ? 'hidden' : correct ? 'correct' : abscent ? 'abscent' : 'empty';
</script>

<div
	class="tile"
	class:hidden={type === 'hidden'}
	class:correct={type === 'correct'}
	class:abscent={type === 'abscent'}
	class:solid={old && type === 'empty'}
	class:selected
>
	<TileText {character} />
</div>

<style>
	.selected {
		border-color: var(--color-gray);
	}
	.solid {
		background-color: var(--color-empty);
	}

	.hidden {
		color: transparent !important;
		background-color: transparent !important;
		border-color: transparent;
	}

	.correct {
		color: white;
		background-color: var(--color-correct);
		border-color: var(--color-correct);
	}

	.abscent {
		color: white;
		background-color: var(--color-abscent);
		border-color: var(--color-abscent);
	}
</style>
