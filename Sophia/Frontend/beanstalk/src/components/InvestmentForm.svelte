<!-- src/components/InvestmentForm.svelte -->
<script lang="ts">

    import { investment, investments } from "../stores/investment"
    import ModalAlternative from "./ModalAlternative.svelte";

    let amount = 100;
    let reason = '';
    let unsufficientFunds = false;
    let successfulInvestment = false;
    let showModal;


    export let pitchId: string;

    $: amount > $investment ? unsufficientFunds = true : null;

    function handleInvest() {
      console.log(`Investing: ${amount}` + ` in pitch` + pitchId);
      console.log('Reason from form: ' + `${reason}`);
      $investments = [...$investments, { pitchId, amount, reason }];
      investment.reduce(_investment => _investment - amount);
      successfulInvestment = true;
      reason = '';
      showModal = false;
    }
  </script>

  <div class="investment-form">
    <input
      class="investment-input"
      type="number"
      step="10"
      min="0"
      placeholder="Enter investment amount"
      bind:value="{amount}"
    />
    <!-- Fixed: now insufficient amount is checked every time the input is changed -->
    {#if amount > $investment}
    <div class="invalid-div">
		<p>Insufficient Funds, lower investment</p>
	</div>
    {/if}
    {#if successfulInvestment && !unsufficientFunds}
    <div class="success-div">
		<p>Success</p>
	</div>
    {/if}
    <br/>

    <button class="investment-button" disabled={amount > $investment || amount <= 0} on:click={() => (showModal = true)}>Invest</button>

    {#if showModal}
    <ModalAlternative bind:showModal>
      <h2 slot="header">
        Why do you want to invest?
      </h2>
      <textarea autofocus bind:value={reason} placeholder="Because this team rocks!"></textarea>
      <div class="modal-actions">
        <button class="investment-button" disabled={reason===''} on:click={handleInvest}>Invest</button>
      </div>
    </ModalAlternative>
    {/if}

    <p>{$investment} € left to invest</p>
    {#each $investments as e, index}
      {#if index !== 0}
        <p>{e.amount} to pitch {e.pitchId} because: <br> {e.reason}</p>
      {/if}
    {/each}
  </div>


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
