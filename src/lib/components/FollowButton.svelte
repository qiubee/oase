<script lang="ts">
    export let followed = false;
</script>

<button class="{followed ? "unfollow" : ""}">
    {#if followed}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 180 180"><path d="M25,110a20,20,0,0,1,0-40H155a20,20,0,0,1,0,40Z"/><path d="M155,75a15,15,0,0,1,0,30H25a15,15,0,0,1,0-30H155m0-10H25a25,25,0,0,0,0,50H155a25,25,0,0,0,0-50Z"/>
        </svg>
        <span>Ontvolg</span>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 180 180"><path d="M90,175a20.022,20.022,0,0,1-20-20V110H25a20,20,0,0,1,0-40H70V25a20,20,0,0,1,40,0V70h45a20,20,0,0,1,0,40H110v45A20.022,20.022,0,0,1,90,175Z"/><path d="M90,10a15.061,15.061,0,0,1,15,15V75h50a15,15,0,1,1,0,30H105v50a15,15,0,0,1-30,0V105H25a15,15,0,0,1,0-30H75V25A15.017,15.017,0,0,1,90,10M90,0A25.073,25.073,0,0,0,65,25V65H25a25,25,0,1,0,0,50H65v40a25,25,0,0,0,50,0V115h40a25,25,0,1,0,0-50H115V25A25.061,25.061,0,0,0,90,0Z"/>
        </svg>
        <span>Volg</span>
    {/if}
</button>

<style>
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: black;
        background-color: var(--cmd-color-black);
        padding: 0.25rem 0.6rem;
        border-radius: 0.25rem;
        border: 2px solid black;
        border-color: var(--cmd-color-black);
        color: white;
        color: var(--cmd-color-white);
        font-size: 0.8rem;
    }

    button svg {
        margin-right: 0.25rem;
        fill: white;
        fill: var(--cmd-color-white);
    }

    .unfollow {
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
        border-color: black;
        border-color: var(--cmd-color-black);
        color: black;
        color: var(--cmd-color-black);
    }

    .unfollow svg {
        margin-right: 0.5rem;
        fill: black;
        fill: var(--cmd-color-black);
    }
</style>