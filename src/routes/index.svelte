<script>
	import words from 'an-array-of-english-words';
	import { onMount } from 'svelte';
	import Grid from '../components/Grid.svelte';
	import HelpGrid from '../components/HelpGrid.svelte';
	import Keyboard from '../components/Keyboard.svelte';
	import {
		correctGuesses,
		correctWord,
		currentInput,
		guessedWords,
		guesses,
		hintCount,
		wordList
	} from '../stores/gameStore';

	let gameState = 'game';

	onMount(() => {
		handleReset();
	});

	const handleReset = () => {
		$wordList = words;
		$guessedWords = [];
		$correctWord = $wordList[Math.floor(Math.random() * $wordList.length)];
		$guesses = Math.max($correctWord.length, 4);
		$currentInput = '';
		$correctGuesses = new Array($correctWord.length + 1).join(' ');
		$hintCount = Math.ceil($correctWord.length / 7);
	};

	const startGame = () => {
		handleReset();
		gameState = 'game';
	};
</script>

<div class="grid-container">
	{#if gameState === 'game'}
		<HelpGrid />
		<hr />
		<Grid />
		<div>
			{$hintCount} hints left
		</div>
		<Keyboard
			on:winner={(e) => {
				gameState = 'winner';
			}}
			on:loser={(e) => {
				gameState = 'loser';
			}}
			on:incorect_length={(e) => {
				window.alert(e.detail.message);
			}}
			on:incorect_not_a_word={(e) => {
				window.alert(e.detail.message);
			}}
		/>
	{:else if gameState === 'start'}
		<button on:click={startGame}>Play now!</button>
	{:else if gameState === 'winner'}
		<h1>You won!</h1>
		<div class="correct-word">
			<p class="gray">The word was:</p>
			<p class="word">{$correctWord}</p>
		</div>
		<div class="try-again">
			<p>Try again</p>
			<button on:click={startGame}>Play again!</button>
		</div>
	{:else if gameState === 'loser'}
		<h1>You lost!</h1>
		<div class="correct-word">
			<p class="gray">The correct word was:</p>
			<p class="word">{$correctWord}</p>
		</div>
		<div class="try-again">
			<p>Try again</p>
			<button on:click={startGame}>Play again!</button>
		</div>
	{/if}
</div>

<style>
	.grid-container {
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: 16px;
		align-items: center;
		justify-content: center;
		max-width: min(95vw, 1200px);
		height: 100%;
		flex-grow: 1;
	}

	hr {
		width: 10%;
		height: 2px;
		background-color: var(--color-empty);
		border: none;
	}

	h1 {
		font-size: 32px;
		font-weight: 800;
	}

	.gray {
		color: var(--color-gray);
	}

	.correct-word {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
	}

	.word {
		font-size: 20px;
		font-weight: 600;
		color: var(--color-magic);
		text-decoration: underline;
	}

	.try-again {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		margin-top: 32px;
	}

	button {
		padding: 4px 12px;
		border-radius: 1px;
		background-color: var(--color-magic);
		font-weight: 800;
		font-size: 18px;
		color: white;
		cursor: pointer;
		outline-color: transparent;

		transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms;
	}

	button:hover {
		outline: solid 1px white;
	}

	button:focus {
		outline: none;
	}
</style>
