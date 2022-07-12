<script lang="ts">
    import { getContext } from "svelte";
    import { pop } from "svelte-spa-router";
    import { students, userID } from "../../../store";

    const icon = ["edit", "arrow-left", "notification-bell", "close", "none"] as const;
    const postID: number = getContext("postID");
    export let left: typeof icon[number] = icon[icon.length-1];
    export let right: typeof icon[number] = icon[icon.length-1];
    const user = $students.find(user => user.id === $userID);
    let subscribed: boolean = user.following.posts.includes(postID);


    function editPost(): void {

    }

    function toggleFollowPost(): void {
        subscribed = subscribed === true ? false : true;
        if (subscribed === true) {
            students.update(function (students) {
                const student = students.find((student) => student.id === $userID);
                student.following.posts.push(postID);
                return students;
            })
        } else {
            students.update(function (students) {
                const student = students.find((student) => student.id === $userID);
                student.following.posts.filter((id) => id !== postID)
                return students;
            })
        }
    }
</script>

<div class="options">
    <div class="left">
    {#if left === "edit"}
        <button on:click={editPost}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 20 20"><path d="M4.906,14.83a1.381,1.381,0,0,0,1.216.382l1.81-.311a1.9,1.9,0,0,0,.983-.516L19.3,4a1.506,1.506,0,0,0-.007-2.128L17.853.44a1.5,1.5,0,0,0-2.121,0L5.352,10.82a1.823,1.823,0,0,0-.516.983l-.318,1.8A1.4,1.4,0,0,0,4.906,14.83ZM14.983,2.6l1.457-1.457a.5.5,0,0,1,.707,0l1.435,1.435a.5.5,0,0,1,.007.714L17.132,4.754ZM5.613,14.123a.385.385,0,0,1-.106-.347l.311-1.8a.836.836,0,0,1,.24-.453l8.217-8.217,2.15,2.15L8.209,13.677a.784.784,0,0,1-.445.233l-1.81.311A.356.356,0,0,1,5.613,14.123Z"/><path d="M19.5,18.749H.5a.5.5,0,0,1,0-1h19a.5.5,0,0,1,0,1Z"/></svg>
        </button>
        {:else if left === "arrow-left"}
        <button on:click={() => pop()}>
            <svg class="back" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" viewBox="0 0 17 14" transform="translate(0 1)">
                <defs>
                <clipPath id="clip-path">
                    <path id="Path_8" data-name="Path 8" d="M.2,12.918a.6.6,0,0,0,0,.891.666.666,0,0,0,.933,0L7.8,7.445a.6.6,0,0,0,0-.891L1.133.191A.666.666,0,0,0,.2.191a.6.6,0,0,0,0,.891L6.4,7,.2,12.918Z" fill="#fff"/>
                </clipPath>
                </defs>
                <g id="arr" transform="translate(8 14) rotate(180)" clip-path="url(#clip-path)">
                    <rect id="Rectangle_12" data-name="Rectangle 12" width="11.333" height="17.182" transform="translate(-1.667 -1.591)" fill="black"/>
                </g>
                <rect id="line" width="16" height="1.2" rx="0.6" transform="translate(1 6.4)" fill="black"/>
            </svg>
        </button>
    {/if}
    </div>
    <div class="right">
    {#if right === "notification-bell"}
        <button on:click={toggleFollowPost}>
            <svg class="notification-bell {subscribed === true ? "": "default"}" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 40.298 42">
                <path class="fill" d="M39.312,35.616H25.354a5.2,5.2,0,0,1-10.41,0H.986l3.825-5.343A12.635,12.635,0,0,0,7.176,22.9V13.988a12.973,12.973,0,1,1,25.945,0h.02V22.9a12.617,12.617,0,0,0,2.346,7.374Z"/>
                <path d="M40.126,35.034,36.3,29.691a11.532,11.532,0,0,1-2.169-6.782V13.978a.738.738,0,0,0-.02-.2A13.986,13.986,0,0,0,20.154,0,13.74,13.74,0,0,0,10.3,4.1a13.819,13.819,0,0,0-4.1,9.877v8.931a11.5,11.5,0,0,1-2.188,6.782L.182,35.034A1.01,1.01,0,0,0,.1,36.059a.991.991,0,0,0,.887.532H14.042a6.191,6.191,0,0,0,12.224,0H39.317a.94.94,0,0,0,.867-.532A1.007,1.007,0,0,0,40.126,35.034ZM20.154,39.825a4.21,4.21,0,0,1-4.1-3.234h8.2A4.21,4.21,0,0,1,20.154,39.825ZM2.9,34.62l2.721-3.785a13.6,13.6,0,0,0,2.543-7.926V13.978A12.015,12.015,0,0,1,20.154,1.972,12.024,12.024,0,0,1,32.141,13.978a.608.608,0,0,0,.02.2v8.734a13.5,13.5,0,0,0,2.524,7.926L37.4,34.62Z"/>
            </svg>           
        </button>
        {:else if right === "close"}
        <button on:click={() => pop()}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
                <defs>
                  <clipPath id="clip-path">
                    <path id="Path_8" data-name="Path 8" d="M.187,12.918a.625.625,0,0,0,0,.891.592.592,0,0,0,.871,0L7.28,7.445a.625.625,0,0,0,0-.891L1.058.191a.592.592,0,0,0-.871,0,.625.625,0,0,0,0,.891L5.973,7,.187,12.918Z"/>
                  </clipPath>
                </defs>
                <g id="ico" transform="translate(-4 0)">
                  <g id="arr" transform="translate(18 14) rotate(180)" clip-path="url(#clip-path)">
                    <rect id="Rectangle_12" data-name="Rectangle 12" width="10.578" height="17.182" transform="translate(-1.556 -1.591)"/>
                  </g>
                  <g id="arr-2" data-name="arr" transform="translate(4 0)" clip-path="url(#clip-path)">
                    <rect id="Rectangle_1808" data-name="Rectangle 1808" width="10.578" height="17.182" transform="translate(-1.556 -1.591)"/>
                  </g>
                </g>
              </svg>              
        </button>
        {:else if right === "edit"}
        <button on:click={editPost}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 20 20"><path d="M4.906,14.83a1.381,1.381,0,0,0,1.216.382l1.81-.311a1.9,1.9,0,0,0,.983-.516L19.3,4a1.506,1.506,0,0,0-.007-2.128L17.853.44a1.5,1.5,0,0,0-2.121,0L5.352,10.82a1.823,1.823,0,0,0-.516.983l-.318,1.8A1.4,1.4,0,0,0,4.906,14.83ZM14.983,2.6l1.457-1.457a.5.5,0,0,1,.707,0l1.435,1.435a.5.5,0,0,1,.007.714L17.132,4.754ZM5.613,14.123a.385.385,0,0,1-.106-.347l.311-1.8a.836.836,0,0,1,.24-.453l8.217-8.217,2.15,2.15L8.209,13.677a.784.784,0,0,1-.445.233l-1.81.311A.356.356,0,0,1,5.613,14.123Z"/><path d="M19.5,18.749H.5a.5.5,0,0,1,0-1h19a.5.5,0,0,1,0,1Z"/></svg>
        </button>
    {/if}
    </div>
</div>

<style>
    .options {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .right {
        margin-left: auto;
    }

    button {
        width: 2.5rem;
        height: 2.5rem;
    }
    
    .notification-bell.default  .fill {
        fill: none;
    }
</style>