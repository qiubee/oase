<script lang="ts">
    import Category from "./topbar/Category.svelte";
    import { routes } from "../../store";
    export let state: string = routes[0];
    export let node: HTMLElement;
</script>

<header bind:this={node}>
    {#if state === routes[0]}
        <Category/>
    {/if}
    <button class="cta">

    </button>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        max-height: 3.25rem;
        background-color: var(--cmd-color-main);
        border-bottom: 2px solid var(--cmd-color-black);
        padding: 0.75rem 0;
        margin: 0 0.75rem;
    }

    .cta {
        display: block;
        flex-shrink: 0;
        appearance: none;
        border: none;
        width: 2.5rem;
        height: 2.5rem;
        background-color: var(--cmd-color-white);
        border-radius: 0.5rem;
    }
</style>