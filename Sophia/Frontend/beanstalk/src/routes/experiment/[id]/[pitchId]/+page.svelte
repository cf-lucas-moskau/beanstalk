<script lang="ts">
    import {onDestroy, onMount} from 'svelte';
    import { goto } from '$app/navigation';

    import { pageTracking, trackPage} from "../../../../stores/page-tracker";
    import { currentExperiment } from '../../../../stores/current-experiment.js';
    import { experiments } from '../../../../data.js';
    import InvestmentForm from '../../../../components/InvestmentForm.svelte';
    
    export let data;
    
    let pitch: any = null;
    let investment = false;

    let route = 'testHereRoute';
    let startTime;
    let clicks;

    onMount(async () => {
      pitch = data.pitch
      if (!pitch) {
        goto('/404');
      }

      startTime = new Date();
      route = window.location.href;

      console.log('Test page tracking begin:\n');
      console.log($pageTracking);
      console.log('\nTest page tracking end.');
      startTime = new Date();
      clicks = 0;
      document.addEventListener('click', () => (clicks++));
    });

    onDestroy(() => {
      const endTime = new Date();
      const timeSpent = endTime - startTime;
      trackPage(route, timeSpent, clicks);
      console.log("clicks here post destroy:");
      console.log($pageTracking);
    });

    if ($currentExperiment !== '') {
      console.log('current exp is: ' + $currentExperiment);
      // @ts-ignore
      investment = experiments.find((e) => e.id === $currentExperiment).type === 'investment';
    }
  </script>
  
  {#if pitch}
    <div class="project">
      <div class="project-image">
        <!-- 
            id: 'Jkiw83',
        name: 'Pitch 1',
        teamDescription: 'This is the first team',
        image:
         -->
        <img src={pitch.image} alt={pitch.title} />
      </div>
      <div class="project-details">
        <h1>{pitch.name}</h1>
        <p>{pitch.teamDescription}</p>
        <button on:click={() => goto('/experiment/' + $currentExperiment)}>&larr; Back to Pitches</button>
        <br/>
        {#if investment}
        <InvestmentForm pitchId={data.pitch.id}/>
        {/if}
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
  
  <style>
    .project {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
  
    .project-image {
      width: 100%;
      max-width: 800px;
      height: 400px;
      overflow: hidden;
    }
  
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .project-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 800px;
      margin-top: 20px;
    }
  
    .progress-bar {
      height: 10px;
      background-color: #ddd;
      margin: 10px 0;
    }
  
    .project-stats {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 10px 0;
    }
  
    .project-stats div {
      font-size: 14px;
    }
  
    .project-funded {
      color: #2ecc71;
    }
  
    .project-goal {
      color: #e74c3c;
    }
  
    .project-days {
      color: #3498db;
    }
  
    button {
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 4px;
      background-color: #3498db;
      color: #fff;
      border: none;
      margin-top: 20px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #2980b9;
    }

  </style>
  