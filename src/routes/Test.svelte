<script lang="ts">
import Button from "../lib/components/Button.svelte";

    import { link } from "svelte-spa-router";
    import { students, userID } from "../store";

    let firstName: string = "";
    let lastName: string = "";

    function updateUserName(): void {
        if (firstName && lastName) {
            students.update(function (students) {
                const student = students.find((student) => student.id === $userID);
                student.firstName = firstName;
                student.lastName = lastName;
                return students;
            })
        }
    }
</script>


<div class="view">
    <div class="content">
        <div class="links">
            <a href="/login" use:link>Login</a>
            <a href="/" use:link>Home</a>
        </div>
        <form>
            <label>First name: <input bind:value={firstName} type="text" name="firstname"></label>    
            <label>Last name: <input bind:value={lastName} type="text" name="lastname"></label>
            <input on:click|preventDefault={updateUserName} type="submit" value="Confirm">
        </form>
    </div>
</div>

<style>
    .content {
        height: 100%;
        max-width: 15rem;
        margin: auto;
    }

    .links {
        padding-top: 5rem;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    a {
        display: inline-flex;
        align-items: center;
        border: 2px solid black;
        border-color: var(--cmd-color-black);
        border-radius: 0.35rem;
        padding: 0.3rem 0.5rem;
        font-weight: bold;
        font-size: 0.8rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
        margin-left: -1.5rem;
        font-size: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    input {
        padding: 0.5rem 0.75rem;
        font-size: 0.9rem;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: normal;
        margin: 0.25rem 0rem;
        width: 100%;
        border: none;
        border-radius: 0.25rem;
    }
    
    input:not([type="submit"]):focus,
    input:not([type="submit"]):focus-visible {
        outline: 2px solid black;
        outline-color: var(--cmd-color-black);
    }

    input[type="submit"] {
        font-family: "Pauschal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-pauschal);
        font-size: 1rem;
        background-color: black;
        background-color: var(--cmd-color-black);
        color: white;
        color: var(--cmd-color-white);
        padding: 0.75rem;
        border: none;
        border-radius: 0.25rem;
        width: 10rem;
        margin-bottom: 0.75rem;
    }

    input[type="submit"]:hover {
        cursor: pointer;
    }
</style>