<script lang="ts">
    import { link } from "svelte-spa-router";
    import { news } from "../../store";
    import { timeDiff } from "../../utils/utils";

    let scrollPosition: number = 0;
    const maxPosts: number = 7;
</script>

<div class="news">
    <a href="/wachtwoord-vergeten" use:link>
        <span>Laatste nieuws</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 8 4.898" transform="rotate(270)">
        <path id="Union_5" data-name="Union 5" d="M-386.25,3.834l-.163.167.163-.167L-390,0l3.75,3.834L-382.5,0l-3.75,3.834.163.167Z" transform="translate(390.357 0.35)" fill="none" stroke="#1f2121" stroke-width="1"/>
      </svg>
      </a>
    <ul>
        {#each $news as post, index}
            {#if index < maxPosts}
                <li>
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
        margin: 0.75rem 0 1.5rem 0;
    }

    .news a {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.8rem;
        font-family: "Kotori Rose";
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
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    ul::-webkit-scrollbar {
        display: none;
    }

    ul li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--cmd-color-white);
        min-width: 16rem;
        padding: 1rem;
        font-size: 0.8rem;
        margin: 0 1rem;
        border-radius: 0.5rem;
        scroll-snap-align: center;
    }

    li > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }

    li > div > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    li div .tag {
        font-weight: bold;
        text-transform: uppercase;
        color: var(--cmd-color-gray);
        font-size: 0.9rem;
    }

    li div .tag::before {
        content: "#";
    }

    li div .time,
    li h2,
    li .author {
        font-family: "Pauschal";
    }

    li h2 {
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
        background-color: var(--cmd-color-main);
        border: 2px solid var(--cmd-color-black);
        border-radius: 0.15rem;
    }

    .scroll-position .point:not(:last-of-type) {
        margin-right: 0.25rem;
    }

    .scroll-position .point.active {
        background-color: var(--cmd-color-black);
    }
</style>