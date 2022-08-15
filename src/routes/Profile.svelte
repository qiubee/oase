<script lang="ts">
    import { onMount } from "svelte";
    import { link } from "svelte-spa-router";
    import NavBar from "../lib/components/NavBar.svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import Schedule from "../lib/components/Schedule.svelte";
    import GradingList from "../lib/components/GradingList.svelte";
    import { calcContentView } from "../utils/utils";

    enum View {
        STUDY,
        MESSAGES,
    }

    let header: HTMLElement;
    let navigation: HTMLElement;
    let contentHeight: number;
    let view: View = View.STUDY;

    function toggleView(option: View): void {
        if (option !== view) {
            view = option;
        }
    }

    onMount(function () {
        contentHeight = calcContentView(header, navigation);
    })
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header} state={"profile"}/>
        <main style="max-height: {contentHeight}px;">
            <div class="toggle">
                <button on:click={() => toggleView(View.STUDY)} class="{view === View.STUDY ? "active": ""}">Studie</button>
                <button on:click={() => toggleView(View.MESSAGES)} class="{view === View.MESSAGES ? "active": ""}">Berichten</button>
            </div>
            {#if view === View.STUDY}
                <div class="container">
                    <div class="heading">
                        <h2>Rooster</h2>
                    </div>
                    <Schedule/>
                </div>
                <div class="container">
                    <div class="heading">
                        <h2>Cijfers</h2>
                        <a href="/cijfers" use:link>
                            <span>Cijferlijst</span>
                            <svg width="5" viewBox="0 0 4.8979999 8.2140001" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 4.1832728,4.1069999 0.167,0.163 -0.167,-0.163 -3.83400005,3.75 3.83400005,-3.75 -3.83400005,-3.75 3.83400005,3.75 0.167,-0.163 z" fill="none"  stroke="#1f2121" stroke-width="1.5" />
                            </svg>
                        </a>
                    </div>
                    <GradingList max={5}/>
                </div>
            {:else if view === View.MESSAGES}
                <div class="messages">
                    <p>Je kunt op dit moment geen berichten sturen of ontvangen.</p>
                </div>
            {/if}
        </main>
        <NavBar bind:node={navigation} location={"profile"}/>
    </div>
</div>

<style>
    main {
        scroll-behavior: smooth;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
    }

    main::-webkit-scrollbar {
        display: none;
    }

    .content,
    main {
        height: 100%;
    }
    
    main {
        overflow-y: auto;
    }
    
    .toggle {
        display: flex;
        flex-direction: row;
        margin: 0 0.75rem;
        padding-top: 0.75rem;
    }

    .toggle button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        color: initial;
        font-size: 0.8rem;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: bold;
        width: 50%;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
    }

    .toggle .active {
        background-color: white;
        background-color: var(--cmd-color-white);
    }

    .container {
        margin-top: 1.5rem;
    }

    .heading {
        display: flex;
        flex-direction: row;
        margin: 0.5rem 0.75rem;
    }

    h2 {
        margin: 0;
    }

    a {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        align-self: flex-end;
        font-size: 0.8rem;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: bold;
        margin-left: auto;
        padding-bottom: 0.25rem;
    }

    a span {
        margin-right: 0.25rem;
    }

    .messages {
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .messages p {
        font-weight: bold;
        text-align: center;
        margin: 0 0.75rem;
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