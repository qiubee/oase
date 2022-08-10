<script lang="ts">
    import type { Comment, Post, Sorted } from "src/@types/main";
    import { posts, userID, sorted } from "../../store";

    export let postID: Post["id"];
    let message: string;

    function reply(): void {
        if (!message || message.length < 1) {
            return;
        }
        const comment: Comment = {
            userID: $userID,
            userType: "student",
            timestamp: `${+new Date()}`,
            message: message
        }
        posts.update(function (posts) {
            posts.find(function (post) {
                return post.id === postID;
            }).comments.push(comment);
            return posts;
        })
        sorted.update(function (sorted) {
            sorted.comments = <Sorted["comments"]>$posts.find(function (post) {
                return post.id === postID;
            }).comments;
            return sorted;
        })
        message = "";
    }
</script>

<div>
    <div class="reply">
        <input bind:value={message} type="text" name="reply" placeholder="Reageer">
        <button on:click={reply}>Plaatsen</button>
    </div>
</div>

<style>
    .reply {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        bottom: 0;
        padding: 1rem 0;
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
    }

    input {
        padding: 0.5rem 0.75rem;
        font-size: 0.9rem;
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
        font-weight: normal;
        margin: 0 0.75rem;
        max-width: 20rem;
        width: 100%;
        border: none;
        border-radius: 0.25rem;
    }

    button {
        background-color: #FFF021;
        background-color: var(--cmd-color-main);
        margin-right: 0.75rem;
        border-radius: 0.25rem;
        padding: 0.45rem 0.5rem;
        height: 100%;
        color: initial;
        border: 2px solid black;
        border-color: var(--cmd-color-black);
        font-family: "Kotori Rose", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-family: var(--font-kotori-rose);
    }
</style>