<script lang="ts">

    let input: HTMLInputElement;

function search() {
        console.log("searching...");
}
</script>

<div class="search-bar">
    <form on:click={() => input.focus()} on:submit|preventDefault={search}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 17.72 18.09"><path d="M11.43,0A6.294,6.294,0,0,0,6.9,10.66L0,17.56l.53.53,6.92-6.92A6.293,6.293,0,1,0,11.43,0Zm0,11.83a5.54,5.54,0,1,1,5.54-5.54A5.552,5.552,0,0,1,11.43,11.83Z"/>
        </svg>
        <input bind:this={input} type="text" name="search" >
    </form>
</div>

<style>
    .search-bar {
        width: 100%;
        margin-right: 4rem;
    }

    form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.5rem 0.75rem;
        margin: 0;
        width: 100%;
        max-width: 15rem;
        border: none;
        border-radius: 0.25rem;
        background-color: var(--cmd-color-white);
    }
    
    svg {
        margin-right: 0.5rem;
    }

    input {
        width: 100%;
        font-size: 0.9rem;
        font-family: var(--font-kotori-rose);
        font-weight: normal;
        padding: 0;
        background-color: var(--cmd-color-white);
        border: none;
    }
</style>