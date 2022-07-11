<script lang="ts">
    import TopBar from "../lib/components/TopBar.svelte";
    import { posts, students } from "../store";
    import { timeDiff } from "../utils/utils";

    type Params = {
        id?: string
    }

    export let params: Params = {};
    let header: HTMLElement;

    const post = $posts.find(post => post.id === parseInt(params.id));
    const student = $students.find(user => user.id === post.author);
</script>

<div class="view">
    <div class="content">
        <TopBar bind:node={header} post={true}/>
        <article>
            <header>
                <header>
                    <div class="metadata">
                        <div class="photo">
                            <img src="{student.photoURL}" alt="Profiel foto {student.firstName} {student.lastNameVisible ? student.lastName : ""}">
                        </div>
                        <span class="name">{student.firstName} {student.lastNameVisible ? student.lastName : ""}</span>
                        <span class="time">{timeDiff(new Date(parseInt(post.timestamp)), new Date())}</span>
                    </div>
                    <div class="status">
                        <span>#{post.type}</span>
                        <img src="src/assets/status/{post.status}.svg" alt="{post.status}">
                    </div>
                </header>
            </header>
        </article>
    </div>
</div>

<style>
    article {
        margin: 0 0.75rem;
    }
</style>