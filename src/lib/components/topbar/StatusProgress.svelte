<script lang="ts">
    import type { Status } from "src/@types/main";
    import { posts, statuses } from "../../../store";

    type StatProgress = {
        step: "current" | "done" | "pending";
    } & Status

    export let postID = null;
    let statusID = $posts.find(post => post.id === postID).status;
    $: stats = $statuses.map(function (stat: StatProgress) {
        if (stat.id === statusID) {
            stat.step = "current";
        }
        else if (stat.id < statusID) {
            stat.step = "done";
        } else {
            stat.step = "pending";
        }
        return stat;
    });

    function showStatusName(): void {

    }
</script>

<div class="progress">
    <ol>
        {#each stats as status}
            {#if status.name !== "verlopen"}
                <li on:click={showStatusName} class="{status.step}">
                    <div>
                        <img src="{status.iconURL}" alt="{status.name}">
                        <span class="hidden">{status.name}</span>
                    </div>
                    <div class="step"></div>
                </li>
            {/if}
        {/each}
    </ol>
</div>

<style>
    ol {
        display: flex;
        flex-direction: row;
        margin: 0;
    }

    .hidden {
        display: none;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    li:not(:last-child) {
        margin-right: 1.25rem;
    }

    img {
        width: 1.5rem;
    }

    .step {
        position: relative;
        width: 4px;
        height: 4px;
        background-color: transparent;
        border: 1px solid black;
        border-color: var(--cmd-color-black);
        border-radius: 1rem;
    }

    .done .step {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
    }

    .done .step,
    .done .step::after,
    .current .step {
        background-color: black;
        background-color: var(--cmd-color-black);
    }

    .step::after {
        content: "";
        position: absolute;
        display: block;
        height: 1px;
        top: 2px;
        left: 0.7rem;
        width: 1.5rem;
    }

    .pending .step {
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
    }

    .current .step::after,
    .pending:not(:last-child) .step::after {
        height: 0;
        border-bottom: 1px dotted black;
        border-bottom-color: var(--cmd-color-black);
        background-color: transparent;
    }

    ol li:last-of-type .step::after {
        border: none;
    }
</style>