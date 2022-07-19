<script lang="ts">
    import type { Grade } from "src/@types/main";
    import { students, userID } from "../../store";

    let grades: Grade[] = $students.find(user => user.id === $userID).grades;

    export let max: number = grades.length;
</script>

<ul class="grades">
    {#each grades as grade, index}
        {#if index < max}
            <li>
                <span class="grade">{grade.grade.toFixed(1).toString().replace(".", ",")}</span>
                <div>
                    <span class="course">{grade.course}</span>
                    <span class="date">{new Date(parseInt(grade.date)).toLocaleDateString("nl-nl", {
                        year:"numeric",
                        month:"long",
                        day:"numeric"
                    })}</span>
                </div>
                <span class="points">&#43; {grade.points} ECTS</span>
            </li>
        {/if}
    {/each}
</ul>

<style>
    li {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--cmd-color-white);
        margin: 0.25rem 0;
        padding: 0.75rem;
    }

    .grade {
        display: inline-flex;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: bold;
        background-color: var(--cmd-color-main);
        padding: 0.75rem;
        width: 1.75rem;
        height: 1.75rem;
        text-align: center;
    }

    li div {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        font-size: 0.85rem;
    }

    .date {
        font-family: var(--font-pauschal);
        color: var(--cmd-color-gray);
    }

    .points {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 0.7rem;
        font-family: var(--font-pauschal);
        background-color: var(--cmd-color-main);
        padding: 0.3rem 0.4rem;
    }
</style>