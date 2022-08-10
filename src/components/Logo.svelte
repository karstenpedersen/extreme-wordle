<script>
</script>

<a href="/" class="logo">
	<p class="text">EXTREME</p>
	<div class="grid">
		<div class="tile">W</div>
		<div class="tile">O</div>
		<div class="tile">R</div>
		<div class="tile">D</div>
		<div class="tile">L</div>
		<div class="tile">E</div>
	</div>
</a>

<style>
	.logo {
		text-align: center;
		margin-inline: auto;
	}

	.text {
		font-weight: 800;
		color: var(--color-magic);
		font-size: min(4vw, 1.5em);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		width: calc(min(7vw, 40px) * 6);
		gap: min(0.5vw, 5px);
	}

	.tile {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: min(3.5vw, 1em);
		width: 100%;
		aspect-ratio: 1 / 1;
		border: solid var(--color-empty) min(0.45vw, 3px);
		border-radius: 1px;
		text-transform: uppercase;
		font-weight: 800;
		color: var(--color-gray);
		background-color: transparent;

		transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms;

		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}

	.tile:hover {
		color: white;
		background-color: var(--color-magic);
		border-color: var(--color-magic);
	}
</style>
