<script lang="ts">
    import { replace } from "svelte-spa-router";
    import { setContext } from "svelte";
    import { Writable, writable } from "svelte/store";
    import type { Student } from "src/@types/main";
    import Button from "../lib/components/Button.svelte";
    import Toggle from "../lib/components/Toggle.svelte";
    import ProgressBar from "../lib/components/ProgressBar.svelte";
    import { categories, currentTheme, themes, students, userID, statusOptions, onboard } from "../store";
    import { openUploadDialog } from "../utils/utils";
    import { follow } from "../actions";

    const currentStep: Writable<number> = writable(1);
    setContext("step", {
        currentStep,
        previous: function () {
            currentStep.update((n) => n -1)
        },
        next: function () {
            currentStep.update((n) => n + 1)
        }
    })

    $: user = $students.find(user => user.id === $userID);
    const title: string[] = ["Kies thema", "Kies onderwerpen", "Profiel instellen"];

    function setTheme(e: Event): void {
        const el = <HTMLElement>e.target;
        currentTheme.update(() => el.dataset.theme);
        currentStep.update((n) => ++n);
    }

    function updateStatus(option: Student["status"]["text"]): void {
        const index = $statusOptions.indexOf(option);
        students.update(function (students) {
            students[$userID].status.text = $statusOptions[index];
            return students;
        })
    }

    function uploadImage(e: Event): void {
        const el = <HTMLInputElement>e.target;
        const files: FileList = el.files;
        students.update(function (students) {
            students[$userID].photoURL = URL.createObjectURL(files[0]);
            return students;
        })
    }

    function toggleLastName(): void {
        const visibility = user.lastNameVisible;
        students.update(function (students) {
            students[$userID].lastNameVisible = !visibility ? true : false;
            return students;
        })
    }

    function toggleOnlineStatus(): void {
        const visibility = user.status.visible;
        students.update(function (students) {
            students[$userID].status.visible = !visibility ? true : false;
            return students;
        })
    }

    function goHome(): void {
        onboard.update(function (onboard) {
            onboard = false;
            return onboard;
        })
        replace("/");
    }
</script>

<div class="setup">
    <header class="step-{$currentStep}">
        {#if $currentStep === 1}
            <Button icon={"logout"}/>
        {:else}
            <Button/>
        {/if}
        <div>
            <div>
                <ProgressBar/>
            </div>
        </div>
    </header>
    <main>
        <h1>{title[$currentStep-1]}</h1>
        {#if $currentStep === 1}
            <ul class="themes">
                {#each $themes as theme}
                    <li data-theme={theme.name} style="background-image: url('{theme.thumbnail}'); background-color: {theme.backgroundColor};" on:click={setTheme}>
                        {#if theme.nameVisible}
                            <span>{theme.name}</span>
                        {/if}
                    </li>
                {/each}
            </ul>
            {:else if $currentStep === 2}
                <ul class="categories">
                    {#each $categories as category}
                        {#if user.following.categories.includes(category.id)}
                            <li data-id={category.id} on:click={() => follow(category, $userID)} class="selected">
                                {category.name}
                            </li>
                        {:else}
                            <li data-id={category.id} on:click={() => follow(category, $userID)}>
                                {category.name}
                            </li>
                        {/if}
                    {/each}
                </ul>
            {:else}
            <div class="preview">
                <div class="photo">
                    <img src="{user.photoURL}" alt="Profiel foto">
                </div>
                <span class="name">{user.firstName} {user.lastNameVisible ? user.lastName : ""}</span>
                <span class="study">#{user.study.abbreviation}</span>
                {#if user.status.visible}
                    <div class="status">{user.status.text}</div>
                {/if}
            </div>

            <div class="settings">
                <div class="image" on:click={openUploadDialog}>
                    <div class="photo">
                        <img src="{user.photoURL}" alt="Profiel foto">
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
                        <Toggle action={toggleLastName}/>
                    </li>
                    <li>
                        <span>Online status verbergen</span>
                        <Toggle action={toggleOnlineStatus}/>
                    </li>
                </ul>
            </div>
        {/if}
        <div>
            {#if $currentStep === 3}
            <Button shape={"rectangle"} text={"Opslaan"} action={goHome}/>
            {:else if $currentStep > 1}
            <Button shape={"rectangle"} icon={"next"}/>
            {/if}
        </div>
    </main>
</div>

<style>
    .setup {
        background: url("./../assets/sand.svg") center bottom var(--std-bg-color);
        height: 100%;
    }

    h1 {
        font-size: 1.5rem;
        text-align: center;
    }

    header {
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
    }

    header.step-2 {
        margin-bottom: 2.5rem;
    }

    header > div {
        position: absolute;
        left: 50%;
    }

    header > div > div {
        position: relative;
        left: -50%;
    }

    main h1 {
        margin-bottom: 3rem;
    }

    header.step-3 ~ main h1 {
        margin-bottom: 2rem;
    }

    main > div {
        display: flex;
        justify-content: center;
        margin: 2.5rem 0 1rem 0;
    }

    .themes li {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        width: 100%;
        max-width: 30rem;
        height: 4rem;
        margin: auto;
        border: solid white;
        border-width: 0.25rem 0;
        text-align: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .themes li[data-theme="Sterrennacht"] {
        color: white;
    }

    .themes li:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    .themes li:hover,
    .categories li:hover,
    .settings .image:hover,
    .settings .status li {
        cursor: pointer;
    }

    .categories {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        row-gap: 1.5rem;
        margin: 0.5rem;
    }

    .categories li {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10vw;
        height: 2rem;
        font-family: var(--font-pauschal);
        font-size: 0.85rem;
        text-align: center;
        text-transform: capitalize;
    }

    .categories li:global(.selected) {
        background-color: black;
        color: white;
    }

    .preview {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        height: 6rem;
        width: 6rem;
        border-radius: 0.5rem;
        margin: auto;
        margin-bottom: 1.5rem;
    }

    .preview .photo {
        position: relative;
        height: 2rem;
        width: 2rem;
        font-size: 0.4rem;
    }

    .photo {
        font-size: 0.5rem;
        background-color: white;
        border: 0.1rem solid black;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 3.5rem;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .photo img {
        width: 100%;
        height: 100%;
        border-radius: 3.5rem;
    }

    .photo img::before {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .preview .name {
        font-family: var(--font-pauschal);
        font-size: 0.75rem;
    }

    .preview .study {
        font-size: 0.6rem;
        font-weight: bold;
        color: var(--std-gray);
        margin-top: 0.25rem;
    }

    .preview .status {
        position: absolute;
        bottom: -0.5rem;
        background-color: white;
        border: 0.1rem solid var(--std-active-color);
        border-radius: 1rem;
        padding: 0.1rem 0.75rem;
        font-weight: bold;
        font-size: 0.5rem;
    }

    .settings {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 1rem;
        max-width: 14rem;
        margin: auto;
        border-radius: 0.5rem;
    }

    .settings .image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 10rem;
        margin: auto;
    }

    .settings .image span {
        font-size: 0.8rem;
        font-family: var(--font-pauschal);
        color: var(--std-active-color);
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
        min-width: 4rem;
        border: 2px solid var(--std-active-color);
        border-radius: 1rem;
        padding: 0.2rem 0.25rem;
        text-align: center;
        font-size: 0.6rem;
        margin-bottom: 0.5rem;
    }

    .settings .status li:not(:first-child) {
        margin-left: 0.5rem;
    }

    .settings .status .selected {
        background-color: var(--std-active-color);
        color: white;
        font-weight: bold;
    }

    .options {
        margin-top: 1rem;
    }

    .options * {
        font-size: 0.75rem;
        font-family: var(--font-pauschal);
    }

    .options > li:not(:last-child) {
        margin-bottom: 0.75rem;
    }

    .options > li:nth-child(n+2) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .step-3 ~ main > div:last-of-type {
        margin: 1rem auto;
    }
</style>