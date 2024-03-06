<script lang="ts">
  export let currency: string = '$';

  import { investment, investments } from "../stores/investment";
  import ModalAlternative from "./ModalAlternative.svelte";



  let amount: number;
  let pitchId;
  let reason = '';
  let successfulInvestment = false; //TODO: When true show something..?
  let insufficientFunds = false;

  let showModal;
  function updateInvestment(index) {
    console.log('update called');
    $investments[index].reason = reason;
    //investment.reduce((value) => value - 1);
    console.log(`Investing: ${amount}` + ` in pitch` + pitchId);
    console.log('Reason from form: ' + `${reason}`);
    //FIXME: Get actual result back to investment!
    let dif = 10;
    investment.reduce(_investment => _investment + dif);
    successfulInvestment = true;
    reason = '';
    console.log('Update ends here');
  }


  function handleDelete (index) {
    let v = $investments[index];
    investment.reduce(_investment => _investment + v.amount);
    investments.update(investmentsArray => {
    investmentsArray.splice(index, 1);
    return investmentsArray;
  });
  }

</script>

<button class="money-box" on:click={() => (showModal=true)}>
  <div class="amount">Left to invest: {currency}{$investment.toFixed(2)}</div>
  <ModalAlternative bind:showModal>
    <h1>Investment Log</h1>
    <h2>Review and adjust your investments here!</h2>
    {#each $investments as i, index}
      {#if index > 0}
      <div>
        <p>{i.amount} {currency} investment to pitch {i.pitchId}</p>
        <br>
        <input
                step="10"
                min="0"
                max="{$investment + i.amount}"
                bind:value={amount}
                type="number"
                placeholder="{i.amount.toString()}"
        />
        <button on:click={() => updateInvestment(index)}>Apply</button>
        <br>
        <textarea required placeholder="Enter a reason" value={i.reason}/>
        <button on:click={() => handleDelete(index)}>Test delete</button>
      </div>
      {/if}
    {/each}

  </ModalAlternative>
</button>

<style>
  .money-box {
      display: flex;
      position: absolute;
      right: 10px;
      align-items: center;
      text-align: center;
      width: 100px;
      height: 90px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-right: 10px;
    cursor: pointer;
}

  .amount {
    margin: auto;
  }
</style>
