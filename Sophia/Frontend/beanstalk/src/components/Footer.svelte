<script>
import { consentForStudy, consentForData, currentExperiment } from "../stores/current-experiment"; 
import {investments} from "../stores/investment";

</script>
  
  <style>
    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
      color: #fff;
      padding: 20px;
      font-size: 14px;
    }
    a {
      color: #fff;
      text-decoration: none;
      margin-left: 15px;
      margin-right: 15px;
    }
    a:hover {
      color: #ddd;
    }
  </style>
  
  <footer>
    <span>&copy; 2023 Beanstalk. All rights reserved.</span>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/terms-of-service">Terms of Service</a>
    <a href="/contact">Contact Us</a>
    <button on:click={() => {
        consentForStudy.set(!$consentForStudy);
    }}>{$consentForStudy}</button>
    <button on:click={() => {
        consentForData.set(!$consentForData);
    }}>{$consentForData}</button>
    <p>Current Experiment: {$currentExperiment} {#each $investments as investment, i}
        <p>{investment.pitchId} {investment.amount}</p>
    {/each}</p>
    
  </footer>
  