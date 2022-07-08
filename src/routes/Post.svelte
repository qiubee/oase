<script lang="ts">
    import { posts, students } from "../store";
    import TopBar from "../lib/components/TopBar.svelte";

    type Params = {
        id?: string
    }

    export let params: Params = {};
    let header: HTMLElement;

    const post = $posts.find(post => post.id === parseInt(params.id));
    const student = $students.find(user => user.id === post.author);

    function timeDiff(start: Date, end: Date): string {
        const diff = (+end - +start);
        const days = Math.floor(diff / 1000 / 60 / 60 / 24)
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor(diff / 1000 / 60);
        
        if (days >= 1) {
            return days + "d";
        } else if (hours >= 1) {
            return hours + "h";
        } else {
            return minutes + "min";
        }
    }
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