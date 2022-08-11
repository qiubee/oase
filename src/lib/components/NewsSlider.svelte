<script lang="ts">
    import { onMount } from "svelte";
    import { link } from "svelte-spa-router";
    import { news } from "../../store";
    import { timeDiff } from "../../utils/utils";

    const maxPosts = 7;
    let scrollPosition = 0;
    let cardOffsetWidth: number;
    let slider: HTMLElement;
    let cardPositions: number[] = [];
    let timer: number;

    function updateScrollPosition(): void {
        for (let i = 0; i < cardPositions.length; i++) {
            if ((slider.scrollLeft + (cardOffsetWidth / 2)) < (cardPositions[i])) {
                scrollPosition = i;
                return;
            }
        }
    }

    function stopAutoScroll(): void {
        clearTimeout(timer);
    }

    function autoScroll(): void {
        let id = 0;
        timer = window.setTimeout(scrollCard, 0);
        function scrollCard() {
            if (slider) {
                if (id >= slider.children.length) {
                    id = 0;
                }
                slider.scrollTo({
                    behavior: "smooth",
                    left: cardOffsetWidth * id,
                });
                id++;
                timer = window.setTimeout(scrollCard, 7500);
            }
        }
    }

    onMount(function () {
        autoScroll();
        $news.forEach(function (_, index) {
            if (index < maxPosts) {
                cardPositions.push(cardOffsetWidth * (index + 1))
            }
        })
    })
</script>

<div class="news">
    <div>
        <h2>Nieuws</h2>
        <a href="/laatste-nieuws" use:link>
            <span>Laatste nieuws</span>
            <svg width="5" viewBox="0 0 4.8979999 8.2140001" xmlns="http://www.w3.org/2000/svg">
                <path d="m 4.1832728,4.1069999 0.167,0.163 -0.167,-0.163 -3.83400005,3.75 3.83400005,-3.75 -3.83400005,-3.75 3.83400005,3.75 0.167,-0.163 z" fill="none"  stroke="#1f2121" stroke-width="1.5" />
            </svg> 
          </a>
    </div>
    <ul bind:this={slider} on:scroll={updateScrollPosition} on:pointerdown|once={stopAutoScroll}>
        {#each $news as post, index}
            {#if index < maxPosts}
                <li bind:offsetWidth={cardOffsetWidth}>
                    <div class="card">     
                        <div>
                            <div>
                                <span class="tag">{post.tag}</span>
                                {#if post.timestamp}
                                    <span class="time">{timeDiff(new Date(parseInt(post.timestamp)), new Date())} geleden</span>
                                {/if}
                            </div>
                            <h2>{post.title}</h2>
                        </div>
                        {#if post.author}
                            <span class="author">{post.author}</span>
                        {/if}
                    </div>
                </li>
            {/if}
        {/each}
    </ul>
    <div class="scroll-position">
        {#each $news as _, index}
            {#if index < maxPosts}
                <div class="point {scrollPosition ===  index ? "active": ""}"></div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .news {
        margin: 1rem 0 1.5rem 0;
    }

    .news > div {
        display: flex;
        flex-direction: row;
        margin: 0 0.75rem;
    }

    .news h2 {
        margin: 0;
    }

    .news a {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.8rem;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: bold;
        margin-left: auto;
        max-width: 8rem;
    }

    .news a span {
        margin-right: 0.25rem;
    }

    .news a svg {
        margin-top: 0.1rem;
    }

    ul {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    ul li {
        display: flex;
        justify-content: stretch;
    }

    ul::-webkit-scrollbar {
        display: none;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        background-color: var(--cmd-color-white);
        min-width: 16rem;
        padding: 1rem;
        font-size: 0.8rem;
        margin: 0 1rem;
        border-radius: 0.5rem;
        scroll-snap-align: center;
    }

    .card > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }

    .card > div > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .card div .tag {
        font-weight: bold;
        text-transform: uppercase;
        color: #7e7e7e;
        color: var(--cmd-color-gray);
        font-size: 0.9rem;
    }

    .card div .tag::before {
        content: "#";
    }

    .card div .time,
    .card h2,
    .card .author {
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
    }

    .card h2 {
        font-size: 1rem;
        margin: 0;
    }

    .scroll-position {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .scroll-position .point {
        width: 0.25rem;
        height: 0.25rem;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
        border: 2px solid black;
        border-color: var(--cmd-color-black);
        border-radius: 0.15rem;
    }

    .scroll-position .point:not(:last-of-type) {
        margin-right: 0.25rem;
    }

    .scroll-position .point.active {
        background-color: black;
        background-color: var(--cmd-color-black);
    }

    @media (hover) {
        ul {
            scrollbar-width: initial;
            -ms-overflow-style: initial;
            -webkit-overflow-scrolling: initial;
        }

        ul::-webkit-scrollbar {
            display: block;
            height: 0.4rem;
        }

        ul::-webkit-scrollbar-thumb {
            background-color: #707070;
            border-radius: 100rem;
        }

        ul::-webkit-scrollbar-button {
            display: none;
        }
    }
</style>