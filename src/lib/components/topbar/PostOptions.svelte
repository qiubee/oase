<script lang="ts">
    import { pop } from "svelte-spa-router";

    const icon = ["edit", "arrow-left", "notification-bell", "close", "none"] as const;
    export let left: typeof icon[number] = icon[icon.length-1];
    export let right: typeof icon[number] = icon[icon.length-1];

    function editPost(): void {

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
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 20.947 22">
                <g id="Group_726" data-name="Group 726" transform="translate(-340.429 -96.9)">
                <path id="Path_423" data-name="Path 423" d="M361.283,115.109l-1.988-2.777a5.994,5.994,0,0,1-1.127-3.525v-4.642a.317.317,0,0,0-.01-.1A7.269,7.269,0,0,0,350.9,96.9a7.277,7.277,0,0,0-7.255,7.265v4.642a5.978,5.978,0,0,1-1.137,3.525l-1.988,2.777a.5.5,0,0,0-.031.533.507.507,0,0,0,.451.277h6.784a3.218,3.218,0,0,0,6.353,0h6.784a.507.507,0,0,0,.451-.277A.5.5,0,0,0,361.283,115.109ZM350.9,117.6a2.2,2.2,0,0,1-2.131-1.681h4.263A2.2,2.2,0,0,1,350.9,117.6Zm-8.966-2.705,1.414-1.967a7.07,7.07,0,0,0,1.322-4.119v-4.642a6.245,6.245,0,0,1,6.23-6.241,6.243,6.243,0,0,1,6.23,6.241.349.349,0,0,0,.01.1v4.54a7.014,7.014,0,0,0,1.312,4.119l1.414,1.967Z"/>
                </g>
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
    
</style>