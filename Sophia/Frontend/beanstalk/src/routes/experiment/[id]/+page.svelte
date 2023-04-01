<script>
  import Money from "../../../components/Money.svelte";

	export let data;
</script>

<div class="container">
    
    {#if data.experiment.type == 'investment'} 

    <Money amount={200} currency={'€'} />
{/if}
<div>{@html data.experiment.description}</div>
</div>


<style>
    .container {
        width: 100%;
    }
</style>