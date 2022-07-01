<script lang="ts">
    import NavBar from "../lib/components/NavBar.svelte";
    import LessonSlider from "../lib/components/LessonSlider.svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import { user } from "../store";

    let header: HTMLElement;
    let navigation: HTMLElement;

    function calcContentView(hd: HTMLElement, nv: HTMLElement): number | void {
        if (hd && nv) {
            const windowHeight = "innerHeight" in window 
            ? window.innerHeight
            : document.documentElement.offsetHeight;
            return windowHeight - (hd.offsetHeight + nv.offsetHeight);
        }
    }
</script>

<div>
    <div class="content">
        <TopBar bind:node={header}/>
        <main style="max-height: {calcContentView(header, navigation)}px;">
            {#if $user.lessons.length > 0}
                <LessonSlider/>
            {/if}
        </main>
        <NavBar bind:node={navigation} location={"Home"}/>
    </div>
</div>

<style>
    div:not(.content) {
        height: 100%;
        background-color: var(--cmd-color-main);
    }

    .content {
        max-width: 30rem;
        margin: auto;
    }

    main {
        overflow-y: auto;
    }
</style>