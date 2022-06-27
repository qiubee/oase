<script lang="ts">
    import { setContext } from "svelte";
    import { Writable, writable } from "svelte/store";
    import Button from "../lib/components/Button.svelte";
    import ProgressBar from "../lib/components/ProgressBar.svelte";
    import { subjects } from "../store";

    type Theme = {
        name: string,
        thumbnail: string,
        backgroundColor: string
    }

    const currentStep : Writable<number> = writable(1);
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
            thumbnail: "",
            backgroundColor: "#"
        },
        {
            name: "Sterrennacht",
            thumbnail: "",
            backgroundColor: "#"
        },
        {
            name: "CMD",
            thumbnail: "../assets/themes/cmd.png",
            backgroundColor: "#"
        },
        {
            name: "CO+CB",
            thumbnail: "",
            backgroundColor: "#"
        },
        {
            name: "HBO-ICT",
            thumbnail: "../assets/themes/hbo-ict.png",
            backgroundColor: "#"
        }
    ];

    function setTheme():void {

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
                    <li>

                    </li>
                {/each}
            </ul>
            {:else if $currentStep === 2}
                <ul class="subjects">
                    {#each $subjects as subject}
                        <li on:click={setTheme}>
                            <h2>{subject}</h2>
                        </li>
                    {/each}
                </ul>
            {:else}
            <!-- profile setup -->
        {/if}
        {#if $currentStep === 3}
            <Button type={"rectangle"} text={"Klaar"}/>
            {:else}
            <Button type={"rectangle"} icon={"next"}/>
        {/if}
    </main>
</div>

<style>
    .setup {
        background: url("../assets/sand.svg") center bottom var(--std-bg-color);
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

    ul {
        padding-left: 0;
        margin-bottom: 0;
    }

    ul li {
        list-style: none;
    }

    .themes li {
        list-style: none;
        width: 100%;
        height: 2rem;
        border: solid white;
        border-width: 0.2rem 0;
    }

    .subjects {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .subjects li {
        background-color: white;
    }

    .subjects li h2 {
        font-family: "Pauschal";
        font-size: 1rem;
        text-transform: capitalize;
    }
</style>