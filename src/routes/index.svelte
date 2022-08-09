<script>
	import words from 'an-array-of-english-words';
	import { onMount } from 'svelte';
	import Grid from '../components/Grid.svelte';
	import Keyboard from '../components/Keyboard.svelte';

	import { correctWord, currentInput, guessedWords, guesses } from '../stores/gameStore';

	let generated = false;
	let gameState = 'start';

	onMount(() => {
		handleReset();
	});

	const handleReset = () => {
		$guessedWords = [];
		$correctWord = words[Math.floor(Math.random() * words.length)];
		$guesses = $correctWord.length;
		$currentInput = '';

		generated = true;
	};

	const startGame = () => {
		handleReset();
		gameState = 'game';
	};
</script>

<div class="grid-container">
	{#if gameState === 'game'}
		<Grid />
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
		<p>Try again</p>
		<button on:click={startGame}>Play again!</button>
	{/if}
</div>

<style>
	.grid-container {
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: 32px;
		align-items: center;
		justify-content: center;
		max-width: max-content;
		height: 100%;
		flex-grow: 1;
	}
</style>
