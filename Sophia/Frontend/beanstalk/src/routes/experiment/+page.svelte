<script lang="ts">
  import { experiments } from '../../data.js';
  import {onDestroy, onMount} from "svelte";
  import { trackPage } from "../../stores/page-tracker";

  let startTime;
  let route;
  let clicks;

  onMount(() => {
    console.log('onMount called');
    startTime = new Date();
    route = window.location.href;
    clicks = 0;
    document.addEventListener('click', () => (clicks++));
  });
  onDestroy(() => {
    const endTime = new Date();
    const timeSpent = endTime - startTime;
    trackPage(route, timeSpent, clicks);
  });

</script>

  <div class="container">
    <h1>Experiment List</h1>
    <div class="card-container">
      {#each experiments as exp}
        <a href={`/experiment/${exp.id}`}>
          <div class="card">
            <h2>{exp.title}</h2>
            <p>{exp.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .card-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .card h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .card p {
    font-size: 16px;
    color: #666;
  }
</style>