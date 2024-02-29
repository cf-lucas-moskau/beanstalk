<script>
    import { createEventDispatcher } from 'svelte';

    export let inputValue = '';

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
        <h2>Before you invest...</h2>
        <p>Why do you want to invest in this pitch?</p>
        <textarea autofocus bind:value={inputValue} placeholder="Because this team rocks!"></textarea>
        <div class="modal-actions">
            <button class="investment-button" on:click={closeModal}>Cancel</button>
            <button class="investment-button" disabled={inputValue===''} on:click={handleSubmit}>Submit</button>
        </div>
    </div>
</div>

<style>
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
    textarea {
        width: 100%;
        height: 200px;
    }
</style>