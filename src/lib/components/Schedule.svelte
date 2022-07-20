<script lang="ts">
    import type { Lesson, Student } from "src/@types/main";
    import { students, userID } from "../../store"; 
    import { getDaysInMonth, getLongMonthName } from "../../utils/utils"

    type Schedule = {
        day: Date;
        lessons: Lesson[];
    }

    const now = new Date(Date.now());
    let daySelected = now;
    let month = daySelected.getMonth();
    let monthName = getLongMonthName(month);
    let year = daySelected.getFullYear();
    let days = getDaysInMonth(daySelected.getMonth(), year);
    let firstDayOfWeek = days[0].getDay();

    const user = <Student>$students.find(user => user.id === $userID);
    $: schedule = days.map(function (day) {
        let allLessons: Lesson[] = [];
        for (let lesson of user.lessons) {
            const start = new Date(parseInt(lesson.time.start))
            const startDate = `${start.getDate()} ${start.getMonth()} ${start.getFullYear()}`;
            const date = `${day.getDate()} ${day.getMonth()} ${day.getFullYear()}`;
            if (startDate === date) {
                allLessons.push(lesson);
            }
        }
        return {
            day: day,
            lessons: allLessons
        }
    });
    
    $: lessons = getLessons(schedule);

    function getLessons(schedule: Schedule[]) {
        const date = schedule.find(function (date) {
            return date.day.getDate() === daySelected.getDate() 
                && date.day.getMonth() === daySelected.getMonth() 
                && date.day.getFullYear() === daySelected.getFullYear();
        });
        if (date) {
            return date.lessons;
        } else {
            return [];
        }
    }

    function changeMonth(option: "next" | "previous"): void {
        if (option === "next") {
            if (month === 11) {
                month = 0;
                year++;
            } else {
                month++;
            }
        } else if (option === "previous") {
            if (month === 0) {
                month = 11
                year--;
            } else {
                month--
            }
        }
        monthName = getLongMonthName(month);
        days = getDaysInMonth(month, year);
        firstDayOfWeek = days[0].getDay();
    }

    function selectedDay(day: Date): void {
        daySelected = day;
        month = daySelected.getMonth();
        monthName = getLongMonthName(month);
        year = daySelected.getFullYear();
        days = getDaysInMonth(daySelected.getMonth(), year);
        firstDayOfWeek = days[0].getDay();
    }
</script>

<div class="schedule">
    <div class="roster">
        <div class="top">
            <span class="month">{monthName} {year}</span>
            <div class="navigation">
                <button class="left" on:click={() => changeMonth("previous")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 8 4.898" transform="rotate(90)">
                        <path id="Union_5" data-name="Union 5" d="M-386.25,3.834l-.163.167.163-.167L-390,0l3.75,3.834L-382.5,0l-3.75,3.834.163.167Z" transform="translate(390.357 0.35)" fill="none" stroke="#1f2121" stroke-width="1.5"/>
                    </svg>
                </button>
                <button class="right" on:click={() => changeMonth("next")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 8 4.898" transform="rotate(270)">
                        <path id="Union_5" data-name="Union 5" d="M-386.25,3.834l-.163.167.163-.167L-390,0l3.75,3.834L-382.5,0l-3.75,3.834.163.167Z" transform="translate(390.357 0.35)" fill="none" stroke="#1f2121" stroke-width="1.5"/>
                    </svg>
                </button>
            </div>
        </div>
        <ul class="day-names">
            <li>ma</li>
            <li>di</li>
            <li>wo</li>
            <li>do</li>
            <li>vr</li>
            <li>za</li>
            <li>zo</li>
        </ul>
        <ul class="days">
            {#each schedule as date, index}
            {@const currentDay = date.day.getDate() === now.getDate() && date.day.getMonth() === now.getMonth() && date.day.getFullYear() === now.getFullYear()}
            {@const currentSelectedDay = date.day.getDate() === daySelected.getDate() && date.day.getMonth() === daySelected.getMonth() && date.day.getFullYear() === daySelected.getFullYear()}
                {#if index === 0}
                    <li on:click={() => selectedDay(date.day)} class="{currentDay ? "now" : ""} {date.lessons.length > 0 ? "planned": ""} {currentSelectedDay ? "selected" : ""}" 
                    style="grid-column-start: {firstDayOfWeek};">{date.day.getDate()}</li>
                {:else}
                    <li on:click={() => selectedDay(date.day)} class="{currentDay ? "now" : ""} {date.lessons.length > 0 ? "planned": ""} {currentSelectedDay ? "selected" : ""}">{date.day.getDate()}</li>
                {/if}
            {/each}
        </ul>
    </div>
    {#if lessons.length > 0}
        <ul class="lessons">
            {#each lessons as lesson}
            {@const startMinutes = new Date(parseInt(lesson.time.start)).getMinutes()}
            {@const startHours = new Date(parseInt(lesson.time.start)).getHours()}
            {@const endMinutes = new Date(parseInt(lesson.time.end)).getMinutes()}
            {@const endHours = new Date(parseInt(lesson.time.end)).getHours()}
                <li>
                    <div class="place-time">
                        <span class="course">{lesson.name}</span>
                        <span class="room">{lesson.room}</span>
                    </div>
                    <div class="time">
                        <span class="start">{startHours}:{startMinutes < 10 ? `${startMinutes}0` : startMinutes}</span>
                        <span class="end">{endHours}:{endMinutes < 10 ? `${endMinutes}0` : endMinutes}</span>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .days li {
        cursor: pointer;
    }

    .schedule {
        margin: 1rem 0.75rem;
    }

    .roster {
        padding: 1.25rem;
        margin: 0;
        margin-bottom: 0.25rem;
        background-color: var(--cmd-color-white);
    }

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .month {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .navigation {
        display: flex;
        flex-direction: row;
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--cmd-color-black);
        width: 1.75rem;
        height: 1.75rem;
    }

    button.left {
        margin-right: 0.5rem;
    }

    .day-names {
        display: grid;
        grid: auto-flow 2.25rem / repeat(7, 1fr);
        justify-items: center;
        align-items: center;
        margin: 0.5rem 0;
    }

    .day-names li,
    .days li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .day-names li {
        font-weight: bold;
    }

    .days {
        display: grid;
        grid: auto-flow calc((100vw - 4rem) / 7) / repeat(7, 1fr);
        justify-items: center;
        align-items: center;
        margin: 0;
    }

    .days li {
        position: relative;
        font-family: var(--font-pauschal);
    }

    .now {
        background-color: var(--cmd-color-black);
        color: var(--cmd-color-white);
        border-radius: 0.5rem;
    }

    .selected {
        border: 2px solid var(--cmd-color-black);
        border-radius: 0.5rem;
    }

    li.planned::after {
        content: "";
        position: absolute;
        display: block;
        width: 3px;
        height: 3px;
        bottom: 0.35rem;
        background-color: var(--cmd-color-black);
    }

    li.now.planned::after {
        background-color: var(--cmd-color-white);
    }

    .lessons {
        margin: 0;
    }

    .lessons li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--cmd-color-white);
        padding: 0.75rem 1.25rem;
        font-family: var(--font-pauschal);
        margin: 0.25rem 0;
    }

    .lessons .place-time {
        display: flex;
        flex-direction: column;
    }

    .lessons .course {
        font-size: 1rem;
    }

    .lessons .room {
        font-size: 0.75rem;
        color: var(--cmd-color-gray);
    }

    .lessons .time {
        font-size: 0.8rem;
    }

    @media (min-width: 25rem) {
        .days {
            grid: auto-flow 3rem / repeat(7, 1fr);
        }
    }
</style>