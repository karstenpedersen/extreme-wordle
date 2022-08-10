<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import {
		correctGuesses,
		correctWord,
		currentInput,
		guessedWords,
		guesses,
		wordList
	} from '../stores/gameStore';
	import Key from './Key.svelte';

	const dispatch = createEventDispatcher();

	const keys = [
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
	];

	const handleKeydown = (event: KeyboardEvent) => {
		const key = event.key;

		handleInput(key);
	};

	const handleInput = (key: string) => {
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

			if (!$wordList.includes($currentInput)) {
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

			$currentInput.split('').map((char, index) => {
				if (char === $correctWord.charAt(index)) {
					correctGuesses.update((progress) => {
						var chars = progress.split('');
						chars[index] = char;
						return chars.join('');
					});
				}
			});

			$currentInput = '';
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="keyboard">
	{#each keys as keyRow}
		<div class="key-row" style="--cols: {keyRow.length};">
			{#each keyRow as key}
				<Key
					{key}
					on:clicked={(e) => {
						const key = e.detail.key;

						handleInput(key);
					}}
				/>
			{/each}
		</div>
	{/each}
</div>

<style>
	.keyboard {
		display: flex;
		flex-direction: column;
		gap: min(1vw, 8px);
		max-width: 500px;
		margin-bottom: 100px;
	}

	.key-row {
		display: grid;
		grid-template-columns: repeat(var(--cols), 1fr);
		min-height: 32px;
		gap: min(1vw, 8px);
	}
</style>
