<script lang="ts">
    import { push } from "svelte-spa-router";
    import { routes } from "../../store";
    import { getImageUrl } from "../../utils/utils";
    export let location = $routes[0].name;
    export let node: HTMLElement = null;

</script>

<div bind:this={node}>
    <ul>
        {#each $routes as route}
            <li on:click={() => push(route.location)} class="{route.name} {location === route.name ? "selected" : ""}">
                <img src="{getImageUrl(route.iconURL)}" alt="{route.iconAlt}">
            </li>
        {/each}
    </ul>
</div>

<style>
    div {
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 30rem;
        background-color: var(--cmd-color-white);
        filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));
    }

    ul {
        display: flex;
        flex-direction: row;
        margin: 0;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.25rem;
        width: 20%;
    }

    li img {
        height: 1.85rem;
    }

    li.selected {
        background-color: var(--cmd-color-main);
    }
</style>