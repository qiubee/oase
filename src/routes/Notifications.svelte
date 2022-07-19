<script lang="ts">
    import { afterUpdate, onMount } from "svelte";
    import type { Post, Student } from "src/@types/main";
    import TopBar from "../lib/components/TopBar.svelte";
    import NavBar from "../lib/components/NavBar.svelte";
    import Notification from "../lib/components/Notification.svelte";
    import { students, userID, posts, categories } from "../store";
    import { calcContentView } from "../utils/utils";

    enum View {
        NOTIFICATIONS,
        MESSAGES,
    }

    let header: HTMLElement;
    let navigation: HTMLElement;
    let contentHeight: number;
    let view: View = View.NOTIFICATIONS;

    let following: Student["following"] = $students.find(user => user.id === $userID).following;
    let notifications = $posts.filter(function (post) {
        if (post.author === $userID) {
            return post;
        }

        for (const categoryID of following.categories) {
            if ($categories[categoryID].name === post.category) {
                return post;
            }
        }

        for (const postID of following.posts) {
            if (post.id === postID) {
                return post;
            }
        }
    });

    function toggleView(option: View): void {
        if (option !== view) {
            view = option;
        }
    }

    afterUpdate(function () {
        if (view === View.NOTIFICATIONS) {
        }
    })

    onMount(function () {
        contentHeight = calcContentView(header, navigation);
    })
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header} state={"notifications"}/>
        <main style="max-height: {contentHeight}px;">
            <div class="toggle">
                <button on:click={() => toggleView(View.NOTIFICATIONS)} class="{view === View.NOTIFICATIONS ? "active": ""}">Laatste meldingen</button>
                <button on:click={() => toggleView(View.MESSAGES)} class="{view === View.MESSAGES ? "active": ""}">Nieuwe Berichten</button>
            </div>
            {#if view === View.NOTIFICATIONS}
                <ul class="notifications">
                    {#each notifications as post}
                        <li>
                            <Notification {post}/>
                        </li>
                    {/each}
                </ul>
            {:else if view === View.MESSAGES}
            <div class="messages">
                <p>Geen nieuwe berichten.</p>
            </div>
            {/if}
        </main>
        <NavBar bind:node={navigation} location={"notifications"}/>
    </div>
</div>

<style>
    .content,
    main {
        height: 100%;
    }

    .toggle {
        display: flex;
        flex-direction: row;
        margin: 0 0.75rem;
        padding-top: 0.75rem;
    }

    .toggle button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        color: initial;
        font-size: 0.8rem;
        font-family: var(--font-kotori-rose);
        font-weight: bold;
        width: 50%;
        background-color: var(--cmd-color-main);
    }

    .toggle .active {
        background-color: var(--cmd-color-white);
    }

    .notifications li {
        margin-bottom: 0.75rem;
    }

    .messages {
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        font-weight: bold;
        text-align: center;
        margin: 0;
    }
</style>