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
		--color-empty: #1d1d1d;

		--color-gray: rgb(53, 53, 53);
	}

	body {
		color: white;
		background-color: black;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 47px);
	}

	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}
</style>
