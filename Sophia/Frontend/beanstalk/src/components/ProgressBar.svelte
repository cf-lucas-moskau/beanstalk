<script lang="ts">
    export let percentComplete: number = 0;
  </script>
  
  <div class="progress-bar">
    <div class="bar" style={`width: ${percentComplete}%`}></div>
  </div>
  
  <style>
    .progress-bar {
      width: 100%;
      height: 20px;
      background-color: #ddd;
      border-radius: 10px;
      overflow: hidden;
    }
  
    .bar {
      height: 100%;
      background-color: #3498db;
      transition: width 0.3s ease-in-out;
    }
  </style>