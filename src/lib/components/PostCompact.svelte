<script lang="ts">
    import VoteButton from "./VoteButton.svelte";
    import { push } from "svelte-spa-router";
    import { students, posts, userID } from "../../store";
    import { timeDiff } from "../../utils/utils";

    export let postID: number;
    let voted: boolean = false;
    let post = $posts.find(post => post.id === postID);
    const author = $students.find(user => user.id === post.author);
    const user = $students.find(user => user.id === $userID);
    const verifiedReactions = post.reactions.filter(function (reaction) {
        return reaction.userType === "representative";
    }).length;

    function vote(postID: number): void {
        voted = voted ? false : true;
        posts.update(function (posts) {
            posts.map(function (post) {
                if (post.id === postID) {
                    if (!voted) {
                        post.upvotes = post.upvotes.filter(function (id) {
                            return id !== user.id;
                        });
                    } else {
                        post.upvotes.push(user.id);
                    }
                }
                return post;
            })
            return posts;
        })
        post = $posts.find(post => post.id === postID);
    }
</script>

<article>
    <div class="votes" on:click={() => vote(postID)}>
        <div>
            <div class="amount">
                <div>
                    <VoteButton voted={voted}/>
                </div>
                <span>{post.upvotes.length}</span>
            </div>
        </div>
    </div>
    <div class="main" on:click={() => push("/post/" + postID)}>
        <header>
            <div class="metadata">
                <div class="photo">
                    <img src="{author.photoURL}" alt="Profiel foto {author.firstName} {author.lastNameVisible ? author.lastName : ""}">
                </div>
                <span class="name">{author.firstName} {author.lastNameVisible ? author.lastName : ""}</span>
                <span class="time">{timeDiff(new Date(parseInt(post.timestamp)), new Date())}</span>
            </div>
            <div class="status">
                <span>#{post.type}</span>
                <img src="src/assets/status/{post.status}.svg" alt="{post.status}">
            </div>
        </header>
        <section>
            <h2>{post.title}</h2>
        </section>
        <footer>
            <div>
                <div class="reactions">
                    <div class="verified">
                        <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118"><polygon points="85.34 44.501 56.35 73.501 49.98 79.861 32.66 62.541 39.02 56.171 49.99 67.141 78.98 38.141 85.34 44.501"/><circle cx="38.333" cy="86.334" r="3.333"/><circle cx="51.667" cy="99.667" r="3.333"/><circle cx="11.333" cy="59.334" r="3.333"/><circle cx="24.667" cy="59.334" r="3.333"/><circle cx="24.667" cy="72.667" r="3.333"/><circle cx="24.667" cy="86.334" r="3.333"/><path d="M118,59a22.028,22.028,0,0,0-11.86-19.52,22.285,22.285,0,0,0,1.02-6.64A22,22,0,0,0,78.52,11.86a22.129,22.129,0,0,0-3.97-5.41A21.8,21.8,0,0,0,59,0,22.028,22.028,0,0,0,39.48,11.86a22.285,22.285,0,0,0-6.64-1.02A22,22,0,0,0,11.86,39.48a22.129,22.129,0,0,0-5.41,3.97A21.8,21.8,0,0,0,0,59,22.055,22.055,0,0,0,11.86,78.53a22.171,22.171,0,0,0-1.02,6.63,22,22,0,0,0,28.64,20.98,22.129,22.129,0,0,0,3.97,5.41A21.8,21.8,0,0,0,59,118a22.028,22.028,0,0,0,19.52-11.86,22.283,22.283,0,0,0,6.64,1.02,22,22,0,0,0,20.98-28.64A22.046,22.046,0,0,0,118,59ZM107.31,70.31a16.06,16.06,0,0,1-6.01,3.79,2.994,2.994,0,0,0-1.71,4.13A16.015,16.015,0,0,1,78.23,99.59a3,3,0,0,0-4.13,1.71,16,16,0,0,1-7.48,8.76,3.284,3.284,0,0,0-1.62-.42,3.336,3.336,0,0,0-3.09,2.09A15.6,15.6,0,0,1,59,112a15.781,15.781,0,0,1-5.14-.84A3.331,3.331,0,0,0,51.33,110h-.08a15.594,15.594,0,0,1-3.56-2.69,16.06,16.06,0,0,1-3.79-6.01,2.983,2.983,0,0,0-1.68-1.78,3.74,3.74,0,0,0-.57-.17,3.332,3.332,0,0,0-6.65.32,3.2,3.2,0,0,0,.27,1.31,16.041,16.041,0,0,1-7.35-.59,3.38,3.38,0,0,0,.08-.72,3.324,3.324,0,0,0-5.63-2.41c-.29-.24-.57-.5-.85-.78a16.048,16.048,0,0,1-3.11-18.25A2.994,2.994,0,0,0,16.7,74.1a14.879,14.879,0,0,1-2.08-.91,2.24,2.24,0,0,0,.05-.52,3.327,3.327,0,0,0-4.64-3.07,15.96,15.96,0,0,1-.1-21.09A3.331,3.331,0,0,0,15,45.67a3.187,3.187,0,0,0-.15-.98,14.291,14.291,0,0,1,1.85-.79,2.994,2.994,0,0,0,1.71-4.13A16.015,16.015,0,0,1,39.77,18.41,3,3,0,0,0,43.9,16.7a16.01,16.01,0,0,1,30.2,0,2.994,2.994,0,0,0,4.13,1.71A16.015,16.015,0,0,1,99.59,39.77a2.991,2.991,0,0,0-.07,2.45,2.956,2.956,0,0,0,1.78,1.68,15.973,15.973,0,0,1,6.01,26.41Z"/></svg>
                        <span>{verifiedReactions}</span>
                    </div>
                    <div class="all">
                        <svg width="14" id="Group_556" data-name="Group 556" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 12.25">
                            <g id="Group_555" data-name="Group 555">
                              <path id="Path_333" data-name="Path 333" d="M41.312,88.382A.308.308,0,0,1,41,88.074v-3.2H39.028a.309.309,0,0,1-.308-.308V76.476a.309.309,0,0,1,.308-.308H51.92a.309.309,0,0,1,.308.308v8.092a.309.309,0,0,1-.308.308h-6.9l-3.494,3.418A.308.308,0,0,1,41.312,88.382ZM39.15,84.447h1.976a.309.309,0,0,1,.308.308v3.03l3.323-3.25a.307.307,0,0,1,.216-.088H51.8V76.6H39.15Z" transform="translate(-38.72 -76.168)"/>
                            </g>
                            <path id="Path_334" data-name="Path 334" d="M41.519,104.59a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-41 -102.147)"/>
                            <path id="Path_335" data-name="Path 335" d="M52.164,115.235a.305.305,0,1,0,.3.305.3.3,0,0,0-.3-.305" transform="translate(-50.729 -111.876)"/>
                            <path id="Path_336" data-name="Path 336" d="M41.519,125.879a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-41 -121.605)"/>
                            <path id="Path_337" data-name="Path 337" d="M62.808,125.879a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-60.458 -121.605)"/>
                            <path id="Path_338" data-name="Path 338" d="M41.519,147.168a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-41 -141.064)"/>
                            <path id="Path_339" data-name="Path 339" d="M62.808,147.168a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-60.458 -141.064)"/>
                            <path id="Path_340" data-name="Path 340" d="M84.1,147.168a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-79.918 -141.064)"/>
                            <path id="Path_341" data-name="Path 341" d="M52.164,136.524a.305.305,0,1,0,.3.305.3.3,0,0,0-.3-.305" transform="translate(-50.729 -131.335)"/>
                            <path id="Path_342" data-name="Path 342" d="M73.453,136.524a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-70.188 -131.335)"/>
                            <path id="Path_343" data-name="Path 343" d="M52.164,157.813a.305.305,0,1,0,.3.305.305.305,0,0,0-.3-.305" transform="translate(-50.729 -150.794)"/>
                            <path id="Path_344" data-name="Path 344" d="M73.453,157.813a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-70.188 -150.794)"/>
                            <path id="Path_345" data-name="Path 345" d="M94.742,157.813a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-89.647 -150.794)"/>
                            <path id="Path_346" data-name="Path 346" d="M41.519,168.458a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-41 -160.524)"/>
                            <path id="Path_347" data-name="Path 347" d="M62.808,168.458a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-60.458 -160.524)"/>
                            <path id="Path_348" data-name="Path 348" d="M84.1,168.458a.305.305,0,1,0,.305.305.3.3,0,0,0-.305-.305" transform="translate(-79.918 -160.524)"/>
                            <path id="Path_349" data-name="Path 349" d="M105.387,168.458a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-99.377 -160.524)"/>
                            <path id="Path_350" data-name="Path 350" d="M84.1,189.747a.305.305,0,1,0,.305.305.3.3,0,0,0-.305-.305" transform="translate(-79.918 -179.983)"/>
                            <path id="Path_351" data-name="Path 351" d="M73.453,179.1a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-70.188 -170.253)"/>
                            <path id="Path_352" data-name="Path 352" d="M94.742,179.1a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-89.647 -170.253)"/>
                            <path id="Path_353" data-name="Path 353" d="M73.453,200.391a.305.305,0,1,0,.305.305.305.305,0,0,0-.305-.305" transform="translate(-70.188 -189.712)"/>
                          </svg>                          
                        <span>{post.reactions.length}</span>
                    </div>
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 9.176 10.073">
                        <g id="Group_739" data-name="Group 739" transform="translate(-336.34 -189.1)">
                          <g id="Group_738" data-name="Group 738" transform="translate(336.34 189.1)">
                            <path id="Path_427" data-name="Path 427" d="M342.647,196.3a1.131,1.131,0,0,0-.164.209l-2.929-1.7a1.588,1.588,0,0,0,0-1.345l2.929-1.7a1.131,1.131,0,0,0,.164.209,1.68,1.68,0,1,0,0-2.376,1.663,1.663,0,0,0-.359,1.853l-2.914,1.689a2.248,2.248,0,0,0-.164-.194,1.686,1.686,0,0,0-2.376,2.391,1.648,1.648,0,0,0,1.181.478,1.709,1.709,0,0,0,1.2-.478,1.134,1.134,0,0,0,.164-.209l2.914,1.7a1.663,1.663,0,0,0,.359,1.853,1.68,1.68,0,1,0,0-2.376Zm.269-6.456a1.305,1.305,0,1,1,0,1.853A1.317,1.317,0,0,1,342.916,189.847Zm-3.975,5.216a1.31,1.31,0,1,1-.927-2.227,1.3,1.3,0,0,1,.927,2.227Zm5.813,3.363a1.3,1.3,0,0,1-1.838,0,1.317,1.317,0,0,1,0-1.853,1.281,1.281,0,0,1,1.838,0,1.3,1.3,0,0,1,0,1.853Z" transform="translate(-336.34 -189.1)"/>
                          </g>
                        </g>
                      </svg>                      
                </button>  
            </div>
            <span class="category">{post.category}</span>
        </footer>
    </div>
</article>

<style>
    .votes:hover,
    button:hover,
    .main:hover {
        cursor: pointer;
    }

    article {
        display: flex;
        flex-direction: row;
        background-color: var(--cmd-color-white);
        margin-bottom: 0.25rem;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
    }

    section {
        padding-right: 0.75rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: normal;
        margin: 0;
        margin-bottom: 0.75rem;
    }

    .votes {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 2.5rem;
    }

    .votes > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .votes .amount {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }
    
    .votes .amount > div {
        margin-bottom: 0.25rem;
    }

    .votes span {
        font-weight: bold;
        font-size: 1rem;
    }

    header {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 0.5rem;
    }

    header div {
        display: flex;
        flex-direction: row;
    }

    .metadata {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.8rem;
        margin-top: 1rem;
    }

    .metadata .photo,
    .metadata .name,
    .metadata .time::before {
        margin-right: 0.5rem;
    }
    
    .metadata .photo {
        font-size: 0.5rem;
        background-color: var(--cmd-color-white);
        border: 1px solid black;
        height: 1.4rem;
        width: 1.4rem;
        border-radius: 3.5rem;
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
        font-family: "Pauschal";
    }

    .metadata .time {
        display: flex;
        align-items: center;
        font-family: "Pauschal";
        color: var(--cmd-color-gray);
    }

    .metadata .time::before {
        content: "•";
    }

    .status {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
    }

    .status span {
        font-size: 0.75rem;
        margin-right: 1rem;
    }

    .status img {
        width: 1.1rem;
        padding: 0.5rem;
        background-color: var(--cmd-color-main);
    }

    footer {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        font-family: "Pauschal";
    }

    footer > div {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.75rem;
    }

    .reactions {
        display: flex;
        flex-direction: row;
    }

    .reactions div {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.9rem;
        margin-right: 0.75rem;
    }

    .reactions .all svg {
        margin-top: 0.1rem;
    }

    .reactions svg {
        margin-right: 0.3rem;
    }

    footer > span {
        max-height: 0.9rem;
        border-radius: 5rem;
        color: white;
        padding: 0.25rem 0.75rem;
        font-size: 0.7rem;
        margin-right: 0.75rem;
        margin-top: -0.15rem;
        background-color: var(--cmd-color-black);
    }
</style>