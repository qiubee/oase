<script lang="ts">
    export let currentStep:number = 1;
    const stages:string[] = ["incomplete", "active", "complete"];
    const steps = [
        {
            stage: stages[1]
        },
        {   
            stage: stages[0]
        },
        {
            stage: stages[0]
        }
    ]

    steps.map(function (step, index) {
        if (index < currentStep - 1) {
            step.stage = stages[2]
        } else if (index === currentStep - 1) {
            step.stage = stages[1]
        } else {
            step.stage = stages[0]
        }
    })
</script>

<div class="progressbar">
    {#each steps as step}     
        <div class="step {step.stage}">
            {#if step.stage === stages[2]}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.607" height="10.607" viewBox="0 0 10.607 10.607">
                    <path id="Union_3" data-name="Union 3" d="M2,6H0V0H2V4H9V6Z" transform="translate(0 6) rotate(-45)" fill="#18161a"/>
                </svg>          
            {/if}
        </div>
    {/each}
</div>

<style>
    .progressbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        padding: 0.5rem 0.8rem;
        border-radius: 3rem;
        height: 0.5rem;
        width: 3rem;
    }

    .step {
        border: 0.1rem solid black;
        border-radius: 100%;
        width: 0.4rem;
        height: 0.4rem;
    }

    .active {
        background-color: black;
    }

    .complete {
        position: relative;
        border: none;
    }

    .complete svg {
        position: absolute;
        top: -3px;
        left: -2px;
    }
</style>