<script lang="ts">
    import { pop } from "svelte-spa-router";
    import { onMount } from "svelte";
    import Button from "../lib/components/Button.svelte";
    import Toggle from "../lib/components/Toggle.svelte";
    import { students, userID, statusOptions } from "../store";
    import { calcContentView, openUploadDialog } from "../utils/utils";
    import { toggleLastName, toggleOnlineStatus, updateStatus, uploadImage } from "../actions";
    import brokenSVG from "../assets/broken.svg";

    let header: HTMLElement;
    let contentHeight: number;

    $: user = $students.find(user => user.id === $userID);

    onMount(function () {
        contentHeight = calcContentView(header);
    })
</script>

<div class="view">
    <div class="content">
        <header bind:this={header}>
            <div>
                <h1>Instellingen</h1>
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
            </div>
        </header>
        <main style="max-height: {contentHeight}px;">
            <div class="settings">
                <div class="image" on:click={openUploadDialog}>
                    <div class="photo">
                        <img src="{user.photoURL ? user.photoURL : brokenSVG}" alt="Profiel foto">
                    </div>
                    <span>wijzig profielfoto</span>
                    <input type="file" accept="image/png, image/jpeg" name="avatar" hidden on:change={uploadImage}>
                </div>
                <ul class="options">
                    <li>
                        <span>Status</span>
                        <ul class="status">
                            {#each $statusOptions as statusName}
                                {#if user.status.text === statusName}
                                    <li class="selected">{statusName}</li>
                                {:else}
                                    <li on:click={() => updateStatus(statusName)}>{statusName}</li>
                                {/if}
                            {/each}
                        </ul>
                    </li>
                    <li>
                        <span>Achternaam verbergen</span>
                        <Toggle active={!user.lastNameVisible} action={toggleLastName}/>
                    </li>
                    <li>
                        <span>Online status verbergen</span>
                        <Toggle active={!user.status.visible} action={toggleOnlineStatus}/>
                    </li>
                </ul>
            </div>
            <div class="logout">
                <Button shape={"rectangle"} icon={"logout"} text={"Uitloggen"}/>
            </div>
        </main>
    </div>
</div>

<style>
    .content {
        height: 100%;
    }

    main {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 0.75rem;
        justify-content: space-between;
        overflow-y: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
    }

    main::-webkit-scrollbar {
        display: none;
    }

    h1 {
        font-size: 1.5rem;
        margin: auto 0 auto 0;
    }

    header > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 3.25rem;
        max-width: 30rem;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
        padding: 0.75rem 0;
        margin: 0 0.75rem;
    }

    .photo {
        font-size: 0.5rem;
        background-color: white;
        background-color: var(--cmd-color-white);
        border: 0.1rem solid black;
        border-color: var(--cmd-color-black);
        height: 3rem;
        width: 3rem;
        border-radius: 3.5rem;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .photo img {
        width: 100%;
        height: 100%;
        border-radius: 3.5rem;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
    }

    .photo img::before {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .settings .image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 10rem;
        margin: 1rem auto 2rem auto;
    }

    .settings .image span {
        font-size: 1rem;
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
        color: black;
        color: var(--cmd-color-black);
    }

    .settings .options .status {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: auto;
        width: 100%;
        margin-top: 0.5rem;
        scroll-behavior: smooth;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
    }

    .settings .options .status::-webkit-scrollbar {
        display: none;
    }

    .settings .status li {
        min-width: 5.5rem;
        border: 2px solid black;
        border-color: var(--cmd-color-black);
        border-radius: 1rem;
        padding: 0.25rem 0.5rem;
        text-align: center;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
        white-space: nowrap;
    }

    .settings .status li:not(:first-child) {
        margin-left: 0.5rem;
    }

    .settings .status .selected {
        background-color: black;
        background-color: var(--cmd-color-black);
        color: white;
        color: var(--cmd-color-white);
    }

    .options * {
        font-size: 1rem;
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
    }

    .options li {
        border-top: 2px solid black;
        border-color: var(--cmd-color-black);
        padding: 0.75rem 0;
    }

    .options > li:nth-child(n+2) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    header button {
        width: 2.5rem;
        height: 2.5rem;
    }

    .logout {
        margin: 0 auto 0.25rem auto;
    }

    @media (hover) {
        main {
            scrollbar-width: initial;
            -ms-overflow-style: initial;
            -webkit-overflow-scrolling: initial;
        }

        main::-webkit-scrollbar {
            display: block;
            width: 0.5rem;
        }

        main::-webkit-scrollbar-thumb {
            background-color: #707070;
            border-radius: 100rem;
        }

        main::-webkit-scrollbar-button {
            display: none;
        }
    }
</style>