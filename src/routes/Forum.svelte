<script lang="ts">
    import { onMount } from "svelte";
    import type { Post } from "src/@types/main";
    import TopBar from "../lib/components/TopBar.svelte";
    import NavBar from "../lib/components/NavBar.svelte";
    import NewsSlider from "../lib/components/NewsSlider.svelte";
    import Categories from "../lib/components/Categories.svelte";
    import Rankings from "../lib/components/Rankings.svelte";
    import PostCompact from "../lib/components/PostCompact.svelte";
    import { calcContentView, shuffle } from "../utils/utils";
    import { posts } from "../store";

    let header: HTMLElement;
    let navigation: HTMLElement;
    let contentHeight: number;
    const spotlightPosts = shuffle(<Post[]>$posts).slice(0, 3);

    onMount(function () {
        contentHeight = calcContentView(header, navigation);
    })
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header} state={"forum"}/>
        <main style="max-height: {contentHeight}px;">
            <NewsSlider/>
            <Categories/>
            <Rankings/>
            <div class="spotlight">
                <h2>Uitgelicht</h2>
                <ul>
                {#each spotlightPosts as post (post.id)}
                    <PostCompact postID={post.id} />
                {/each}
                </ul>
            </div>
        </main>
        <NavBar bind:node={navigation} location={"forum"}/>
    </div>
</div>

<style>
    main {
        scroll-behavior: smooth;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
    }

    main::-webkit-scrollbar {
        display: none;
    }

    main {
        overflow-y: auto;
    }

    h2 {
        font-size: 1rem;
        margin: 0 0.75rem;
    }

    @media (hover) {
        main {
            scrollbar-width: initial;
            -ms-overflow-style: initial;
            -webkit-overflow-scrolling: initial;
        }

        main::-webkit-scrollbar {
            display: block;
            width: 0.5rem;
        }

        main::-webkit-scrollbar-thumb {
            background-color: #707070;
            border-radius: 100rem;
        }

        main::-webkit-scrollbar-button {
            display: none;
        }
    }
</style>