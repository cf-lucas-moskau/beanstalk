<script>
    import {experiments} from '../../../../../src/data';
	import { pageTracking, trackPageTime} from "../../../../stores/time-tracker";
    import {onMount, onDestroy} from 'svelte';
	import { goto } from '$app/navigation';

    let invalidLink = false;
    var eId;
    let experiment;

	let startTime;
	let route;

    console.log('Experiment test');
    onMount (() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlP = window.location.pathname.split('/');
        eId = urlP[(urlP.length)-2];
        experiment = experiments.find(exp => exp.id === eId);

		startTime = new Date();
		route = window.location.href;
    });

	onDestroy(() => {
		const endTime = new Date();
		const timeSpent = endTime - startTime;
		trackPageTime(route, timeSpent);
	});

</script>

<div class="ExplanationBody">
    <h1>{experiment?.title}</h1>
    <p>{experiment?.description}</p>
</div>
<div class="button-container">
	<button class="styled-button"
		on:click={() => {
				goto('../' + eId);
		}}
	>
		Continue to experiment
	  </button>
</div>

<style>
	.styled-button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 12px 24px;
		border: none;
		border-radius: 4px;
		background-color: #1e88e5;
		color: #ffffff;
		font-size: 16px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
	.styled-button:hover {
		background-color: #1565c0;
	}

	.styled-button:focus {
		outline: none;
	}
</style>

