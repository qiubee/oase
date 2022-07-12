<script lang="ts">
    import { onMount } from "svelte";
    import TopBar from "../lib/components/TopBar.svelte";
    import NavBar from "../lib/components/NavBar.svelte";
    import { calcContentView } from "../utils/utils";

    let header: HTMLElement;
    let navigation: HTMLElement;
    let contentHeight: number;

    onMount(function () {
        contentHeight = calcContentView(header, navigation);
    })
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header} state={"forum"}/>
        <main style="max-height: {contentHeight}px;">

        </main>
        <NavBar bind:node={navigation} location={"forum"}/>
    </div>
</div>

<style>

</style>