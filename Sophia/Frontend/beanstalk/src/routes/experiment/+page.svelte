<script lang="ts">
  import { onMount} from 'svelte';
  import { writable } from 'svelte/store';
  import { experiments } from '../../data.js';

  let isFirstVal;
  let copy = [];
  const isFirstLoad = writable(true);

  onMount(() => {
    console.log('called nMount');
    isFirstLoad.subscribe(val => {
      console.log('Subscribe called');
      isFirstVal = val;
    });

    if (isFirstVal) {
      console.log('isFirstVal');
      let storedExperiments = localStorage.getItem('experiments');
      if (storedExperiments) {
        copy = JSON.parse(storedExperiments);
      } else {
        copy = shuffle([...experiments]);
        localStorage.setItem('experiments', JSON.stringify(copy));
      }
      isFirstLoad.set(false);
    }
  });

//Fisher-Yates shuffle from svelte documentation
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

</script>

  <div class="container">
    <h1>Experiment List</h1>
    <div class="card-container">
      {#each copy as exp}
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