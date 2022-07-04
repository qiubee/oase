<script lang="ts">
    import NavBar from "../lib/components/NavBar.svelte";
    import LessonSlider from "../lib/components/LessonSlider.svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import { push } from "svelte-spa-router"
    import { user, posts, students } from "../store";

    let header: HTMLElement;
    let navigation: HTMLElement;

    enum Sort {
        NEW,
        TRENDING,
        TOP,
    }
    let sortOption: Sort;
    let sortedPosts = $posts;

    function calcContentView(hd: HTMLElement, nv: HTMLElement): number | void {
        if (hd && nv) {
            const windowHeight = "innerHeight" in window 
            ? window.innerHeight
            : document.documentElement.offsetHeight;
            return windowHeight - (hd.offsetHeight + nv.offsetHeight);
        }
    }

    function timeDiff(start: Date, end: Date): string {
        const diff = (+end - +start);
        const days = Math.floor(diff / 1000 / 60 / 60 / 24)
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor(diff / 1000 / 60);
        
        if (days >= 1) {
            return days + "d";
        } else if (hours >= 1) {
            return hours + "h";
        } else {
            return minutes + "min";
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
                if (a.upvotes < b.upvotes || a.reactions.length < b.reactions.length && a.timestamp < b.timestamp) {
                    return 1;
                }
            }
            if (option === Sort.TOP) {
                if (a.upvotes < b.upvotes) {
                    return 1;
                }
            }
        });
    }

    sortPosts(Sort.NEW);
</script>

<div class="home">
    <div class="content">
        <TopBar bind:node={header}/>
        <main style="max-height: {calcContentView(header, navigation)}px;">
            {#if $user.lessons.length > 0}
                <LessonSlider/>
            {/if}
        <ul class="sort">
            <li on:click={sortPosts(Sort.NEW)} class={sortOption === Sort.NEW ? "selected": ""}>Nieuw</li>
            <li on:click={sortPosts(Sort.TRENDING)} class={sortOption === Sort.TRENDING ? "selected": ""}><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 10.5 13">
                <path id="Path_430" data-name="Path 430" d="M206.937,79.692a4.385,4.385,0,1,1-8.77,0c0-1.572,1.2-3.793,2.105-3.793.7,0,.766,2.575,1.357,2.836,1.114.492.539-5.568,1.862-5.568C205.684,73.167,206.937,77.27,206.937,79.692Z" transform="translate(-197.417 -72.417)" fill="none" stroke="#000" stroke-width="1.5"/>
              </svg>Trending</li>
            <li on:click={sortPosts(Sort.TOP)} class={sortOption === Sort.TOP ? "selected": ""}><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 10.5 12">
                <g id="Group_768" data-name="Group 768" transform="translate(-323.542 -83.375)">
                  <rect id="Rectangle_1827" data-name="Rectangle 1827" width="2.746" height="4.393" rx="0.5" transform="translate(330.419 89.844)" fill="none" stroke="#000" stroke-width="1.25"/>
                  <rect id="Rectangle_1828" data-name="Rectangle 1828" width="2.746" height="10.237" rx="0.5" transform="translate(324.167 84)" fill="none" stroke="#000" stroke-width="1.25"/>
                  <rect id="Rectangle_1829" data-name="Rectangle 1829" width="2.746" height="6.759" rx="0.5" transform="translate(327.293 87.478)" fill="none" stroke="#000" stroke-width="1.25"/>
                </g>
              </svg>Top</li>
        </ul>
        {#each sortedPosts as post}
            {@const student = $students.find(user => user.id === post.author)}
            <article on:click={push("/post/" + post.id)}>
                <header>
                    <div class="votes">
                        <img src="" alt="Aantal stemmen">
                        <span>{post.upvotes}</span>
                        <button></button>
                    </div>
                    <div>
                        <div class="photo">
                            <img src="{student.photoURL}" alt="Profiel foto {student.firstName} {student.lastNameVisible ? student.lastName : ""}">
                        </div>
                        <span class="name">{student.firstName} {student.lastNameVisible ? student.lastName : ""}</span>
                        <span class="time">{timeDiff(new Date(parseInt(post.timestamp)), new Date())}</span>
                    </div>
                    <div>
                        <span>#{post.type}</span>
                        <img src="../assets/status/{post.status}.svg" alt="{post.status}">
                    </div>
                </header>
                <section>
                    <h2>{post.title}</h2>
                </section>
            </article>
        {/each}
        </main>
        <NavBar bind:node={navigation}/>
    </div>
</div>

<style>
    .sort li:hover,
    article:hover {
        cursor: pointer;
    }

    .home {
        height: 100%;
        background-color: var(--cmd-color-main);
    }

    .content {
        max-width: 30rem;
        margin: auto;
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
        border-radius: 0.5rem;
        padding: 0.4rem 0.4rem;
        font-weight: bold;
        font-size: 0.8rem;
        transition: background-color ease-in 0.1s, border-color ease-in 0.1s;
    }

    .sort li:nth-last-of-type(n+2) {
        margin-right: 0.75rem;
    }

    .sort svg {
        margin-right: 0.5rem;
    }

    article {
        background-color: var(--cmd-color-white);
        margin-bottom: 0.25rem;
    }

    article div:nth-of-type(2) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    article section h2 {
        font-weight: normal;
        margin: 0;
    }

    .photo {
        font-size: 0.5rem;
        background-color: white;
        border: 0.1rem solid black;
        height: 1.75rem;
        width: 1.75rem;
        border-radius: 3.5rem;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .photo img {
        width: 100%;
        height: 100%;
        border-radius: 3.5rem;
    }

    .photo img::before {
        height: 100%;
        display: flex; 
        justify-content: center;
        align-items: center;
    }
</style>