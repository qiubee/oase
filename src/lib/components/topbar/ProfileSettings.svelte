<script lang="ts">
    import { students, userID } from "../../../store";

    let user = $students.find(user => user.id === $userID);

    function updateSettings(): void {
    }
</script>

<button class="settings" on:click={updateSettings}>
    <div class="photo">
        <img src="{user.photoURL}" alt="Profiel foto {user.firstName} user.lastName}">
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
        background-color: var(--cmd-color-white);
        border: 1px solid black;
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
    }

    .photo img::before {
        position: absolute;
        top: -999rem;
        left: -999rem;
    }

    .status {
        display: inline-block;
        background-color: var(--cmd-color-white);
        font-family: var(--font-kotori-rose);
        font-weight: bold;
        font-size: 0.9rem;
        padding: 0.25rem 1rem;
        border-radius: 10rem;
    }
</style>