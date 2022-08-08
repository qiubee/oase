<script lang="ts">
    import FollowButton from "./FollowButton.svelte";
    import { students, categories, userID } from "../../store";
    import { follow } from "../../actions";

    const user = $students.find(user => user.id === $userID);
    $: sortedCategories = $categories.sort(function (a, b) {
        if (a.followers.length < b.followers.length) {
            return 1;
        }
    });
</script>

<div class="rankings">
    <h2>Populairste onderwerpen</h2>
    <ol>
        {#each sortedCategories as category, index}
            {#if index < 5}
                <li>
                    <div>
                        <div class="info">
                            <span class="category">{category.name}</span>
                            <span class="followers">{category.followers.length} volgers</span>
                        </div>
                        <div on:click={() => follow(category, $userID)}>
                            {#if user.following.categories.includes(category.id)}
                                <FollowButton followed={true} />
                            {:else}
                                <FollowButton/>
                            {/if}
                        </div>
                    </div>
                </li>
            {/if}
        {/each}
    </ol>
</div>

<style>
    .rankings{
        margin: 1.5rem 0;
    }

    h2 {
        font-size: 1rem;
        margin: 0 0.75rem;
    }

    ol {
        margin: 0.75rem 0;
        counter-reset: counter;
    }

    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0.25rem 0;
        padding: 0.5rem 0.75rem;
        background-color: white;
        background-color: var(--cmd-color-white);
        counter-increment: counter;
    }

    li::before {
        content: counter(counter);
        margin-right: 1rem;
        width: 0.5rem;
    }

    li > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    li .info {
        display: flex;
        flex-direction: column;
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
    }

    li .category {
        text-transform: capitalize;
    }

    li .followers {
        font-size: 0.75rem;
    }
</style>