<script lang="ts">
    import { pop } from "svelte-spa-router";
</script>

<div class="view">
    <div class="content">
        <main>
            <h1>Pagina niet gevonden</h1>
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
                </svg>Ga terug
            </button>
        </main>
    </div>  
</div>

<style>
    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 1.5rem;
        margin: 0;
        margin-bottom: 1rem;
    }

    button {
        color: initial;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 2.5rem 0;
    }

    button svg {
        margin-right: 1rem;
    }
</style>