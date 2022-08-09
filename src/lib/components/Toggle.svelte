<script lang="ts">
    export let active: boolean = false;
    export let action: Function = function () {
    };

    function toggle(): void {
        active = !active ? true : false; 
    }

    function change(): void {
        toggle();
        action();
    }
</script>

<div class="toggle" class:active on:click={change}>
    <div class="knob"></div>
</div>

<style>
    .toggle {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: #e3c6c6;
        height: 0.75rem;
        width: 1.4rem;
        border-radius: 3rem;
        padding: 0.1rem;
        transition: background-color ease 0.5s;
    }

    .knob {
        height: 0.7rem;
        width: 0.7rem;
        background-color: white;
        background-color: var(--cmd-color-white);
        border-radius: 50%;
    }

    .active {
        justify-content: flex-end;
        background-color: #6e51c1;
    }

    .active .knob {
        animation: toggle 1s;
        animation: name duration timing-function delay iteration-count direction fill-mode;
    }
</style>