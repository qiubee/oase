<script lang="ts">
    import { students, userID, currentCategory, categories } from "../../../store";
    
    let user = $students.find(user => user.id === $userID);
    let userSubsribedCategories = $categories.map(function (cat) {
        for (let id of user.following.categories) {
            if (cat.id === id) {
                return cat.name;
            }
        }
    }).filter((cat) => cat);
    let dropdownCategories: string[] = ["Alles", "Populair", ...userSubsribedCategories];
    let dropdownHidden = true;

    function toggleCategoryDropdown(): void {
        dropdownHidden = dropdownHidden ? false : true;
    }

    function changeCategory(e: Event): void {
        const el = <HTMLInputElement>e.target;
        const selectedCategory = el.textContent;
        if (dropdownCategories.includes(selectedCategory)) {
            currentCategory.update(function (category) {
                category = selectedCategory;
                return category;
            })
        }
        dropdownHidden = true;
    }
</script>

<div class="select-category">
    <button on:click={toggleCategoryDropdown}>
        <span>{$currentCategory}</span>
        <svg class="chevron-down" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 8.214 4.898">
            <path id="Union_5" data-name="Union 5" d="M-386.25,3.834l-.163.167.163-.167L-390,0l3.75,3.834L-382.5,0l-3.75,3.834.163.167Z" transform="translate(390.357 0.35)" fill="none" stroke="#1f2121" stroke-width="1"/>
        </svg>
    </button>
    <ul class="categories {dropdownHidden ? "hidden" : ""}">
        {#each dropdownCategories as category}
            {#if $currentCategory === category}
                <li class="selected">{category}</li>
            {:else}
                <li on:click={changeCategory}>{category}</li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        width: 90%;
        appearance: none;
        border: none;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
    }
    
    button span {
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 12rem;
        margin-right: 0.5rem;
        font-size: 1.5rem;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: bold;
        text-transform: capitalize;
        color: black;
        color: var(--cmd-color-black);
    }

    button:hover,
    .categories li:hover {
        cursor: pointer;
    }

    .select-category {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .categories {
        position: absolute;
        z-index: 1;
        top: 2.05rem;
        left: -0.75rem;
        text-transform: capitalize;
        width: 100vw;
        max-width: 30rem;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.1));
    }

    .categories li {
        position: relative;
        padding: 1rem 0 1rem 0.25rem;
        margin: 0 0.75rem;
        border-bottom: 2px solid black;
        border-color: var(--cmd-color-black);
    }

    .categories .selected {
        background-color: white;
        background-color: var(--cmd-color-white);
        color: black;
        color: var(--cmd-color-black);
    }

    .categories .selected::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: -0.75rem;
        width: 0.75rem;
        height: 100%;
        background-color: white;
        background-color: var(--cmd-color-white);
    }

    .hidden {
        visibility: hidden;
    }

    .chevron-down {
        width: 0.75rem;
        margin-top: 0.25rem;
    }
</style>