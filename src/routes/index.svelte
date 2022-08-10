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
		<p>Great job mate</p>
		<button on:click={startGame}>Play again!</button>
	{:else if gameState === 'loser'}
		<h1>You lost!</h1>
		<p>{`The word was ${$correctWord}`}</p>
		<p>Try again</p>
		<button on:click={startGame}>Play again!</button>
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
</style>
