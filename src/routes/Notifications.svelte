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
    let toggleHeight: number;
    let view: View = View.NOTIFICATIONS;

    let following: Student["following"] = $students.find(user => user.id === $userID).following;
    let notifications = <Post[]>$posts.filter(function (post) {
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
            <div bind:clientHeight={toggleHeight} class="toggle">
                <button on:click={() => toggleView(View.NOTIFICATIONS)} class="{view === View.NOTIFICATIONS ? "active": ""}">Meldingen</button>
                <button on:click={() => toggleView(View.MESSAGES)} class="{view === View.MESSAGES ? "active": ""}">Berichten</button>
            </div>
            {#if view === View.NOTIFICATIONS}
                {#if notifications.length > 0}
                <ul class="notifications" style="max-height: calc({contentHeight}px - {toggleHeight}px);">
                    {#each notifications as post}
                        <li>
                            <Notification {post}/>
                        </li>
                    {/each}
                </ul>
                {:else}
                <div class="empty">
                    <p>Geen meldingen.</p>
                    <p>Volg onderwerpen of discussies om meldingen te krijgen.</p>
                </div>
                {/if}
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
    .notifications {
        scroll-behavior: smooth;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
    }

    .notifications::-webkit-scrollbar {
        display: none;
    }

    .content,
    main {
        height: 100%;
    }

    .toggle {
        display: flex;
        flex-direction: row;
        margin: 0 0.75rem;
        padding: 0.75rem 0;
    }

    .toggle button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        color: initial;
        font-size: 0.8rem;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: bold;
        width: 50%;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
    }

    .toggle .active {
        background-color: white;
        background-color: var(--cmd-color-white);
    }

    .notifications {
        margin: 0;
        overflow-y: auto;
    }

    .notifications li {
        margin-bottom: 0.75rem;
    }

    .messages,
    .empty {
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        font-weight: bold;
        text-align: center;
        margin: 0 0.75rem;
    }

    .empty {
        flex-direction: column;
    }

    .empty p:first-child {
        margin-bottom: 1.5rem;
    }

    .empty p:last-child {
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
    }

    @media (hover) {
        .notifications {
            scrollbar-width: initial;
            -ms-overflow-style: initial;
            -webkit-overflow-scrolling: initial;
        }

        .notifications::-webkit-scrollbar {
            display: block;
            width: 0.5rem;
        }

        .notifications::-webkit-scrollbar-thumb {
            background-color: #707070;
            border-radius: 100rem;
        }

        .notifications::-webkit-scrollbar-button {
            display: none;
        }
    }
</style>