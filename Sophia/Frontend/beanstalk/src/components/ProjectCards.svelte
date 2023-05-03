<script lang="ts">
  import ProgressBar from "./ProgressBar.svelte";
  import { currentExperiment } from "../stores/current-experiment";

    export let pitches: any[] = [];
  </script>
  
  <div class="project-grid">
    {#each pitches as project, i}
      <!-- {#if i % 3 === 0}
        <div class="project-row">
      {/if} -->
      <div class="project-card">
        <img src={project.image} alt={project.name} />
        <h2>{project.name}</h2>
        <p class="card-description">{project.productDescription}</p>
        <a href={`/experiment/${$currentExperiment}/${project.id}`} class="learn-more">
            Learn more
        </a>
      </div>
    {/each}
  </div>
  
  <style>
    .card-description{
      height: 160px;
    }

    .project-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 20px;
    }
  
    .project-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
  
    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  
    .project-card h2 {
      font-size: 24px;
      font-weight: bold;
      margin: 10px;
    }
  
    .project-card p {
      font-size: 16px;
      margin: 10px;
    }

    .learn-more{
        background-color: #3498db;
        align-items: center;
        text-align: center;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 10px;
        margin: 10px;
        width: 80%
    }
  </style>
  