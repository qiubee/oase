<script lang="ts">
    import { push } from "svelte-spa-router";
    import { categories } from "../../store";

    export let max: number = $categories.length;
    const allCategories = $categories;
</script>

<ul class="categories">
    {#each allCategories as category, index}
        {#if index < max}
            <li on:click={() => push("/categorie/" + category.name)}>{category.name}</li>
        {/if}
    {/each}
</ul>

<style>
    .categories li:hover {
        cursor: pointer;
    }

    .categories {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0.75rem 0.75rem;
    }

    .categories li {
        display: flex;
        justify-content: center;
        width: 7.5rem;
        background-color: var(--cmd-color-white);
        padding: 0.6rem 0.75rem;
        font-family: var(--font-pauschal);
        font-size: 0.9em;
        border-radius: 0.25rem;
        margin-bottom: 0.75rem;
    }

    @media (min-width: 22rem) {
        .categories {
            justify-content: space-around;
        }

        .categories li {
            margin: 0.5rem;
        }
    }
</style>