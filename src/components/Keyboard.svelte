<script lang="ts">
	import words from 'an-array-of-english-words';
	import { createEventDispatcher } from 'svelte';
	import { correctWord, currentInput, guessedWords, guesses } from '../stores/gameStore';

	const dispatch = createEventDispatcher();

	const handleKeydown = (event: KeyboardEvent) => {
		const key = event.key;

		if (key >= 'a' && key <= 'z') {
			if ($currentInput.length >= $correctWord.length) return;

			currentInput.update((n) => {
				if ($correctWord.charAt($currentInput.length) === ' ') {
					n = n.concat(' ');
				}

				n = n.concat(key.toLowerCase());

				return n;
			});
		} else if (key === 'Backspace') {
			currentInput.update((n) => {
				if (n.charAt($currentInput.length - 1) === ' ') {
					n = n.slice(0, -2);
				} else {
					n = n.slice(0, -1);
				}

				return n;
			});
		} else if (key === 'Enter') {
			if ($currentInput.length !== $correctWord.length) {
				dispatch('incorect_length', {
					message: 'Incorrect length'
				});
				return;
			}

			if (!words.includes($currentInput)) {
				dispatch('incorect_not_a_word', {
					message: 'Word cant be found in list'
				});
				return;
			}

			$guessedWords = [...$guessedWords, $currentInput];

			if ($currentInput === $correctWord) {
				dispatch('winner', {
					message: 'You won!',
					correctWord: $correctWord
				});
			} else if ($guessedWords.length >= $guesses) {
				dispatch('loser', {
					message: 'You lost',
					correctWord: $correctWord
				});
			}

			$currentInput = '';
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<style>
</style>
