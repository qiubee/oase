<script lang="ts">
    import type { Post } from "src/@types/main";
    import { setContext, onMount } from "svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import PostCompact from "../lib/components/PostCompact.svelte";
    import { categories, sorted, posts} from "../store";
    import Sort from "../lib/components/Sort.svelte";
    import { calcContentView } from "../utils/utils";

    type Params = {
        category?: string
    }

    export let params: Params = {};
    let header: HTMLElement;
    let contentHeight: number;

    $sorted.posts = <Post[]>$posts;

    setContext("categoryID", $categories.find((cat) => cat.name === params.category).id)

    $: filteredPosts = $sorted.posts.filter(function (post) {
        return post.category === params.category;
    });

    onMount(function () {
        contentHeight = calcContentView(header);
    })
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header} category={params.category}/>
        <main style="max-height: {contentHeight}px;">
            {#if filteredPosts.length > 0}
                {#if filteredPosts.length > 1}
                    <Sort type={"posts"}/>
                {/if}
                {#each filteredPosts as post (post.id)}
                    {#if filteredPosts.length === 1}
                        <div class="single">
                            <PostCompact postID={post.id} />
                        </div>
                    {:else}
                    <PostCompact postID={post.id} />
                    {/if}
                {/each}
            {:else}
                <p>Er zijn geen discussies over dit onderwerp.</p>
            {/if}
        </main>
    </div>
</div>

<style>
    main {
        overflow-y: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
    }

    main::-webkit-scrollbar {
        display: none;
    }

    p {
        margin: 0 0.75rem;
        padding-top: 2.5rem;
        text-align: center;
    }

    .single {
        margin-top: 1rem;
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