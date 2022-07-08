<script lang="ts">
    import NavBar from "../lib/components/NavBar.svelte";
    import LessonSlider from "../lib/components/LessonSlider.svelte";
    import PostCompact from "../lib/components/PostCompact.svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import { students, userID, posts, currentCategory } from "../store";

    const user = $students.find(user => user.id === $userID);
    let header: HTMLElement;
    let navigation: HTMLElement;

    enum Sort {
        NEW,
        TRENDING,
        TOP,
    }

    let hideSortOptions: boolean = false;
    let sortOption: Sort;
    let sortedPosts = $posts;

    $: filteredPosts = sortedPosts.filter(function (post) {
        hideSortOptions = false;
        if ($currentCategory === "Alles") {
            return post;
        }
        if ($currentCategory === "Populair") {
            hideSortOptions = true;
            return post.upvotes.length > 100 || post.reactions.length > 30;
        } else {
            return post.category === $currentCategory;
        }
    })

    function calcContentView(hd: HTMLElement, nv: HTMLElement): number | void {
        if (hd && nv) {
            const windowHeight = "innerHeight" in window 
            ? window.innerHeight
            : document.documentElement.offsetHeight;
            return windowHeight - (hd.offsetHeight + nv.offsetHeight);
        }
    }

    function sortPosts(option: Sort): void {
        if (sortOption === option) {
            return;
        }
        sortOption = option;
        sortedPosts = $posts.sort(function (a, b) {
            if (option === Sort.NEW) {
                if (a.timestamp < b.timestamp) {
                    return 1;
                }
            }
            if (option === Sort.TRENDING) {
                if (a.upvotes.length < b.upvotes.length || a.reactions.length < b.reactions.length && a.timestamp < b.timestamp) {
                    return 1;
                }
            }
            if (option === Sort.TOP) {
                if (a.upvotes.length < b.upvotes.length) {
                    return 1;
                }
            }
        });
    }

    sortPosts(Sort.NEW);
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header}/>
        <main style="max-height: {calcContentView(header, navigation)}px;">
            {#if user.lessons.length > 0}
                <LessonSlider/>
            {/if}
        <ul class="sort">
            <li on:click={() => sortPosts(Sort.NEW)} class="{sortOption === Sort.NEW ? "selected": ""} {hideSortOptions ? "hide" : ""}">Nieuw</li>
            <li on:click={() => sortPosts(Sort.TRENDING)} class="{sortOption === Sort.TRENDING ? "selected": ""} {hideSortOptions ? "hide" : ""}"><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 10.5 13">
                <path id="Path_430" data-name="Path 430" d="M206.937,79.692a4.385,4.385,0,1,1-8.77,0c0-1.572,1.2-3.793,2.105-3.793.7,0,.766,2.575,1.357,2.836,1.114.492.539-5.568,1.862-5.568C205.684,73.167,206.937,77.27,206.937,79.692Z" transform="translate(-197.417 -72.417)" fill="none" stroke="#000" stroke-width="1.5"/>
              </svg>Trending</li>
            <li on:click={() => sortPosts(Sort.TOP)} class="{sortOption === Sort.TOP ? "selected": ""} {hideSortOptions ? "hide" : ""}"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 10.5 12">
                <g id="Group_768" data-name="Group 768" transform="translate(-323.542 -83.375)">
                  <rect id="Rectangle_1827" data-name="Rectangle 1827" width="2.746" height="4.393" rx="0.5" transform="translate(330.419 89.844)" fill="none" stroke="#000" stroke-width="1.25"/>
                  <rect id="Rectangle_1828" data-name="Rectangle 1828" width="2.746" height="10.237" rx="0.5" transform="translate(324.167 84)" fill="none" stroke="#000" stroke-width="1.25"/>
                  <rect id="Rectangle_1829" data-name="Rectangle 1829" width="2.746" height="6.759" rx="0.5" transform="translate(327.293 87.478)" fill="none" stroke="#000" stroke-width="1.25"/>
                </g>
              </svg>Top</li>
        </ul>
        {#each filteredPosts as post (post.id)}
            <PostCompact postID={post.id} />
        {/each}
        </main>
        <NavBar bind:node={navigation}/>
    </div>
</div>

<style>
    .sort li:hover{
        cursor: pointer;
    }

    main {
        overflow-y: auto;
    }

    .sort {
        display: flex;
        flex-direction: row;
        margin: 1rem 0.75rem;
    }

    .sort .selected {
        background-color: var(--cmd-color-white);
        border-color: white;
    }

    .sort li {
        display: flex;
        align-items: center;
        border: 2px solid black;
        border-radius: 0.35rem;
        padding: 0.3rem 0.5rem;
        font-weight: bold;
        font-size: 0.8rem;
        transition: background-color ease-in 0.1s, border-color ease-in 0.1s;
    }

    .sort li.hide {
        display: none;
    }

    .sort li:nth-last-of-type(n+2) {
        margin-right: 0.75rem;
    }

    .sort svg {
        margin-right: 0.5rem;
    }
</style>