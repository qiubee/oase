<script lang="ts">
    import TopBar from "../lib/components/TopBar.svelte";
    import { posts, students, userID, representatives } from "../store";
    import { timeDiff } from "../utils/utils";

    type Params = {
        id?: string
    }

    enum Sort {
        NEW,
        BEST,
    }

    export let params: Params = {};
    const sortOptions: string[] = ["Nieuw", "Top"];
    let sortIndex: Sort = Sort.NEW;
    let header: HTMLElement;
    
    const post = $posts.find(post => post.id === parseInt(params.id));
    const student = $students.find(user => user.id === post.author);
    const user = $students.find(user => user.id === $userID);
    const verifiedReactions = post.reactions.filter(function (reaction) {
        return reaction.userType === "representative";
    }).length;

    let voted: boolean = post.upvotes.includes($userID);
</script>

<div class="view">
    <div class="content">
        {#if student.id === user.id}
            <TopBar bind:node={header} post={true} author={true} hideBorder={true}/>
        {:else}
            <TopBar bind:node={header} post={true} hideBorder={true}/>
        {/if}
        <div class="post">
            <article>
                <header>
                    <div class="metadata">
                        <div class="photo">
                            <img src="{student.photoURL}" alt="Profiel foto {student.firstName} {student.lastNameVisible ? student.lastName : ""}">
                        </div>
                        <span class="name">{student.firstName} {student.lastNameVisible ? student.lastName : ""}</span>
                        <span class="time">{timeDiff(new Date(parseInt(post.timestamp)), new Date())}</span>
                    </div>
                    <div class="class">
                        <span class="category">{post.category}</span>
                        <div class="status">
                            <span>{post.status}</span>
                            <img src="src/assets/status/{post.status}.svg" alt="{post.status}">
                        </div>
                    </div>
                </header>
                <div class="main">
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <footer>
                    <div>
                        <button class="upvote">
                            <svg class="upvote-icon {voted ? "" : "default"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18"><path class="fill" d="M6.049,17.412a.751.751,0,0,1-.75-.75V8.96a.508.508,0,0,0-.508-.508H.979A.728.728,0,0,1,.457,7.217L7.068.467A.723.723,0,0,1,8.1.467l6.61,6.75a.731.731,0,0,1-.521,1.235H10.307A.508.508,0,0,0,9.8,8.96v7.7a.751.751,0,0,1-.75.75Z"/><path d="M7.584.5a.467.467,0,0,1,.338.142l6.611,6.751a.48.48,0,0,1-.344.809H10.306a.758.758,0,0,0-.758.758v7.7a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V8.96A.758.758,0,0,0,4.791,8.2H.979a.478.478,0,0,1-.343-.81L7.247.641A.466.466,0,0,1,7.584.5m0-.5a.967.967,0,0,0-.695.292L.279,7.043a.978.978,0,0,0,.7,1.66H4.791a.258.258,0,0,1,.258.258v7.7a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V8.96a.258.258,0,0,1,.258-.258h3.883a.98.98,0,0,0,.7-1.66L8.279.293A.967.967,0,0,0,7.584,0Z"/>
                                <g class="circles">
                                    <circle cx="2.739" cy="6.388" r="0.374" fill="#fff"/><circle cx="4.488" cy="6.388" r="0.374" fill="#fff"/><circle cx="6.241" cy="6.388" r="0.374" fill="#fff"/><circle cx="4.488" cy="4.639" r="0.374" fill="#fff"/><circle cx="6.241" cy="4.639" r="0.374" fill="#fff"/><circle cx="6.241" cy="2.89" r="0.374" fill="#fff"/><path d="M3.109,8.14a.148.148,0,0,1-.01.07h-.72a.084.084,0,0,1-.02-.07.375.375,0,1,1,.75,0Z" fill="#fff"/><path d="M4.859,8.14a.148.148,0,0,1-.01.07h-.72a.084.084,0,0,1-.02-.07.375.375,0,1,1,.75,0Z" fill="#fff"/><circle cx="6.239" cy="8.137" r="0.374" fill="#fff"/><path d="M1.369,8.14a.148.148,0,0,1-.01.07H.639a.084.084,0,0,1-.02-.07.375.375,0,1,1,.75,0Z" fill="#fff"/>
                                </g>
                            </svg>
                            <span class="count">{post.upvotes.length}</span>
                        </button>
                        <div class="reactions">
                            <div class="verified">
                                <svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118"><polygon points="85.34 44.501 56.35 73.501 49.98 79.861 32.66 62.541 39.02 56.171 49.99 67.141 78.98 38.141 85.34 44.501"/><circle cx="38.333" cy="86.334" r="3.333"/><circle cx="51.667" cy="99.667" r="3.333"/><circle cx="11.333" cy="59.334" r="3.333"/><circle cx="24.667" cy="59.334" r="3.333"/><circle cx="24.667" cy="72.667" r="3.333"/><circle cx="24.667" cy="86.334" r="3.333"/><path d="M118,59a22.028,22.028,0,0,0-11.86-19.52,22.285,22.285,0,0,0,1.02-6.64A22,22,0,0,0,78.52,11.86a22.129,22.129,0,0,0-3.97-5.41A21.8,21.8,0,0,0,59,0,22.028,22.028,0,0,0,39.48,11.86a22.285,22.285,0,0,0-6.64-1.02A22,22,0,0,0,11.86,39.48a22.129,22.129,0,0,0-5.41,3.97A21.8,21.8,0,0,0,0,59,22.055,22.055,0,0,0,11.86,78.53a22.171,22.171,0,0,0-1.02,6.63,22,22,0,0,0,28.64,20.98,22.129,22.129,0,0,0,3.97,5.41A21.8,21.8,0,0,0,59,118a22.028,22.028,0,0,0,19.52-11.86,22.283,22.283,0,0,0,6.64,1.02,22,22,0,0,0,20.98-28.64A22.046,22.046,0,0,0,118,59ZM107.31,70.31a16.06,16.06,0,0,1-6.01,3.79,2.994,2.994,0,0,0-1.71,4.13A16.015,16.015,0,0,1,78.23,99.59a3,3,0,0,0-4.13,1.71,16,16,0,0,1-7.48,8.76,3.284,3.284,0,0,0-1.62-.42,3.336,3.336,0,0,0-3.09,2.09A15.6,15.6,0,0,1,59,112a15.781,15.781,0,0,1-5.14-.84A3.331,3.331,0,0,0,51.33,110h-.08a15.594,15.594,0,0,1-3.56-2.69,16.06,16.06,0,0,1-3.79-6.01,2.983,2.983,0,0,0-1.68-1.78,3.74,3.74,0,0,0-.57-.17,3.332,3.332,0,0,0-6.65.32,3.2,3.2,0,0,0,.27,1.31,16.041,16.041,0,0,1-7.35-.59,3.38,3.38,0,0,0,.08-.72,3.324,3.324,0,0,0-5.63-2.41c-.29-.24-.57-.5-.85-.78a16.048,16.048,0,0,1-3.11-18.25A2.994,2.994,0,0,0,16.7,74.1a14.879,14.879,0,0,1-2.08-.91,2.24,2.24,0,0,0,.05-.52,3.327,3.327,0,0,0-4.64-3.07,15.96,15.96,0,0,1-.1-21.09A3.331,3.331,0,0,0,15,45.67a3.187,3.187,0,0,0-.15-.98,14.291,14.291,0,0,1,1.85-.79,2.994,2.994,0,0,0,1.71-4.13A16.015,16.015,0,0,1,39.77,18.41,3,3,0,0,0,43.9,16.7a16.01,16.01,0,0,1,30.2,0,2.994,2.994,0,0,0,4.13,1.71A16.015,16.015,0,0,1,99.59,39.77a2.991,2.991,0,0,0-.07,2.45,2.956,2.956,0,0,0,1.78,1.68,15.973,15.973,0,0,1,6.01,26.41Z"/></svg>
                                <span>{verifiedReactions}</span>
                            </div>
                            <div class="all">
                                <svg width="18" id="Group_556" data-name="Group 556" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 12.25">
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
                        <button class="share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 9.176 10.073">
                                <g id="Group_739" data-name="Group 739" transform="translate(-336.34 -189.1)">
                                <g id="Group_738" data-name="Group 738" transform="translate(336.34 189.1)">
                                    <path id="Path_427" data-name="Path 427" d="M342.647,196.3a1.131,1.131,0,0,0-.164.209l-2.929-1.7a1.588,1.588,0,0,0,0-1.345l2.929-1.7a1.131,1.131,0,0,0,.164.209,1.68,1.68,0,1,0,0-2.376,1.663,1.663,0,0,0-.359,1.853l-2.914,1.689a2.248,2.248,0,0,0-.164-.194,1.686,1.686,0,0,0-2.376,2.391,1.648,1.648,0,0,0,1.181.478,1.709,1.709,0,0,0,1.2-.478,1.134,1.134,0,0,0,.164-.209l2.914,1.7a1.663,1.663,0,0,0,.359,1.853,1.68,1.68,0,1,0,0-2.376Zm.269-6.456a1.305,1.305,0,1,1,0,1.853A1.317,1.317,0,0,1,342.916,189.847Zm-3.975,5.216a1.31,1.31,0,1,1-.927-2.227,1.3,1.3,0,0,1,.927,2.227Zm5.813,3.363a1.3,1.3,0,0,1-1.838,0,1.317,1.317,0,0,1,0-1.853,1.281,1.281,0,0,1,1.838,0,1.3,1.3,0,0,1,0,1.853Z" transform="translate(-336.34 -189.1)"/>
                                </g>
                                </g>
                            </svg>                      
                        </button>
                    </div>
                    <span class="type">#{post.type}</span>
                </footer>
            </article>
            <div class="comments">
                {#if post.reactions.length > 0}
                    <div class="sort">
                        <span>Sorteer:</span>
                        <div>
                            <button>
                                <span>{sortOptions[sortIndex]}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 8.214 4.898">
                                <path id="Union_5" data-name="Union 5" d="M-386.25,3.834l-.163.167.163-.167L-390,0l3.75,3.834L-382.5,0l-3.75,3.834.163.167Z" transform="translate(390.357 0.35)" fill="none" stroke="#1f2121" stroke-width="1"/>
                                </svg>
                            </button>
                            <ul class="options">
                                {#each sortOptions as option}
                                    <li>{option}</li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                    <ul>
                        {#each post.reactions as comment}
                        <li class="comment {comment.userType === "representative" ? "verified" : ""}">
                            <div class="metadata">
                                {#if comment.userType === "student"}
                                {@const student = $students.find((student) => student.id === comment.userID)}
                                    <div class="photo">
                                        <img src="{student.photoURL}" alt="Profielfoto {student.firstName} {student.lastNameVisible ? student.lastName : ""}">
                                    </div>
                                    <span class="name">{student.firstName} {student.lastNameVisible ? student.lastName : ""}</span>
                                {:else if comment.userType === "representative"}
                                {@const representative = $representatives.find((rep) => rep.id === comment.userID)}
                                    <div class="representative">
                                        <div class="photo">
                                            <img src="{representative.photoURL}" alt="Profielfoto {representative.firstName} {representative.lastNameVisible ? representative.lastName : ""}">
                                        </div>
                                        <span class="name">{representative.firstName} {representative.lastNameVisible ? representative.lastName : ""}</span>
                                        <svg width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118"><polygon points="85.34 44.501 56.35 73.501 49.98 79.861 32.66 62.541 39.02 56.171 49.99 67.141 78.98 38.141 85.34 44.501"/><circle cx="38.333" cy="86.334" r="3.333"/><circle cx="51.667" cy="99.667" r="3.333"/><circle cx="11.333" cy="59.334" r="3.333"/><circle cx="24.667" cy="59.334" r="3.333"/><circle cx="24.667" cy="72.667" r="3.333"/><circle cx="24.667" cy="86.334" r="3.333"/><path d="M118,59a22.028,22.028,0,0,0-11.86-19.52,22.285,22.285,0,0,0,1.02-6.64A22,22,0,0,0,78.52,11.86a22.129,22.129,0,0,0-3.97-5.41A21.8,21.8,0,0,0,59,0,22.028,22.028,0,0,0,39.48,11.86a22.285,22.285,0,0,0-6.64-1.02A22,22,0,0,0,11.86,39.48a22.129,22.129,0,0,0-5.41,3.97A21.8,21.8,0,0,0,0,59,22.055,22.055,0,0,0,11.86,78.53a22.171,22.171,0,0,0-1.02,6.63,22,22,0,0,0,28.64,20.98,22.129,22.129,0,0,0,3.97,5.41A21.8,21.8,0,0,0,59,118a22.028,22.028,0,0,0,19.52-11.86,22.283,22.283,0,0,0,6.64,1.02,22,22,0,0,0,20.98-28.64A22.046,22.046,0,0,0,118,59ZM107.31,70.31a16.06,16.06,0,0,1-6.01,3.79,2.994,2.994,0,0,0-1.71,4.13A16.015,16.015,0,0,1,78.23,99.59a3,3,0,0,0-4.13,1.71,16,16,0,0,1-7.48,8.76,3.284,3.284,0,0,0-1.62-.42,3.336,3.336,0,0,0-3.09,2.09A15.6,15.6,0,0,1,59,112a15.781,15.781,0,0,1-5.14-.84A3.331,3.331,0,0,0,51.33,110h-.08a15.594,15.594,0,0,1-3.56-2.69,16.06,16.06,0,0,1-3.79-6.01,2.983,2.983,0,0,0-1.68-1.78,3.74,3.74,0,0,0-.57-.17,3.332,3.332,0,0,0-6.65.32,3.2,3.2,0,0,0,.27,1.31,16.041,16.041,0,0,1-7.35-.59,3.38,3.38,0,0,0,.08-.72,3.324,3.324,0,0,0-5.63-2.41c-.29-.24-.57-.5-.85-.78a16.048,16.048,0,0,1-3.11-18.25A2.994,2.994,0,0,0,16.7,74.1a14.879,14.879,0,0,1-2.08-.91,2.24,2.24,0,0,0,.05-.52,3.327,3.327,0,0,0-4.64-3.07,15.96,15.96,0,0,1-.1-21.09A3.331,3.331,0,0,0,15,45.67a3.187,3.187,0,0,0-.15-.98,14.291,14.291,0,0,1,1.85-.79,2.994,2.994,0,0,0,1.71-4.13A16.015,16.015,0,0,1,39.77,18.41,3,3,0,0,0,43.9,16.7a16.01,16.01,0,0,1,30.2,0,2.994,2.994,0,0,0,4.13,1.71A16.015,16.015,0,0,1,99.59,39.77a2.991,2.991,0,0,0-.07,2.45,2.956,2.956,0,0,0,1.78,1.68,15.973,15.973,0,0,1,6.01,26.41Z"/></svg>
                                    </div>
                                    <div class="council">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 16 9">
                                            <g id="Group_672" data-name="Group 672" transform="translate(-254.895 -90.925)">
                                            <path id="Path_388" data-name="Path 388" d="M269.266,99.374a2.816,2.816,0,0,0-1.742-.574h-1.182a1.666,1.666,0,0,0-.214-.53h.029a1.9,1.9,0,1,0-1.907-1.9,1.857,1.857,0,0,0,.19.822,2.978,2.978,0,0,0-.555-.054H261.16a2.978,2.978,0,0,0-.555.054,1.857,1.857,0,0,0,.19-.822,1.9,1.9,0,1,0-1.9,1.9h.024a1.665,1.665,0,0,0-.214.53h-1.182a2.826,2.826,0,0,0-1.742.574,1.837,1.837,0,0,0-.759,1.45.243.243,0,1,0,.487,0,1.373,1.373,0,0,1,.574-1.066,2.346,2.346,0,0,1,1.44-.472h2.739c1.095,0,2.019.705,2.019,1.537a.218.218,0,0,0,.019.1.278.278,0,0,0,.054.078.256.256,0,0,0,.17.068.241.241,0,0,0,.243-.243c0-.832.924-1.537,2.019-1.537h2.739a2.37,2.37,0,0,1,1.445.472,1.381,1.381,0,0,1,.569,1.066.243.243,0,1,0,.487,0A1.837,1.837,0,0,0,269.266,99.374Zm-3.109-4.427a1.418,1.418,0,0,1,0,2.836,1.443,1.443,0,0,1-.647-.156,0,0,0,0,0,0,0,1.338,1.338,0,0,1-.141-.083.1.1,0,0,0-.029-.019,1.4,1.4,0,0,1-.6-1.153A1.422,1.422,0,0,1,266.157,94.947Zm-7.264,2.836a1.418,1.418,0,1,1,1.416-1.416,1.4,1.4,0,0,1-.579,1.138,1.721,1.721,0,0,1-.2.127A1.414,1.414,0,0,1,258.893,97.783Zm5.892,1.017a2.6,2.6,0,0,0-2.262,1.163A2.6,2.6,0,0,0,260.26,98.8H259.2a1.486,1.486,0,0,1,.516-.705.631.631,0,0,1,.073-.049,0,0,0,0,1,0,0,.968.968,0,0,1,.19-.122,2.467,2.467,0,0,1,1.173-.3h2.725a2.4,2.4,0,0,1,1.187.307.026.026,0,0,1,.019.015.754.754,0,0,1,.156.1,0,0,0,0,1,0,0,.634.634,0,0,1,.073.049,1.487,1.487,0,0,1,.516.705Z" transform="translate(0 -1.751)" stroke="#000" stroke-width="0.25"/>
                                            <path id="Path_389" data-name="Path 389" d="M268.437,91.05a1.9,1.9,0,1,0,1.9,1.9A1.907,1.907,0,0,0,268.437,91.05Zm0,3.323a1.418,1.418,0,1,1,1.411-1.421A1.423,1.423,0,0,1,268.437,94.373Z" transform="translate(-5.915)" stroke="#000" stroke-width="0.25"/>
                                            </g>
                                        </svg>
                                        <span>{representative.council.study}</span>
                                    </div>
                                {/if}
                                </div>
                                <p>{comment.message}</p>
                                <div class="bottom">
                                    <span class="time">{timeDiff(new Date(parseInt(comment.timestamp)), new Date())} geleden</span>
                                    <button class="respond">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 14.236 9.548">
                                            <path id="Path_398" data-name="Path 398" d="M153.4,182.112c-.908-.935-2.783-2.058-6.568-2.075a.325.325,0,0,0-.324.323v1.128a.527.527,0,0,1-.267.448.726.726,0,0,1-.68.032l-5.413-4.124a.18.18,0,0,1-.086-.146.193.193,0,0,1,.1-.156l5.4-4.114a.726.726,0,0,1,.68.032.526.526,0,0,1,.267.445v1.287a.238.238,0,0,0,.238.238c4.845,0,6.341,4.306,6.8,6.605A.084.084,0,0,1,153.4,182.112Z" transform="translate(-139.69 -172.976)" fill="none" stroke="#000" stroke-width="0.75"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        {/each}
                    </ul>
                {:else}
                    <p>Er zijn nog geen reacties.</p>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .content {
        height: 100%;
    }

    .post {
        height: calc(100% - 66px);
        overflow-y: auto;
    }

    article {
        margin: 0 0.75rem;
        padding: 1rem 0 1.5rem 0;
    }

    article .metadata {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1rem;
        margin-bottom: 0.75rem;
    }

    article .metadata .photo,
    article .metadata .name,
    article .metadata .time::before {
        margin-right: 0.75rem;
    }

    article .metadata .photo {
        font-size: 0.5rem;
        background-color: var(--cmd-color-white);
        border: 1px solid black;
        height: 2rem;
        width: 2rem;
        border-radius: 3.5rem;
        text-align: center;
    }

    article .metadata .photo img {
        width: 100%;
        height: 100%;
        border-radius: 3.5rem;
    }

    article .metadata .photo img::before {
        position: absolute;
        top: -999rem;
        left: -999rem;
    }

    article .metadata .name {
        font-family: "Pauschal";
        font-size: 1.1rem;
    }

    article .metadata .time {
        display: flex;
        align-items: center;
        font-family: "Pauschal";
    }

    article .metadata .time::before {
        content: "•";
    }

    article .type {
        font-size: 0.9rem;
        font-family: "Kotori Rose";
        font-weight: bold;
    }

    article .class {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Pauschal";
    }

    article .category {
        border-radius: 5rem;
        color: white;
        padding: 0.25rem 1rem;
        font-size: 0.9rem;
        text-transform: capitalize;
        background-color: var(--cmd-color-black);
    }

    article .status {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    article .status span {
        font-size: 1rem;
        margin-right: 0.75rem;
    }

    article .status img {
        max-width: 1.25rem;
        height: 1.25rem;
        width: 100%;
        padding: 0.65rem;
        background-color: var(--cmd-color-white);
    }

    .main {
        font-family: "Pauschal";
        margin-top: 1.5rem;
    }

    h1 {
        font-size: 1.1rem;
        font-family: "Kotori Rose";
        font-weight: normal;
        margin: 0;
        margin-bottom: 1.25rem;
    }

    footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.25rem;
        font-family: "Pauschal";
    }

    footer > div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .upvote {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: "Kotori Rose";
        font-weight: bold;
        margin-right: 1.5rem;
        color: initial;
        font-size: initial;
    }

    .upvote .upvote-icon {
        max-width: 1.4rem;
        margin-right: 0.5rem;
    }

    .upvote-icon .circles path,
    .upvote-icon .circles circle {
        fill: var(--cmd-color-main);
    }

    .upvote-icon.default .fill {
        fill: none;
    }

    .upvote-icon.default .circles path,
    .upvote-icon.default .circles circle {
        fill: var(--cmd-color-black);
    }

    .reactions {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: normal;
        margin-right: 1rem;
    }

    .reactions > div {
        display: flex;
        align-items: center;
    }

    .reactions svg {
        margin-right: 0.25rem;
    }

    .reactions .all svg {
        margin-top: 0.1rem;
    }

    .reactions .verified {
        margin-right: 1rem;
    }

    .comments {
        background-color: var(--cmd-color-white);
        padding: 0.75rem;
    }

    .sort {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 0.75rem;
    }

    .sort span {
        font-size: 0.9rem;
        margin-right: 0.75rem;
    }

    .sort > div {
        position: relative;
    }

    .sort button {
        color: var(--cmd-color-black);
        background-color: var(--cmd-color-main);
        padding: 0.6rem 0.9rem;
        font-family: "Kotori Rose";
        border-radius: 0.4rem;
    }

    .sort button span {
        margin-right: 0.5rem;
    }

    .sort .options {
        position: absolute;
        display: none;
    }

    .comment {
        background-color: var(--cmd-color-main);
        border-radius: 0.4rem;
        padding: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .comment.verified .metadata {
        justify-content: space-between;
    }

    .comment .representative {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .comment .metadata {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: "Pauschal";
        font-size: 1rem;
    }

    .comment .metadata .photo {
        font-size: 0.5rem;
        background-color: var(--cmd-color-white);
        border: 1px solid black;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 3.5rem;
        text-align: center;
        margin-right: 0.5rem;
    }

    .comment .metadata .photo img {
        width: 100%;
        height: 100%;
        border-radius: 3.5rem;
    }

    .comment .metadata .photo img::before {
        position: absolute;
        top: -999rem;
        left: -999rem;
    }

    .comment .metadata .name {
        font-family: "Pauschal";
        font-size: 0.9rem;
        margin-right: 0.5rem;
    }

    .comment .time {
        font-size: 0.9rem;
        font-family: "Pauschal";
    }

    .comment .council {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .comment .council svg {
        margin-right: 0.25rem;
    }

    .comment .council span {
        font-family: "Kotori Rose";
        font-size: 0.8rem;
    }

    .comment p {
        font-size: 1rem;
        font-family: "Pauschal";
    }

    .comment .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .comment .respond {
        width: 1.25rem;
        height: 1.25rem;
    }
</style>