<!-- src/components/InvestmentForm.svelte -->
<script lang="ts">

    import { investment, investments } from "../stores/investment";
    let amount = 100;
    let unsufficientFunds = false;
    let successfulInvestment = false;


    export let pitchId: string;

    $: amount > $investment ? unsufficientFunds = true : null;
  
    function handleInvest() {
      console.log(`Investing: ${amount}` + ` in pitch` + pitchId);
      $investments = [...$investments, { pitchId, amount }];
      investment.reduce(_investment => _investment - amount);
      successfulInvestment = true;
    }
  </script>
  
  <style>
    .investment-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 300px;
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
    }
  
    .investment-input {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      border: 2px solid #1e88e5;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  
    .investment-button {
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
  
    .investment-button:hover {
      background-color: #1565c0;
    }
  
    .investment-button:focus {
      outline: none;
    }
  
    .investment-button:active {
      background-color: #0d47a1;
    }

    .investment-button:disabled {
        background-color: gray;
        opacity: 0.5;
        cursor: not-allowed;
    }
    .invalid-div{
		background-color: lightcoral;
		border-radius: 10px;
		margin-top: 20px;
		text-align: center;
        width: 100%
	}
    .success-div{
		background-color: lightgreen;
		border-radius: 10px;
		margin-top: 20px;
		text-align: center;
        width: 100%
	}
  </style>
  
  <div class="investment-form">
    <input
      class="investment-input"
      type="number"
      step="10"
      min="0"
      placeholder="Enter investment amount"
      bind:value="{amount}"
    />
    {#if unsufficientFunds}
    <div class="invalid-div">
		<p>Unsufficient Funds, lower investment</p>
	</div>
    {/if}
    {#if successfulInvestment}
    <div class="success-div">
		<p>Success</p>
	</div>
    {/if}
    <p>{$investment} NOK left to invest</p>
    <button class="investment-button" on:click="{handleInvest}" disabled={amount > $investment || amount <= 0}>
      Invest
    </button>
  </div>
  