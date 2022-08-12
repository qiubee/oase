<script lang="ts">
    import { onMount, afterUpdate } from "svelte";
    import type { Post } from "src/@types/main";
    import NavBar from "../lib/components/NavBar.svelte";
    import LessonSlider from "../lib/components/LessonSlider.svelte";
    import PostCompact from "../lib/components/PostCompact.svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import { students, userID, posts, currentCategory } from "../store";
    import { calcContentView, getAverage } from "../utils/utils";

    const user = $students.find(user => user.id === $userID);
    let header: HTMLElement;
    let navigation: HTMLElement;

    enum Sort {
        NEW,
        TRENDING,
        TOP,
    }

    let hideSortOptions = false;
    let sortOption: Sort;
    let contentHeight: number;

    $: filteredPosts = $posts.filter(function (post) {
        hideSortOptions = false;
        if ($currentCategory === "Alles") {
            return post;
        }
        if ($currentCategory === "Populair") {
            hideSortOptions = true;
            const minUpvotes = getAverage(<Post[]>$posts, "upvotes");
            const minComments = getAverage(<Post[]>$posts, "comments");
            return post.upvotes.length >= minUpvotes && post.comments.length >= minComments;
        } else {
            return post.category === $currentCategory;
        }
    });
    $: sortedPosts = filteredPosts;

    function sortPosts(option: Sort, foreUpdate?: boolean): void {
        if (sortOption === option && foreUpdate === false) {
            return;
        }
        if ($currentCategory !== "Populair") {
            sortOption = option;
        }
        if (option === Sort.NEW) {
            sortedPosts = $posts.sort(function (a, b) {
                if (a.timestamp < b.timestamp) {
                    return 1;
                } else if (a.timestamp > b.timestamp) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        if (option === Sort.TRENDING) {
            sortedPosts = $posts.sort(function (a, b) {
                if (a.upvotes.length < b.upvotes.length || a.comments.length < b.comments.length && a.timestamp < b.timestamp) {
                    return 1;
                } else if (a.upvotes.length > b.upvotes.length || a.comments.length > b.comments.length && a.timestamp > b.timestamp) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        if (option === Sort.TOP) {
            sortedPosts = $posts.sort(function (a, b) {
                if (a.upvotes.length < b.upvotes.length) {
                    return 1;
                } else if (a.upvotes.length > b.upvotes.length) {
                    return -1;
                } else {
                    0
                }
            });
        }
        sortedPosts = sortedPosts;
    }

    sortPosts(Sort.NEW);

    onMount(function () {
        contentHeight = calcContentView(header, navigation);
    })

    afterUpdate(function () {
        if ($currentCategory === "Populair") {
            sortPosts(Sort.TOP);
        } else {
            sortPosts(sortOption, true);
        }
    })
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header}/>
        <main style="max-height: {contentHeight}px;">
            {#if user.lessons.length > 0}
                <LessonSlider/>
            {/if}
        <ul class="sort">
            {#if sortedPosts.length > 1}
            <li on:click={() => sortPosts(Sort.NEW)} class="{sortOption === Sort.NEW ? "selected": ""} {hideSortOptions ? "hide" : ""}"><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 41 41"><path d="M20.313,40.625a8.554,8.554,0,0,1-6.936-3.56,8.546,8.546,0,0,1-9.816-9.814,8.541,8.541,0,0,1,0-13.875,8.542,8.542,0,0,1,9.814-9.815,8.542,8.542,0,0,1,13.876,0,8.541,8.541,0,0,1,9.814,9.814,8.544,8.544,0,0,1,0,13.875,8.541,8.541,0,0,1-9.813,9.815A8.558,8.558,0,0,1,20.313,40.625Zm-5.7-9.043a2.5,2.5,0,0,1,2.359,1.675,3.575,3.575,0,0,0,.84,1.328,3.509,3.509,0,0,0,2.5,1.04,3.55,3.55,0,0,0,3.345-2.371A2.5,2.5,0,0,1,27.1,31.83a3.625,3.625,0,0,0,4.041-.69,3.548,3.548,0,0,0,.687-4.04,2.5,2.5,0,0,1,1.428-3.443,3.563,3.563,0,0,0,1.329-.84l0,0a3.508,3.508,0,0,0,1.036-2.5,3.551,3.551,0,0,0-2.372-3.345,2.5,2.5,0,0,1-1.422-3.446A3.544,3.544,0,0,0,27.1,8.8a2.5,2.5,0,0,1-3.444-1.43,3.544,3.544,0,0,0-6.687.006,2.5,2.5,0,0,1-3.447,1.421,3.631,3.631,0,0,0-4.036.69A3.551,3.551,0,0,0,8.8,13.526a2.5,2.5,0,0,1-1.43,3.443,3.544,3.544,0,0,0,.006,6.688A2.5,2.5,0,0,1,8.794,27.1a3.545,3.545,0,0,0,4.732,4.727A2.5,2.5,0,0,1,14.609,31.582Z"/></svg>Nieuw</li>
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
            {/if}
        </ul>
        {#if sortedPosts.length > 0}  
            {#each sortedPosts as post (post.id)}
                <PostCompact postID={post.id} />
            {/each}
        {:else if ($currentCategory === "Alles")}
            <p>Er zijn discussies op dit moment.</p>
        {:else if ($currentCategory === "Populair")}
            <p>Er zijn geen populaire discussies op dit moment.</p>
        {:else}
            <p>Er zijn nu geen discussies over dit onderwerp.</p>
        {/if}
        </main>
        <NavBar bind:node={navigation}/>
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

    .sort li:hover {
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
        background-color: white;
        background-color: var(--cmd-color-white);
        border-color: white;
        border-color: var(--cmd-color-white);
    }

    .sort li {
        display: flex;
        align-items: center;
        border: 2px solid black;
        border-color: var(--cmd-color-black);
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

    p {
        margin: 0 0.75rem;
        padding-top: 0.5rem;
        text-align: center;
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