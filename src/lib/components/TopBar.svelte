<script lang="ts">
    import { routes } from "../../store";
    import { push } from "svelte-spa-router";
    import type { Route } from "src/@types/main";
    import Subscriptions from "./topbar/Subscriptions.svelte";
    import Category from "./topbar/Category.svelte";
    import Options from "./topbar/Options.svelte";

    export let state: Route["name"] = $routes[0].name;
    export let post: boolean = false;
    export let node: HTMLElement = null;
    export let hideBorder: boolean = false;
    export let author: boolean = false;
    export let category: string = "";
</script>

<header bind:this={node} style="{hideBorder ? "border-color: var(--cmd-color-main)" :""}">
  {#if post}
    {#if author}
      <Options left={"arrow-left"} right={"edit"}/>
    {:else}
      <Options left={"arrow-left"} right={"notification-bell"}/>
    {/if}
  {:else if category}
    <Options left={"arrow-left"} {category} right={"notification-bell"}/>
  {:else}
    {#if state === "home"}
        <Category/>
    {:else if state === "forum"}
        <Subscriptions/>
    {/if}
    <button on:click={() => push("/post-aanmaken")} class="cta">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 24.519 21.059">
            <g id="Group_699" data-name="Group 699" transform="translate(-355.01 -297.642)">
              <g id="Group_702" data-name="Group 702" transform="translate(367.486 300.563)">
                <path id="Path_416" data-name="Path 416" d="M366.892,300.44a7.586,7.586,0,0,0,.053,1.73A8.321,8.321,0,0,1,366.892,300.44Zm.306,3.165q-.063-.3-.127-.57c.042.264.106.538.179.823h.01A2.214,2.214,0,0,1,367.2,303.6Zm2.331,6.931c.042.053.095.105.137.158h.011A2.04,2.04,0,0,1,369.529,310.536Z" transform="translate(-366.863 -300.44)" stroke="rgba(0,0,0,0)" stroke-width="1"/>
              </g>
              <g id="Group_703" data-name="Group 703" transform="translate(366.713 301.755)">
                <path id="Path_417" data-name="Path 417" d="M367.037,305.737a17.552,17.552,0,0,1-.57-2.025,15.077,15.077,0,0,1-.338-2.141,16.577,16.577,0,0,0,.9,4.177c.053.148.105.3.169.432Z" transform="translate(-366.13 -301.57)" stroke="rgba(0,0,0,0)" stroke-width="1"/>
              </g>
              <g id="Group_704" data-name="Group 704" transform="translate(355.517 298.196)">
                <path id="Path_418" data-name="Path 418" d="M374.772,298.875l-1.677,1.614a.383.383,0,0,1-.274.116.394.394,0,0,1-.285-.127.4.4,0,0,1,.011-.559l1.677-1.614a.4.4,0,0,1,.559.011A.389.389,0,0,1,374.772,298.875Z" transform="translate(-354.589 -298.196)" stroke="rgba(0,0,0,0)" stroke-width="1"/>
                <path id="Path_419" data-name="Path 419" d="M370.279,300c-1.139-1.509-1.983-1.625-2.5-1.445a1.161,1.161,0,0,0-.527.4l-.032.032-.032.032-6.477,5.264a5.053,5.053,0,0,1-1.53.844l-2.194.76a2.149,2.149,0,0,0-1.35,2.743l.844,2.479a2.173,2.173,0,0,0,2.057,1.466,1.829,1.829,0,0,0,.338-.032l1.646,4.789a1.25,1.25,0,0,0,.643.728,1.232,1.232,0,0,0,.549.127,1.409,1.409,0,0,0,.422-.063l1.783-.612a1.286,1.286,0,0,0,.8-1.625l-1.53-4.452,8.4.19h.011a1,1,0,0,0,.3.042,1.34,1.34,0,0,0,.359-.053c.77-.264,1.087-1.255,1.087-2.563a15.711,15.711,0,0,0-.918-4.789A16.053,16.053,0,0,0,370.279,300Zm-6.308,16.151a.488.488,0,0,1-.306.612l-1.793.612a.472.472,0,0,1-.359-.021.512.512,0,0,1-.243-.274l-1.635-4.758,1.793-.612a4.147,4.147,0,0,1,.949-.222Zm6.319-5.348-7.11-.158a5.865,5.865,0,0,0-2,.316l-2.194.749a1.382,1.382,0,0,1-1.751-.854l-.844-2.479a1.378,1.378,0,0,1,.854-1.751l2.194-.749a5.726,5.726,0,0,0,1.772-.981l5.528-4.494a5.681,5.681,0,0,0-.042.76c0,.19.011.38.021.58a15.081,15.081,0,0,0,.338,2.141,17.552,17.552,0,0,0,.57,2.025l.158.443c.063.19.137.369.211.549.127.316.264.633.411.928,0,.011.011.021.011.032.084.2.179.39.274.57s.19.359.285.527a6.52,6.52,0,0,0,.39.643,5.772,5.772,0,0,0,.39.559c.127.169.253.316.369.454l.032.032a2.022,2.022,0,0,0,.148.158Zm1.7.063a.526.526,0,0,1-.274-.021,3.656,3.656,0,0,1-1.593-1.54c-.074-.105-.158-.232-.232-.348a14.222,14.222,0,0,1-.876-1.667v-.011a1.853,1.853,0,0,0-1.129-3.312h-.011c-.074-.285-.137-.559-.179-.823a.8.8,0,0,1-.032-.221,3.657,3.657,0,0,1-.095-.644,7.586,7.586,0,0,1-.053-1.73c.011-.084.021-.169.032-.243a1.976,1.976,0,0,1,.095-.411,1.09,1.09,0,0,1,.179-.4.01.01,0,0,1,.011-.011.45.45,0,0,1,.2-.179.4.4,0,0,1,.116-.011c.3,0,.823.3,1.5,1.192a15.169,15.169,0,0,1,2.025,4.04C372.895,308.1,372.684,310.622,371.987,310.864Z" transform="translate(-355.517 -298.18)" stroke="rgba(0,0,0,0)" stroke-width="1"/>
                <path id="Path_420" data-name="Path 420" d="M377.733,302.38l-3,1.034a.53.53,0,0,1-.127.021.405.405,0,0,1-.38-.274.394.394,0,0,1,.253-.5l3-1.034a.394.394,0,0,1,.5.253A.381.381,0,0,1,377.733,302.38Z" transform="translate(-354.49 -298.009)" stroke="rgba(0,0,0,0)" stroke-width="1"/>
                <path id="Path_421" data-name="Path 421" d="M377.662,306.483a.389.389,0,0,1-.39.39h-.011l-2.321-.042a.4.4,0,0,1-.39-.4.412.412,0,0,1,.4-.39l2.331.042A.383.383,0,0,1,377.662,306.483Z" transform="translate(-354.472 -297.765)" stroke="rgba(0,0,0,0)" stroke-width="1"/>
              </g>
            </g>
          </svg>              
    </button>
  {/if}
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        max-height: 3.25rem;
        max-width: 30rem;
        background-color: var(--cmd-color-main);
        border-bottom: 2px solid var(--cmd-color-black);
        padding: 0.75rem 0;
        margin: 0 0.75rem;
    }

    .cta {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        appearance: none;
        border: none;
        width: 2.5rem;
        height: 2.5rem;
        background-color: var(--cmd-color-white);
        border-radius: 0.5rem;
    }
</style>