<script lang="ts">
    import { onMount } from "svelte";
    import type { Lesson, Student } from "src/@types/main";
    import { students, userID } from "../../store";
    const user = $students.find(user => user.id === $userID);
    const lessonsToday = <Student["lessons"]>user.lessons.filter(function (lesson: Lesson) {
        const date = new Date(parseInt(lesson.time.start));
        const now = new Date(Date.now());
        return date.getDate() === now.getDate() 
            && date.getMonth() === now.getMonth() 
            && date.getFullYear() === now.getFullYear();
    })

    let scrollPosition: number = 0;
    let cardOffsetWidth: number;
    let slider: HTMLElement;
    let cardPositions: number[] = [];
    let timer: number;

    function updateScrollPosition(): void {
        for (let i = 0; i < cardPositions.length; i++) {
            if ((slider.scrollLeft + (cardOffsetWidth / 2)) < (cardPositions[i])) {
                scrollPosition = i;
                return;
            }
        }
    }

    function stopAutoScroll(): void {
        clearTimeout(timer);
    }

    function autoScroll(): void {
        let id = 0;
        timer = window.setTimeout(scrollCard, 0);
        function scrollCard() {
            if (slider) {
                if (id >= slider.children.length) {
                    id = 0;
                }
                slider.scrollTo({
                    behavior: "smooth",
                    left: cardOffsetWidth * id,
                });
                id++;
                timer = window.setTimeout(scrollCard, 7500);
            }
        }
    }

    onMount(function () {
        autoScroll();
        [...slider.children].forEach(function (_, index) {
            cardPositions.push(cardOffsetWidth * (index + 1))
        })
    })
</script>

{#if lessonsToday.length > 0}
    <div class="lessons">
        <h2>Vandaag</h2>
        <div>
            <ul bind:this={slider} on:scroll={updateScrollPosition} on:pointerdown|once={stopAutoScroll}>
                {#each lessonsToday as lesson}
                {@const startMinutes = new Date(parseInt(lesson.time.start)).getMinutes()}
                {@const startHours = new Date(parseInt(lesson.time.start)).getHours()}
                {@const endMinutes = new Date(parseInt(lesson.time.end)).getMinutes()}
                {@const endHours = new Date(parseInt(lesson.time.end)).getHours()}
                <li bind:offsetWidth={cardOffsetWidth} style="background-color: {lesson.image};">
                    <div class="subject">
                        <h3>{lesson.name}</h3>
                        <span class="room">{lesson.room}</span>
                    </div>
                    <div class="time">
                        <span class="start">{startHours}:{startMinutes < 10 ? `${startMinutes}0` : startMinutes} - </span>
                        <span class="end">{endHours}:{endMinutes < 10 ? `${endMinutes}0` : endMinutes}</span>
                    </div>
                </li>
                {/each}
            </ul>
            {#if lessonsToday.length > 1}
                <div class="scroll-position">
                    {#each lessonsToday as _, index}
                        {#if index < lessonsToday.length}
                            <div class="point {scrollPosition === index ? "active": ""}"></div>
                        {/if}
                    {/each}
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    .lessons {
        margin: 1rem 0 1.5rem 0;
    }

    h2 {
        font-size: 1.25rem;
        margin: 0 0.75rem;
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    ul::-webkit-scrollbar {
        display: none;
    }

    ul li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        background-color: white;
        background-color: var(--cmd-color-white);
        min-width: calc(100% - 4rem);
        padding: 1.25rem;
        margin: 0 0.75rem;
        border-radius: 0.5rem;
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
        scroll-snap-align: center;
    }

    ul li * {
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
    }

    h3 {
        font-size: 1.25rem;
        margin: 0;
    }

    .room {
        display: inline-block;
        max-width: 10rem;
        font-size: 0.8rem;
        color: #7e7e7e;
        color: var(--cmd-color-gray);
    }

    .time {
        font-size: 1rem;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }

    .lessons > div {
        position: relative;
    }

    .scroll-position {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        transform: translate(-50%);
    }

    .scroll-position .point {
        width: 0.2rem;
        height: 0.2rem;
        background-color: white;
        background-color: var(--cmd-color-white);
        border: 2px solid black;
        border-color: var(--cmd-color-black);
        border-radius: 0.125rem;
    }

    .scroll-position .point:not(:last-of-type) {
        margin-right: 0.25rem;
    }

    .scroll-position .point.active {
        background-color: black;
        background-color: var(--cmd-color-black);
    }
</style>