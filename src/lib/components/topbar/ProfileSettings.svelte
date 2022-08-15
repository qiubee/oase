<script lang="ts">
    import { push } from "svelte-spa-router";
    import { students, userID } from "../../../store";
    import brokenSVG from "./../../../assets/broken.svg";

    let user = $students.find(user => user.id === $userID);
</script>

<button class="settings" on:click={() => push("/instellingen")}>
    <div class="photo">
        <img src="{user.photoURL ? user.photoURL : brokenSVG}" alt="Profiel foto {user.firstName} {user.lastName}">
    </div>
    {#if user.status.visible}
        <span class="status">{user.status.text}</span>
    {/if}
</button>

<style>
    .settings {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: initial;
    }

    .photo {
        font-size: 0.5rem;
        background-color: white;
        background-color: var(--cmd-color-white);
        border: 1px solid black;
        border-color: var(--cmd-color-black);
        height: 2.4rem;
        width: 2.4rem;
        border-radius: 3.5rem;
        margin-right: 0.75rem;
        text-align: center;
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
        position: absolute;
        top: -999rem;
        left: -999rem;
    }

    .status {
        display: inline-block;
        background-color: white;
        background-color: var(--cmd-color-white);
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: bold;
        font-size: 0.9rem;
        padding: 0.25rem 1rem;
        border-radius: 10rem;
    }
</style>