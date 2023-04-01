<script lang="ts">
  import ProgressBar from "./ProgressBar.svelte";

    export let projects: any[] = [];
  </script>
  
  <div class="project-grid">
    {#each projects as project, i}
      <!-- {#if i % 3 === 0}
        <div class="project-row">
      {/if} -->
      <a href={`/project/${project.id}`}>
      <div class="project-card">
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ProgressBar percentComplete={(project.funded / project.goal) * 100} />
        <div class="project-stats">
          <div class="project-funded">{project.funded} funded</div>
          <div class="project-goal">{project.goal} goal</div>
          <div class="project-days">{project.days} days left</div>
        </div>
      </div>
        </a>
      <!-- {#if (i + 1) % 3 === 0 || i === projects.length - 1}
        </div>
      {/if} -->
    {/each}
  </div>
  
  <style>
    .project-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 20px;
    }
  
    .project-row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;
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
  
    .progress-bar {
      height: 10px;
      background-color: #ddd;
      margin: 10px;
      position: relative;
      left: 0px;
      bottom: 10px;
    }
  
    .project-stats {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 10px;
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
  </style>
  