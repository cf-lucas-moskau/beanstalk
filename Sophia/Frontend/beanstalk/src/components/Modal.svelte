<script>
    import { createEventDispatcher } from 'svelte';

    let inputValue = '';

    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('closeModal');
    }

    function handleSubmit() {
        if (inputValue) {
            dispatch('submit', inputValue);
            inputValue = '';
        }
    }
</script>

<div class="modal">
    <div class="modal-content">
        <h2>Modal Title</h2>
        <input type="text" bind:value={inputValue} placeholder="Enter value" />
        <div class="modal-actions">
            <button on:click={closeModal}>Cancel</button>
            <button disabled={inputValue===''} on:click={handleSubmit}>Submit</button>
        </div>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .modal-content {
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
    }

    .modal h2 {
        margin-top: 0;
    }

    .modal-actions {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .modal-actions button {
        margin: 0 0.5rem;
    }
</style>