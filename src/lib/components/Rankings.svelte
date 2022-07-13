<script lang="ts">
    import type { Category } from "src/@types/main";
    import FollowButton from "./FollowButton.svelte";
    import { students, categories, userID } from "../../store";

    const user = $students.find(user => user.id === $userID);
    $: sortedCategories = $categories.sort(function (a, b) {
        if (a.followers.length < b.followers.length) {
            return 1;
        }
    });

    function follow(category: Category, userID: number): void {
        if (category.followers.includes(userID) && user.following.categories.includes(category.id)) {
            // unfollow
            const followers = $categories.find(function (item) {
                return item.id === category.id
            }).followers;
            const followedCategories = $students.find(function (student) {
                return student.id === userID;
            }).following.categories;

            categories.update(function (categories) {
                categories.find(function (item) {
                    return item.id === category.id
                }).followers = followers.filter(function (id) {
                    return id !== userID;
                })
                return categories;
            })

            students.update(function (students) {
                students.find(function (student) {
                    return student.id === userID;
                }).following.categories = followedCategories.filter(function (id) {
                    return id !== category.id;
                })
                return students;
            });
        } else {
            // follow
            categories.update(function (categories) {
                categories.find(function (item) {
                    return item.id === category.id;
                }).followers.push(userID);
                return categories;
            })

            students.update(function (students) {
                students.find(function (student) {
                    return student.id === userID;
                }).following.categories.push(category.id)
                return students;
            });
        }
    }
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
        font-family: "Pauschal";
    }

    li .category {
        text-transform: capitalize;
    }

    li .followers {
        font-size: 0.75rem;
    }
</style>