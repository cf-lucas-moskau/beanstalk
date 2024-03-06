<!--  https://svelte.dev/examples/modal  -->
<script>
    export let showModal; // boolean

    export let dialog; // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
        bind:this={dialog}
        on:close={() => (showModal = false)}
        on:click|self={() => dialog.close()}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <slot name="header" />
<!--        <hr />-->
        <slot />
<!--        <hr />-->
        <!-- svelte-ignore a11y-autofocus -->
        <button class="cancel-button" on:click={() => dialog.close()}>Cancel</button>
    </div>
</dialog>

<style>
    dialog {
        max-width: 32em;
        border-radius: 0.2em;
        border: none;
        padding: 0;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        background-color: #1e88e5;
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    button:hover {
        background-color: #1565c0;
    }

    button:focus {
        outline: none;
    }

    button:active {
        background-color: #0d47a1;
    }

    button:disabled {
        background-color: gray;
        opacity: 0.5;
        cursor: not-allowed;
    }

</style>