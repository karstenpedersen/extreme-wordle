<script>
	import Header from '../components/Header.svelte';

	import '../app.css';
</script>

<Header />
<main>
	<slot />
</main>

<style global>
	:root {
		--color-correct: rgb(0, 122, 0);
		--color-abscent: rgb(179, 137, 0);
		--color-hint: rgb(32, 32, 184);
		--color-magic: rgb(137, 26, 189);
		--color-error: rgb(122, 11, 11);
		--color-gray: rgb(53, 53, 53);
		--color-empty: #1d1d1d;

		--prefered-tile-size: 60px;
	}

	body {
		color: white;
		background-color: black;
	}

	main {
		display: flex;
		margin-top: 40px;
	}

	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}

	.tile {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: min(6vw, 40px);
		width: 100%;
		aspect-ratio: 1 / 1;
		border: solid var(--color-empty) 3px;
		border-radius: 1px;
		text-transform: uppercase;
		font-weight: 700;
		color: var(--color-gray);
		background-color: transparent;

		transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms;

		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;

		overflow: hidden;
	}
</style>
