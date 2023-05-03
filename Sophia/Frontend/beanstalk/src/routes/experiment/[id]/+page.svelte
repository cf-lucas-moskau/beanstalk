<script>
    import Money from "../../../components/Money.svelte";
    import ProjectCards from "../../../components/ProjectCards.svelte";
  
    import {currentExperiment} from "../../../stores/current-experiment.js";
  
    export let data;
    let finishClicked = false;
  
  
    if ($currentExperiment == '') {
      // @ts-ignore
      currentExperiment.changeValue(data.experiment.id);
    }
  
  </script>
  
  <div class="container">
    <div class="center-div">
        <button class="finish-button" on:click={() => {
            finishClicked = true;
        }}>Finish Investing and get Results</button>
        {#if finishClicked}
            <p>Are you sure you want to finish the experiment?</p>
            <p>
                <button class="continue-button" on:click={() => {
                    finishClicked = false;
                }}>Continue</button>
                <button class="end-button">Finish</button>
            </p>
            
        {/if}
    </div>
      
      {#if data.experiment.type == 'investment'} 
  
      <Money currency={'€'} />
  {/if}
  
  <div>
      <ProjectCards pitches={data.pitches} />
  </div>
  </div>
  
  
  <style>
    .continue-button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        background-color: grey;
        color: #ffffff;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .end-button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        background-color: green;
        color: #ffffff;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
      .container {
          width: 100%;
      }
      .center-div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
      .finish-button {
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
  
    .finish-button:hover {
      background-color: #1565c0;
    }
  
    .finish-button:focus {
      outline: none;
    }
  
    .finish-button:active {
      background-color: #0d47a1;
    }

    .finish-button:disabled {
        background-color: gray;
        opacity: 0.5;
        cursor: not-allowed;
    }
  </style>