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



