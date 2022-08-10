<script lang="ts">
    import { replace } from "svelte-spa-router";
    import { setContext, onMount, afterUpdate } from "svelte";
    import { Writable, writable } from "svelte/store";
    import type { Student } from "src/@types/main";
    import Button from "../lib/components/Button.svelte";
    import Toggle from "../lib/components/Toggle.svelte";
    import ProgressBar from "../lib/components/ProgressBar.svelte";
    import { categories, currentTheme, themes, students, userID, statusOptions, onboard } from "../store";
    import { openUploadDialog } from "../utils/utils";
    import { follow } from "../actions";

    let headerHeight: number;
    let contentHeight: number;
    let view: HTMLElement;

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
    const title: string[] = ["Kies thema", "Kies onderwerpen", "Profiel instellen", "Houd je aan de regels"];

    function setTheme(e: Event): void {
        const el = <HTMLElement>e.target;
        currentTheme.update(() => el.dataset.theme);
        goToNext();
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

    function goToNext(): void {
        currentStep.update((n) => n + 1);
        view.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    onMount(function () {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        contentHeight = windowHeight - headerHeight;
    })

    afterUpdate(function () {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        contentHeight = windowHeight - headerHeight;
    })
</script>


<div class="setup {$currentStep === 4 ? "rules" :""}">
    <header bind:clientHeight={headerHeight} class="step-{$currentStep}">
        {#if $currentStep === 1}
            <Button icon={"logout"}/>
        {:else if $currentStep < 4}
            <Button/>
        {/if}
        {#if $currentStep < 4}
        <div>
            <div>
                <ProgressBar/>
            </div>
        </div>
        {/if}
    </header>
    <main bind:this={view} style="max-height: {contentHeight}px;">
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
            <div class="categories">
                <ul>
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
            </div>
            {:else if $currentStep === 3}
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
            {:else if $currentStep === 4}
            <div class="tos">
                <p>Om voor iedereen een plek te geven om vrij te kunnen discussieren moet je akkoord gaan met de regels. Dus:</p>
                <ol>
                    <li>Ga respectvol met elkaar om.</li>
                    <li>Bedreiging, discriminitie en intimidatie zijn absoluut verboden.</li>
                    <li>Gebruik geen obscene, stuitende of overmatig gewelddadige taal.</li>
                    <li>Blijf bij het onderwerp en ga niet off-topic.</li>
                    <li>Plaats je bericht maar één keer.</li>
                    <li>Plaats geen gevoelige informatie (van anderen).</li>
                    <li>Niet lastigvallen, beledigen, bespotten, uitlokken, vernederen of persoonlijke aanvallen van andere studenten. Wees vriendelijk, ook als anderen dat niet zijn.</li>
                </ol>
            </div>
        {/if}
        {#if $currentStep > 1}
            <div>
                {#if $currentStep === 4}
                <Button shape={"rectangle"} text={"Ik ga akkoord"} action={goHome}/>
                {:else if $currentStep === 3}
                <Button shape={"rectangle"} text={"Opslaan"} action={goToNext}/>
                {:else}
                <Button shape={"rectangle"} icon={"next"} action={goToNext}/>
                {/if}
            </div>
        {/if}
    </main>
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

    .setup {
        background: url("./../assets/sand.svg") center bottom #fbf0bc;
        height: 100%;
    }

    .setup.rules {
        background: none;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
    }

    h1 {
        font-size: 1.5rem;
        text-align: center;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
    }

    header {
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
    }

    header > div {
        position: absolute;
        left: 50%;
    }

    header > div > div {
        position: relative;
        left: -50%;
    }

    main {
        overflow-y: auto;
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

    .themes {
        padding-bottom: 0.75rem;
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
        border-color: var(--cmd-color-white);
        border-width: 0.25rem 0;
        text-align: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .themes li[data-theme="Sterrennacht"] {
        color: white;
        color: var(--cmd-color-white);
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

    .categories ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        row-gap: 1.5rem;
        margin: 0.5rem;
        width: 100%;
        max-width: 30rem;
    }

    .categories li {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        background-color: var(--cmd-color-white);
        border-radius: 10vw;
        height: 2rem;
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
        font-size: 0.85rem;
        text-align: center;
        text-transform: capitalize;
    }

    .categories li:global(.selected) {
        background-color: black;
        background-color: var(--cmd-color-black);
        color: white;
        color: var(--cmd-color-white);
    }

    .preview {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        background-color: var(--cmd-color-white);
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
        background-color: var(--cmd-color-white);
        border: 0.1rem solid black;
        border-color: var(--cmd-color-black);
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
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
        font-size: 0.75rem;
    }

    .preview .study {
        font-size: 0.6rem;
        font-weight: bold;
        color: #b9b9b9;
        color: var(--std-gray);
        margin-top: 0.25rem;
    }

    .preview .status {
        display: inline-block;
        position: absolute;
        bottom: -0.5rem;
        background-color: white;
        background-color: var(--cmd-color-white);
        border: 0.1rem solid #a093e5;
        border-color: var(--std-active-color);
        border-radius: 1rem;
        padding: 0.1rem 0.75rem;
        font-weight: bold;
        font-size: 0.5rem;
        white-space: nowrap;
    }

    .settings {
        display: flex;
        flex-direction: column;
        background-color: white;
        background-color: var(--cmd-color-white);
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
        font-size: 0.85rem;
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
        color: #a093e5;
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
        min-width: 4.5rem;
        border: 2px solid #a093e5;
        border-color: var(--std-active-color);
        border-radius: 1rem;
        padding: 0.2rem 0.5rem;
        text-align: center;
        font-size: 0.7rem;
        margin-bottom: 0.5rem;
        white-space: nowrap;
    }

    .settings .status li:not(:first-child) {
        margin-left: 0.5rem;
    }

    .settings .status .selected {
        background-color: #a093e5;
        background-color: var(--std-active-color);
        color: white;
        color: var(--cmd-color-white);
    }

    .options {
        margin-top: 1rem;
    }

    .options * {
        font-size: 0.9rem;
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

    .step-4 {
        padding: 0;
    }

    .step-4 ~ main > h1 {
        margin: 1.75rem 0 1rem 0;
    }

    .step-4 ~ main > div:last-of-type {
        margin: 2rem auto 1rem auto;
    }

    .tos {
        margin-left: auto;
        margin-right: auto;
        padding: 0 0.75rem;
        flex-direction: column;
        max-width: 21rem;
        margin-top: 0;
    }

    .tos p {
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
        text-align: center;
        margin-bottom: 2rem;
    }

    .tos ol {
        list-style-type: decimal;
        font-size: 0.9rem;
        font-weight: bold;
        margin: 0 0.5rem;
        margin-left: 1.5rem;
    }
</style>