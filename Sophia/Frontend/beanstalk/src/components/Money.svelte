<script lang="ts">
  export let currency: string = '$';

  import { investment, investments } from "../stores/investment";
  import ModalAlternative from "./ModalAlternative.svelte";

  let showModal;
  function updateInvestment() {
    investment.reduce((value) => value - 1);
  }


  //FIXME: Add the money back to investment.
  function handleDelete (index) {
    investments.update(investmentsArray => {
    investmentsArray.splice(index, 1);
    return investmentsArray;
  });
  }

</script>

<button class="money-box" on:click={() => (showModal=true)}>
  <div class="amount">Left to invest: {currency}{$investment.toFixed(2)}</div>
  <ModalAlternative bind:showModal>
    {#each $investments as i, index}
      <p>{i.amount}</p>
      <input placeholder="new amount" bind:value={i.reason}/>
      <button on:click={() => handleDelete(i)}>Test delete</button>
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
