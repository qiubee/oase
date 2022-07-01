<script lang="ts">
    import { user } from "../../store";
</script>

<div class="lessons">
    <h2>Vandaag</h2>
    <ul>
        {#each $user.lessons as lesson}
        <li style="background-color: {lesson.image};">
            <h3>{lesson.name}</h3>
            <span class="room">{lesson.room}</span>
            <div>
                <span>{lesson.time.start}</span> - <span>{lesson.time.end}</span>
            </div>
        </li>
        {/each}
    </ul>
</div>

<style>
    .lessons {
        margin: var(--gutter);
    }

    h2 {
        font-size: 1.25rem;
    }

    ul li {
        display: block;
        background-color: var(--cmd-color-white);
        padding: 1.25rem;
        border-radius: 0.5rem;
        font-family: "Pauschal";
    }

    h3 {
        font-size: 1.25rem;
        margin: 0;
    }

    .room {
        font-size: 0.8rem;
        color: var(--cmd-color-gray);
    }

    li > div {
        margin: 2rem auto 0.5rem auto;
    }
</style>