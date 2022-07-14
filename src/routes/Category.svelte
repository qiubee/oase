<script lang="ts">
    import { setContext } from "svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import PostCompact from "../lib/components/PostCompact.svelte";
    import { categories, posts, sorted } from "../store";
    import Sort from "../lib/components/Sort.svelte";

    type Params = {
        category?: string
    }

    export let params: Params = {};
    let header: HTMLElement;

    setContext("categoryID", $categories.find((cat) => cat.name === params.category).id)

    $: filteredPosts = $sorted.posts.filter(function (post) {
        return post.category === params.category;
    });
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header} category={params.category}/>
        <main>
            <Sort type={"posts"}/>
            {#each filteredPosts as post (post.id)}
            <PostCompact postID={post.id} />
            {/each}
        </main>
    </div>
</div>
