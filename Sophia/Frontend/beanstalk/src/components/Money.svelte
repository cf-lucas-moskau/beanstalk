<script lang="ts">
    export let amount: number = 0;
    export let currency: string = '$';
  </script>
  
  <div class="money-box">
    <div class="amount">{currency}{amount.toFixed(2)}</div>
  </div>
  
  <style>
    .money-box {
        display: flex;
        position: absolute;
        right: 10px;
        align-items: center;
        width: 100px;
        height: 50px;
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
  