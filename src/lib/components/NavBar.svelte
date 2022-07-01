<script lang="ts">
    import { routes } from "../../store";
    export let location: string = $routes[0].name;
    export let node: HTMLElement;
</script>

<div bind:this={node}>
    <ul>
        {#each $routes as route}
            <li class="{route.name.toLowerCase()} {location === route.name ? "selected" : ""}" style="background-image: {route.iconUrl};">
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
        filter:  drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));
    }

    ul {
        display: flex;
        flex-direction: row;
        margin: 0;
    }

    li {
        height: 3.5rem;
        width: 20vw;
    }

    li.selected {
        background-color: var(--cmd-color-main);
    }
</style>