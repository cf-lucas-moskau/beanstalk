<script>
    import {experiments} from '../../../../../src/data';
    import {onMount} from 'svelte';
	import { goto } from '$app/navigation';

    let invalidLink = false;
    var eId;
    let experiment;

    console.log('Experiment test');
    onMount (() => {
        
        const urlParams = new URLSearchParams(window.location.search);
        const urlP = window.location.pathname.split('/');
        eId = urlP[(urlP.length)-2];
        experiment = experiments.find(exp => exp.id === eId);
        
        console.log(experiment);
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



