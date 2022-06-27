<script lang="ts">
    import { setContext } from "svelte";
    import { Writable, writable } from "svelte/store";
    import Button from "../lib/components/Button.svelte";
    import ProgressBar from "../lib/components/ProgressBar.svelte";
    import { interestedSubjects, subjects, theme } from "../store";

    type Theme = {
        name: string,
        nameVisible: boolean,
        thumbnail: string,
        backgroundColor: string
    }

    const currentStep : Writable<number> = writable(2);
    setContext("step", {
        currentStep,
        previous: function () {
            currentStep.update((n):number => n -1)
        },
        next: function () {
            currentStep.update((n):number => n + 1)
        }
    })

    const title:string[] = ["Kies thema", "Kies onderwerpen", "Profiel instellen"];
    const themes:Theme[] = [
        {
            name: "Oase",
            nameVisible: true,
            thumbnail: "src/assets/themes/palms.svg",
            backgroundColor: "#FBF0BC"
        },
        {
            name: "Sterrennacht",
            nameVisible: true,
            thumbnail: "src/assets/themes/stars.svg",
            backgroundColor: "#37333B"
        },
        {
            name: "CMD",
            nameVisible: false,
            thumbnail: "src/assets/themes/cmd.png",
            backgroundColor: "#FFF021"
        },
        {
            name: "CO-CB",
            nameVisible: false,
            thumbnail: "src/assets/themes/cocb.svg",
            backgroundColor: "white"
        },
        {
            name: "HBO-ICT",
            nameVisible: false,
            thumbnail: "src/assets/themes/hbo-ict.png",
            backgroundColor: "white"
        }
    ];

    function setTheme():void {
        theme.update(() => this.dataset.theme);
        currentStep.update((n) => ++n)
    }

    function toggleSaveSubject():void {
        this.classList.toggle("selected");
        const subject:string = this.textContent;
        interestedSubjects.update(function (list:string[]) {
            if (list.includes(subject)) {
                return [...list].filter(function (val:string) {
                    return val !== subject;
                })
            } else {
                return [...list, subject];
            }
        })
    }
</script>

<div class="setup">
    <header>
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
                {#each themes as theme}
                    <li data-theme={theme.name} style="background-image: url({theme.thumbnail}); background-color: {theme.backgroundColor};" on:click={setTheme}>
                        {#if theme.nameVisible}
                            <span>{theme.name}</span>
                        {/if}
                    </li>
                {/each}
            </ul>
            {:else if $currentStep === 2}
                <ul class="subjects">
                    {#each $subjects as subject}
                        <li on:click={toggleSaveSubject}>
                            {subject}
                        </li>
                    {/each}
                </ul>
            {:else}
            <!-- profile setup -->
        {/if}
        <div>
            {#if $currentStep === 3}
            <Button type={"rectangle"} text={"Klaar"}/>
            {:else if $currentStep > 1}
            <Button type={"rectangle"} icon={"next"}/>
            {/if}
        </div>
    </main>
</div>

<style>
    .setup {
        background: url("src/assets/sand.svg") center bottom var(--std-bg-color);
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

    main {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    main h1 {
        margin-bottom: 3rem;
    }

    main > div {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0 1rem 0;
    }

    ul {
        padding-left: 0;
        margin-bottom: 0;
    }

    ul li {
        list-style: none;
    }

    .themes li {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        width: 100%;
        height: 4rem;
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

    .themes li:hover, .subjects li:hover {
        cursor: pointer;
    }

    .subjects {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        row-gap: 1.5rem;
        margin: 0.5rem;
    }

    .subjects li {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10vw;
        height: 2rem;
        font-family: "Pauschal";
        font-size: 0.85rem;
        text-align: center;
        text-transform: capitalize;
    }

    .subjects li:global(.selected) {
        background-color: black;
        color: white;
    }
</style>