<script lang="ts">
  import {onMount} from "svelte";

  export let currency: string = '$';

  import { investment, investments } from "../stores/investment";
  import ModalAlternative from "./ModalAlternative.svelte";

  //Temporary variables to keep track of edits before submit.
  let arrTemp = [];
  let investTemp;
  $: investTemp;

  let successfulInvestment = false; //TODO: When true show something..?
  let insufficientFunds: boolean;
  $: insufficientFunds = (investTemp <= 0);
  function localUpdate (e) {
    const num = Number(e.target.value);
    //TODO: Some sort of update!!

  }

  let showModal;

  onMount(() => {
    console.log('Money: on mount called\n');
    reset2Investments();
    //1st entry is test.
    for (let i=0; i<arrTemp.length; i++) {
      console.log(arrTemp[i]);
    }
    console.log('Money: end of on mount.');
  });


  //Function to set the array to the version in stores.
  function reset2Investments () {
    arrTemp = [];
    investTemp = $investment;
    $investments.forEach((item, index) => {
      arrTemp.push({ pitchId: item.pitchId, amount: item.amount, reason: item.reason });
    });
  }

  function handleDelete (index) {
    let v = $investments[index];

    investment.reduce(_investment => _investment + v.amount);
    investments.update(investmentsArray => {
      investmentsArray.splice(index, 1);
      //TODO: Would be more efficient but indexes get messed up for some reason.
      //arrTemp.splice(index,1);
      reset2Investments();
      return investmentsArray;
    });
  }
  function updateInvestment(index) {
    console.log('update called');
    if (arrTemp[index].amount === 0) {
      return (handleDelete(index));
    }
    let dif = $investments[index].amount - arrTemp[index].amount;
    investments.update(inv => {
      inv[index].amount = arrTemp[index].amount;
      return inv;
    })
    investment.reduce(_investment => _investment + dif);
    investTemp = $investment;
    successfulInvestment = true;
    console.log("store val: " + $investments[index].amount );
    console.log("temp local val: " + arrTemp[index].amount );
    console.log('Update ends here');
  }

</script>

<button class="money-box" on:click={() => (showModal=true)}>
  <div class="amount">Left to invest: {currency}{$investment.toFixed(2)}</div>
  <ModalAlternative bind:showModal>
    <h1>Investment Log</h1>
    <h2>Review and adjust your investments here!</h2>
    {#each arrTemp as i, index}
      {#if index > 0}
      <div>
        <p>{i.amount} {currency} investment to pitch {i.pitchId}</p>
        <br>
        <input
                step="10"
                min="0"
                max={$investment + $investments[index].amount}
                bind:value={i.amount}
                type="number"
                placeholder="{i.amount.toString()}"
                on:input={localUpdate}
        />
        <button disabled={insufficientFunds} on:click={() => updateInvestment(index)}>Apply</button>
        <br>
        <textarea required placeholder="Enter a reason" value={i.reason}/>
        <button on:click={() => handleDelete(index)}>Test delete</button>
      </div>
        {:else }
        <div>
          <p>You have no current investments.</p>
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
