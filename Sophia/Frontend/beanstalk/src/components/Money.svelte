<script lang="ts">
  export let currency: string = '$';

  import { investment } from "../stores/investment";

  function updateInvestment() {
    investment.reduce((value) => value - 1);
  }

</script>

<div class="money-box">
  <div class="amount">Left to invest: {currency}{$investment.toFixed(2)}</div>
</div>

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
}

  .amount {
    margin: auto;
  }
</style>
