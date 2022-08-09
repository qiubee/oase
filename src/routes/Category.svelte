<script lang="ts">
    import { setContext, onMount } from "svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import PostCompact from "../lib/components/PostCompact.svelte";
    import { categories, posts, sorted } from "../store";
    import Sort from "../lib/components/Sort.svelte";
    import { calcContentView } from "../utils/utils";

    type Params = {
        category?: string
    }

    export let params: Params = {};
    let header: HTMLElement;
    let contentHeight: number;

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
            <Sort type={"posts"}/>
            {#each filteredPosts as post (post.id)}
            <PostCompact postID={post.id} />
            {/each}
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
</style>