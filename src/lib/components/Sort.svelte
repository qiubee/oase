<script lang="ts">
    import { Post, SortComments, SortPosts, SortTypes } from "../../@types/main";
    import { currentSorting } from "../../store";
    import { sort } from "../../actions";

    let sortIndex: SortComments | SortPosts = 0;
    const dropdownOptions: string[] = ["Nieuw - Oud", "Oud - Nieuw"];
    let dropdownHidden = true;
    export let position: "left" | "right" = "left";
    export let type: SortTypes = "posts";
    export let post: Post = null;

    function toggleDropdown(): void {
        dropdownHidden = dropdownHidden === true ? false : true;
    }

    function doSort(type: SortTypes, option: SortComments | SortPosts) {
        sortIndex = option;
        $currentSorting = sortIndex;
        sort(type, option, post);
        dropdownHidden = true;
    }

    if (type === "posts") {
        doSort("posts", SortPosts.NEW);
    } else if (type === "comments") {
        doSort("comments", SortComments.NEW);
    }
</script>

<div class="sort {type} {position}">
    {#if type === "comments"}
        <span>Sorteer:</span>
        <div>
            <button on:click={toggleDropdown}>
                <span>{dropdownOptions[sortIndex]}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 8.214 4.898">
                    <path id="Union_5" data-name="Union 5" d="M-386.25,3.834l-.163.167.163-.167L-390,0l3.75,3.834L-382.5,0l-3.75,3.834.163.167Z" transform="translate(390.357 0.35)" fill="none" stroke="#1f2121" stroke-width="1"/>
                </svg>
            </button>
            <ul class="options {dropdownHidden ? "hidden" : ""}">
                {#each dropdownOptions as option, index}
                    <li on:click={() => doSort("comments", index)} class="{dropdownOptions[sortIndex] === option ? "selected" :""}">{option}</li>
                {/each}
            </ul>
        </div>
    {:else if type === "posts"}
        <ul>
            <li on:click={() => doSort("posts", SortPosts.NEW)} class="{sortIndex === SortPosts.NEW ? "selected": ""}"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 41 41"><path d="M20.313,40.625a8.554,8.554,0,0,1-6.936-3.56,8.546,8.546,0,0,1-9.816-9.814,8.541,8.541,0,0,1,0-13.875,8.542,8.542,0,0,1,9.814-9.815,8.542,8.542,0,0,1,13.876,0,8.541,8.541,0,0,1,9.814,9.814,8.544,8.544,0,0,1,0,13.875,8.541,8.541,0,0,1-9.813,9.815A8.558,8.558,0,0,1,20.313,40.625Zm-5.7-9.043a2.5,2.5,0,0,1,2.359,1.675,3.575,3.575,0,0,0,.84,1.328,3.509,3.509,0,0,0,2.5,1.04,3.55,3.55,0,0,0,3.345-2.371A2.5,2.5,0,0,1,27.1,31.83a3.625,3.625,0,0,0,4.041-.69,3.548,3.548,0,0,0,.687-4.04,2.5,2.5,0,0,1,1.428-3.443,3.563,3.563,0,0,0,1.329-.84l0,0a3.508,3.508,0,0,0,1.036-2.5,3.551,3.551,0,0,0-2.372-3.345,2.5,2.5,0,0,1-1.422-3.446A3.544,3.544,0,0,0,27.1,8.8a2.5,2.5,0,0,1-3.444-1.43,3.544,3.544,0,0,0-6.687.006,2.5,2.5,0,0,1-3.447,1.421,3.631,3.631,0,0,0-4.036.69A3.551,3.551,0,0,0,8.8,13.526a2.5,2.5,0,0,1-1.43,3.443,3.544,3.544,0,0,0,.006,6.688A2.5,2.5,0,0,1,8.794,27.1a3.545,3.545,0,0,0,4.732,4.727A2.5,2.5,0,0,1,14.609,31.582Z"/></svg>Nieuw</li>
            <li on:click={() => doSort("posts", SortPosts.TRENDING)} class="{sortIndex === SortPosts.TRENDING ? "selected": ""}"><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 10.5 13">
                <path id="Path_430" data-name="Path 430" d="M206.937,79.692a4.385,4.385,0,1,1-8.77,0c0-1.572,1.2-3.793,2.105-3.793.7,0,.766,2.575,1.357,2.836,1.114.492.539-5.568,1.862-5.568C205.684,73.167,206.937,77.27,206.937,79.692Z" transform="translate(-197.417 -72.417)" fill="none" stroke="#000" stroke-width="1.5"/>
            </svg>Trending</li>
            <li on:click={() => doSort("posts", SortPosts.TOP)} class="{sortIndex === SortPosts.TOP ? "selected": ""}"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 10.5 12">
                <g id="Group_768" data-name="Group 768" transform="translate(-323.542 -83.375)">
                <rect id="Rectangle_1827" data-name="Rectangle 1827" width="2.746" height="4.393" rx="0.5" transform="translate(330.419 89.844)" fill="none" stroke="#000" stroke-width="1.25"/>
                <rect id="Rectangle_1828" data-name="Rectangle 1828" width="2.746" height="10.237" rx="0.5" transform="translate(324.167 84)" fill="none" stroke="#000" stroke-width="1.25"/>
                <rect id="Rectangle_1829" data-name="Rectangle 1829" width="2.746" height="6.759" rx="0.5" transform="translate(327.293 87.478)" fill="none" stroke="#000" stroke-width="1.25"/>
                </g>
            </svg>Top</li>
        </ul>
    {/if}
</div>

<style>
    .posts li:hover,
    .sort .options li:hover {
        cursor: pointer;
    }

    .posts ul {
        display: flex;
        flex-direction: row;
        margin: 1rem 0.75rem;
    }

    .sort.right ul {
        justify-content: flex-end;
    }

    .sort.left {
        justify-content: flex-start;
    }

    .posts .selected {
        background-color: white;
        background-color: var(--cmd-color-white);
        border-color: white;
        border-color: var(--cmd-color-white);
    }

    .posts li {
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

    .posts li:nth-last-of-type(n+2) {
        margin-right: 0.75rem;
    }

    .posts svg {
        margin-right: 0.5rem;
    }

    .comments {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin: 1rem 0.75rem;
    }

    .comments > span {
        font-size: 0.9rem;
        margin-right: 0.75rem;
    }

    .comments > div {
        position: relative;
    }

    .comments button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-width: 8rem;
        width: 100%;
        color: black;
        color: var(--cmd-color-black);
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
        padding: 0.6rem 1rem;
        border-radius: 0.5rem;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: bold;
    }

    .comments button span {
        margin: auto;
        margin-right: 0.5rem;
        margin-left: 0;
    }

    .comments .options {
        position: absolute;
        width: 100%;
        z-index: 5;
        font-size: 0.8rem;
        margin: 0;
        margin-top: 0.1rem;
        filter: drop-shadow(0 5px 5px #0000004a);
    }

    .comments .options li {
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
        padding: 0.75rem 1rem;
    }

    .comments .options li:first-of-type {
        border-radius: 0.25rem 0.25rem 0 0;
    }

    .comments .options li:last-of-type {
        border-radius: 0 0 0.25rem 0.25rem;
    }

    .comments .options li:not(:last-of-type) {
        border-bottom: 1px solid black;
        border-bottom-color: var(--cmd-color-black);
    }

    .comments .options.hidden {
        display: none;
        visibility: hidden;
        filter: none;
    }

    .comments .options li.selected {
        background-color: white;
        color: black;
        color: var(--cmd-color-black);
        font-weight: bold;
    }
</style>