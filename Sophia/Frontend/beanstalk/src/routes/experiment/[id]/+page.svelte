<script>
  import Money from "../../../components/Money.svelte";
  import ProjectCards from "../../../components/ProjectCards.svelte";


	export let data;
</script>

<div class="container">
    
    {#if data.experiment.type == 'investment'} 

    <Money amount={200} currency={'€'} />
{/if}
<div>
    <ProjectCards pitches={data.pitches} />
</div>
</div>


<style>
    .container {
        width: 100%;
    }
</style>