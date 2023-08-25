<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from '$lib/threeCanvas';

	let canvasElement:HTMLCanvasElement;

	onMount(() => {
		createScene(canvasElement);
	});
</script>

<canvas bind:this={canvasElement} />