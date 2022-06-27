<script lang="ts">
    import { loggedIn } from "../../store";
    import { replace } from "svelte-spa-router";
    import { getContext } from "svelte";

    export let icon : string = "back";
    export let type : string = "round";
    export let text : string = "volgende";

    const {previous, next} = getContext("step");

    function logout():void {
        loggedIn.update(():boolean => false);
        replace("/login");
    }
</script>

{#if type === "round"}
    {#if icon === "logout"}
        <button class="round" on:click={logout}>
            <svg class="logout-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <g id="icon" transform="translate(-18 -673)">
                    <rect id="bg" width="20" height="20" transform="translate(18 673)" fill="rgba(255,96,96,0)"/>
                    <path id="path" d="M9.21,9.273l2.758-2.758A.727.727,0,1,0,10.94,5.486l-4,4a.727.727,0,0,0,0,1.029l4,4a.727.727,0,1,0,1.029-1.029L9.21,10.727h8.066a.727.727,0,0,0,0-1.455Zm1.517-5.818a.727.727,0,1,0,0-1.455H3.821A1.82,1.82,0,0,0,2,3.821V16.179A1.821,1.821,0,0,0,3.821,18h6.906a.727.727,0,1,0,0-1.455H3.821a.366.366,0,0,1-.367-.366V3.821a.366.366,0,0,1,.367-.366Z" transform="translate(17.901 673)" fill="#fff"/>
                </g>
            </svg>
        </button>
        {:else}
        <button class="round" on:click={previous}>
            <svg class="backtranslate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="14" viewBox="0 0 17 14" transform="translate(0 1)">
                <defs>
                <clipPath id="clip-path">
                    <path id="Path_8" data-name="Path 8" d="M.2,12.918a.6.6,0,0,0,0,.891.666.666,0,0,0,.933,0L7.8,7.445a.6.6,0,0,0,0-.891L1.133.191A.666.666,0,0,0,.2.191a.6.6,0,0,0,0,.891L6.4,7,.2,12.918Z" fill="#fff"/>
                </clipPath>
                </defs>
                <g id="ico" transform="translate(0 0)">
                <g id="arr" transform="translate(8 14) rotate(180)" clip-path="url(#clip-path)">
                    <rect id="Rectangle_12" data-name="Rectangle 12" width="11.333" height="17.182" transform="translate(-1.667 -1.591)" fill="#fff"/>
                </g>
                <rect id="line" width="16" height="1.2" rx="0.6" transform="translate(1 6.4)" fill="#fff"/>
                </g>
            </svg>          
        </button>
    {/if}
{:else if type === "rectangle"}
    <button class="rectangle" on:click={next}>
        <span>{text}</span>
        {#if icon === "next"}    
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="14" viewBox="0 0 17 14">
            <defs>
            <clipPath id="clip-path">
                <path id="Path_8" data-name="Path 8" d="M.2,12.918a.6.6,0,0,0,0,.891.666.666,0,0,0,.933,0L7.8,7.445a.6.6,0,0,0,0-.891L1.133.191A.666.666,0,0,0,.2.191a.6.6,0,0,0,0,.891L6.4,7,.2,12.918Z" fill="#fff"/>
            </clipPath>
            </defs>
            <g id="ico" transform="translate(0 0)">
            <g id="arr" transform="translate(8 14)" clip-path="url(#clip-path)">
                <rect id="Rectangle_12" data-name="Rectangle 12" width="11.333" height="17.182" transform="translate(-1.667 -1.591)" fill="#fff"/>
            </g>
            <rect id="line" width="16" height="1.2" rx="0.6" transform="translate(1 6.4)" fill="#fff"/>
            </g>
        </svg>
        {/if}
    </button>
{/if}


<style>
    .round {
        width: 2rem;
        height: 2rem;
        appearance: none;
        background-color: var(--std-btn-bg-color);
        border: none;
        border-radius: 100%;
    }

    .rectangle {
        padding: 0.5rem 1rem;
        background-color: black;
        color: white;
        appearance: none;
        border: none;
        border-radius: 0.25rem;
        text-transform: capitalize;
        margin: 0.5rem 0;
    }

    button:hover {
        cursor: pointer;
    }

    .logout-icon {
        transform: translate(0.5px, 1px);
    }

    button span {
        font-family: "Pauschal";
    }
</style>