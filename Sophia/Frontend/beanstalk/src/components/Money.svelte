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
  $: insufficientFunds = (investTemp <= 0 && $investment === 0);

  //TODO: No longer need the index besides test logs
  function localUpdate (index) {
    investTemp = $investment;
    for (let i=1; i<$investments.length; i++) {
      investTemp += $investments[i].amount - arrTemp[i].amount;
    }
    // console.log("Invest temp: " + investTemp);
    // console.log("arr temp: " + arrTemp[index].amount);
    // console.log("store: " + $investments[index].amount);
  }

  let showModal;

  function handleCancel () {
    reset2Investments();
  }

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
      inv[index].reason = arrTemp[index].reason;
      //inv[index] = [...{inv[index].amount,inv[index].reason}];
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
  <ModalAlternative bind:showModal onCancel={handleCancel}>
    <h1 slot="header">Investment Log</h1>
    <h2>Review and adjust your investments here!</h2>
    {#each arrTemp as i, index}
      {#if index > 0}
      <div class="investment-item">
        <!--{#if index >1}<hr />{/if}-->
          <p>{$investments[index].amount} {currency} investment to pitch {i.pitchId}</p>
          <br>
        <div class="investment-row1">
          <textarea required class="input" placeholder="Enter a reason" bind:value={i.reason}/>
          <input
                  class="input textarea"
                  step="10"
                  min="0"
                  max={$investment + $investments[index].amount}
                  bind:value={i.amount}
                  type="number"
                  placeholder="{i.amount.toString()}"
                  on:input={() => localUpdate(index)}
          />
          <button class="red-button" on:click={() => handleDelete(index)}><i class="fas fa-trash-alt"></i></button>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
        <button
                disabled={insufficientFunds || !i.reason || (i.amount === $investments[index].amount && i.reason === $investments[index].reason)}
                on:click={() => updateInvestment(index)}>
          Apply
        </button>
        <br>
        </div>
      </div>

        {:else if (arrTemp.length === 1 &&  i.pitchId === 'Test') || arrTemp.length === 0}
        <div>
          <p>You have no current investments.</p>
        </div>
      {/if}
    {/each}
    <br>
  </ModalAlternative>
</button>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

  .input {
    padding: 8px;
    font-size: 16px;
    border: 2px solid #1e88e5;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  .red-button {
    margin-left: 15px;
    margin-top: -5px;
    color: white;
    background-color: red;
    border: none;
    padding: 8px;
    border-radius: 30px;
    cursor: pointer;
  }
  button {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #3498db;
    color: #fff;
    border: none;
    margin-top: 20px;
    cursor: pointer;
  }
  button:disabled {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: gray;
    opacity: 0.5;
    color: #fff;
    border: none;
    margin-top: 20px;
    cursor: not-allowed;
  }
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

  .investment-row1 {
    display: flex;
    align-items: flex-start;
  }

  .investment-item {
    background-color: #f2f2f2;
  }

  .money-box:hover {
    background: 10%;
    background-color: #1e88e5;
    color: white;
    transition: 0.25s;
  }
</style>
