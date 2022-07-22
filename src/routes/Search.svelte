<script lang="ts">
    import { onMount } from "svelte";
    import { link } from "svelte-spa-router";
    import type { Comment, Representative } from "src/@types/main";
    import TopBar from "../lib/components/TopBar.svelte";
    import NavBar from "../lib/components/NavBar.svelte";
    import Categories from "../lib/components/Categories.svelte";
    import { calcContentView } from "../utils/utils"
    import { statuses, representatives, posts } from "../store";

    type ActiveRepresentatives = {
        replies: number;
    } & Representative;

    const councils = ["Centrale Medeggenschapsraad", "Faculteitsraad FDMCI", "Opleidingscommissie CMD"];

    let header: HTMLElement;
    let navigation: HTMLElement;
    let contentHeight: number;

    $: activeRepresentatives = $representatives.map(function (rep: ActiveRepresentatives) {
        let replies = 0;
        $posts.forEach(function (post) {
            post.comments.forEach(function (comment: Comment) {
                if (comment.userType === "representative" && comment.userID === rep.id) {
                    replies++;
                }
            })
        })
        rep.replies = replies;
        return rep;
    }).sort(function (a, b) {
        if (a.replies < b.replies) {
            return 1;
        }
    });

    onMount(function () {
        contentHeight = calcContentView(header, navigation);
    })
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header} state={"search"}/>
        <main style="max-height: {contentHeight}px;">
            <h2>Onderwerpen</h2>
            <Categories/>
            <h2>Voortgang</h2>
            <ul class="status">
                {#each $statuses as status}
                    <li>
                        <img src="{status.iconURL}" alt="{status.name}">
                    </li>
                {/each}
            </ul>
            <h2>Deelraden</h2>
            <ul class="councils">
                {#each councils as council}
                <li>
                    <a href="/{council.replace(" ", "-").toLowerCase()}" use:link>{council}<svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 8 4.898" transform="rotate(270)">
                        <path id="Union_5" data-name="Union 5" d="M-386.25,3.834l-.163.167.163-.167L-390,0l3.75,3.834L-382.5,0l-3.75,3.834.163.167Z" transform="translate(390.357 0.35)" fill="none" stroke="#1f2121" stroke-width="1"/></svg></a></li>
                {/each}
            </ul>
            <h2>Vertegenwoordigers</h2>
            <ul class="representatives">
                {#each activeRepresentatives as rep, index}
                    {#if index < 5}
                        <li>
                            <div class="metadata">
                                <div class="photo">
                                    <img src="{rep.photoURL}" alt="Profiel foto {rep.firstName} {rep.lastName}">
                                </div>
                                <div>
                                    <div class="name">
                                        <span>{rep.firstName} {rep.lastName}</span>
                                        <svg width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118"><polygon points="85.34 44.501 56.35 73.501 49.98 79.861 32.66 62.541 39.02 56.171 49.99 67.141 78.98 38.141 85.34 44.501"/><circle cx="38.333" cy="86.334" r="3.333"/><circle cx="51.667" cy="99.667" r="3.333"/><circle cx="11.333" cy="59.334" r="3.333"/><circle cx="24.667" cy="59.334" r="3.333"/><circle cx="24.667" cy="72.667" r="3.333"/><circle cx="24.667" cy="86.334" r="3.333"/><path d="M118,59a22.028,22.028,0,0,0-11.86-19.52,22.285,22.285,0,0,0,1.02-6.64A22,22,0,0,0,78.52,11.86a22.129,22.129,0,0,0-3.97-5.41A21.8,21.8,0,0,0,59,0,22.028,22.028,0,0,0,39.48,11.86a22.285,22.285,0,0,0-6.64-1.02A22,22,0,0,0,11.86,39.48a22.129,22.129,0,0,0-5.41,3.97A21.8,21.8,0,0,0,0,59,22.055,22.055,0,0,0,11.86,78.53a22.171,22.171,0,0,0-1.02,6.63,22,22,0,0,0,28.64,20.98,22.129,22.129,0,0,0,3.97,5.41A21.8,21.8,0,0,0,59,118a22.028,22.028,0,0,0,19.52-11.86,22.283,22.283,0,0,0,6.64,1.02,22,22,0,0,0,20.98-28.64A22.046,22.046,0,0,0,118,59ZM107.31,70.31a16.06,16.06,0,0,1-6.01,3.79,2.994,2.994,0,0,0-1.71,4.13A16.015,16.015,0,0,1,78.23,99.59a3,3,0,0,0-4.13,1.71,16,16,0,0,1-7.48,8.76,3.284,3.284,0,0,0-1.62-.42,3.336,3.336,0,0,0-3.09,2.09A15.6,15.6,0,0,1,59,112a15.781,15.781,0,0,1-5.14-.84A3.331,3.331,0,0,0,51.33,110h-.08a15.594,15.594,0,0,1-3.56-2.69,16.06,16.06,0,0,1-3.79-6.01,2.983,2.983,0,0,0-1.68-1.78,3.74,3.74,0,0,0-.57-.17,3.332,3.332,0,0,0-6.65.32,3.2,3.2,0,0,0,.27,1.31,16.041,16.041,0,0,1-7.35-.59,3.38,3.38,0,0,0,.08-.72,3.324,3.324,0,0,0-5.63-2.41c-.29-.24-.57-.5-.85-.78a16.048,16.048,0,0,1-3.11-18.25A2.994,2.994,0,0,0,16.7,74.1a14.879,14.879,0,0,1-2.08-.91,2.24,2.24,0,0,0,.05-.52,3.327,3.327,0,0,0-4.64-3.07,15.96,15.96,0,0,1-.1-21.09A3.331,3.331,0,0,0,15,45.67a3.187,3.187,0,0,0-.15-.98,14.291,14.291,0,0,1,1.85-.79,2.994,2.994,0,0,0,1.71-4.13A16.015,16.015,0,0,1,39.77,18.41,3,3,0,0,0,43.9,16.7a16.01,16.01,0,0,1,30.2,0,2.994,2.994,0,0,0,4.13,1.71A16.015,16.015,0,0,1,99.59,39.77a2.991,2.991,0,0,0-.07,2.45,2.956,2.956,0,0,0,1.78,1.68,15.973,15.973,0,0,1,6.01,26.41Z"/>
                                        </svg>
                                    </div>
                                    <div class="council">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 16 9">
                                            <g id="Group_672" data-name="Group 672" transform="translate(-254.895 -90.925)" fill="#7e7e7e">
                                            <path id="Path_388" data-name="Path 388" d="M269.266,99.374a2.816,2.816,0,0,0-1.742-.574h-1.182a1.666,1.666,0,0,0-.214-.53h.029a1.9,1.9,0,1,0-1.907-1.9,1.857,1.857,0,0,0,.19.822,2.978,2.978,0,0,0-.555-.054H261.16a2.978,2.978,0,0,0-.555.054,1.857,1.857,0,0,0,.19-.822,1.9,1.9,0,1,0-1.9,1.9h.024a1.665,1.665,0,0,0-.214.53h-1.182a2.826,2.826,0,0,0-1.742.574,1.837,1.837,0,0,0-.759,1.45.243.243,0,1,0,.487,0,1.373,1.373,0,0,1,.574-1.066,2.346,2.346,0,0,1,1.44-.472h2.739c1.095,0,2.019.705,2.019,1.537a.218.218,0,0,0,.019.1.278.278,0,0,0,.054.078.256.256,0,0,0,.17.068.241.241,0,0,0,.243-.243c0-.832.924-1.537,2.019-1.537h2.739a2.37,2.37,0,0,1,1.445.472,1.381,1.381,0,0,1,.569,1.066.243.243,0,1,0,.487,0A1.837,1.837,0,0,0,269.266,99.374Zm-3.109-4.427a1.418,1.418,0,0,1,0,2.836,1.443,1.443,0,0,1-.647-.156,0,0,0,0,0,0,0,1.338,1.338,0,0,1-.141-.083.1.1,0,0,0-.029-.019,1.4,1.4,0,0,1-.6-1.153A1.422,1.422,0,0,1,266.157,94.947Zm-7.264,2.836a1.418,1.418,0,1,1,1.416-1.416,1.4,1.4,0,0,1-.579,1.138,1.721,1.721,0,0,1-.2.127A1.414,1.414,0,0,1,258.893,97.783Zm5.892,1.017a2.6,2.6,0,0,0-2.262,1.163A2.6,2.6,0,0,0,260.26,98.8H259.2a1.486,1.486,0,0,1,.516-.705.631.631,0,0,1,.073-.049,0,0,0,0,1,0,0,.968.968,0,0,1,.19-.122,2.467,2.467,0,0,1,1.173-.3h2.725a2.4,2.4,0,0,1,1.187.307.026.026,0,0,1,.019.015.754.754,0,0,1,.156.1,0,0,0,0,1,0,0,.634.634,0,0,1,.073.049,1.487,1.487,0,0,1,.516.705Z" transform="translate(0 -1.751)" stroke-width="0.25"/>
                                          <path id="Path_389" data-name="Path 389" d="M268.437,91.05a1.9,1.9,0,1,0,1.9,1.9A1.907,1.907,0,0,0,268.437,91.05Zm0,3.323a1.418,1.418,0,1,1,1.411-1.421A1.423,1.423,0,0,1,268.437,94.373Z" transform="translate(-5.915)" stroke-width="0.25"/>
                                            </g>
                                      </svg>
                                      <span>{rep.council.study}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="replies">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 14.236 9.548">
                                    <path id="Path_398" data-name="Path 398" d="M153.4,182.112c-.908-.935-2.783-2.058-6.568-2.075a.325.325,0,0,0-.324.323v1.128a.527.527,0,0,1-.267.448.726.726,0,0,1-.68.032l-5.413-4.124a.18.18,0,0,1-.086-.146.193.193,0,0,1,.1-.156l5.4-4.114a.726.726,0,0,1,.68.032.526.526,0,0,1,.267.445v1.287a.238.238,0,0,0,.238.238c4.845,0,6.341,4.306,6.8,6.605A.084.084,0,0,1,153.4,182.112Z" transform="translate(-139.69 -172.976)" fill="none" stroke="#000" stroke-width="0.75"/>
                                  </svg>                                  
                                <span>{rep.replies}</span>
                            </div>
                        </li>
                    {/if}
                {/each}
            </ul>
        </main>
        <NavBar bind:node={navigation} location={"search"}/>
    </div>
</div>

<style>
    main {
        overflow-y: auto;
    }

    .content main > h2 {
        margin: 0.75rem 0.75rem 1rem 0.75rem;
    }

    ul {
        margin: 0 0.75rem;
    }

    .status {
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow-x: auto;
        margin: 0;
        padding-bottom: 0.75rem;
    }

    .status li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.5rem;
        width: 4rem;
        height: 4rem;
        padding: 0 1rem;
        background-color: var(--cmd-color-white);
    }

    .status li:first-child {
        margin-left: 0.75rem;
    }

    .status li:last-child {
        margin-right: 0.75rem;
    }

    .status li img {
        width: 2rem;
        height: 2rem;
    }

    .councils li a {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--cmd-color-white);
        padding: 1rem 0.75rem;
        font-family: var(--font-pauschal);
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .representatives li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0.75rem 0;
        background-color: var(--cmd-color-white);
        padding: 0.75rem;
    }

    .metadata {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .metadata .photo {
        font-size: 0.5rem;
        background-color: var(--cmd-color-white);
        border: 1px solid black;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 3.5rem;
        margin-right: 0.75rem;
        text-align: center;
    }

    .metadata .photo img {
        width: 100%;
        height: 100%;
        border-radius: 3.5rem;
    }

    .metadata .photo img::before {
        position: absolute;
        top: -999rem;
        left: -999rem;
    }

    .metadata .name {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1rem;
    }

    .metadata .name span {
        margin-right: 0.5rem;
    }

    .metadata .council {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .metadata .council svg {
        margin-right: 0.1rem;
    }

    .metadata .council span {
        font-size: 0.8rem;
        color: var(--cmd-color-gray);
        margin-top: 1px;
    }

    .replies svg {
        margin-right: 0.25rem;
    }
</style>