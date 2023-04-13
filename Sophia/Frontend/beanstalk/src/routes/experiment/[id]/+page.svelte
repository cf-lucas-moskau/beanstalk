<script>
    import Money from "../../../components/Money.svelte";
    import ProjectCards from "../../../components/ProjectCards.svelte";
  
    import {currentExperiment} from "../../../stores/current-experiment.js";
  
    export let data;
  
  
    if ($currentExperiment == '') {
      // @ts-ignore
      currentExperiment.changeValue(data.experiment.id);
    }
  
  </script>
  
  <div class="container">
      
      {#if data.experiment.type == 'investment'} 
  
      <Money currency={'€'} />
  {/if}
  <div>
      <ProjectCards pitches={data.pitches} />
  </div>
  </div>
  
  
  <style>
      .container {
          width: 100%;
      }
  </style>