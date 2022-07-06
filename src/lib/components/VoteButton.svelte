<script lang="ts">
    export let active: boolean = false;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
    <path class={active ? "active" : "inactive"} d="M90,177.5A22.526,22.526,0,0,1,67.5,155V112.5H25a22.5,22.5,0,0,1,0-45H67.5V25a22.5,22.5,0,0,1,45,0V67.5H155a22.5,22.5,0,0,1,0,45H112.5V155A22.526,22.526,0,0,1,90,177.5Z"/>
    <path d="M90,5a20.061,20.061,0,0,1,20,20V70h45a20,20,0,1,1,0,40H110v45a20,20,0,0,1-40,0V110H25a20,20,0,0,1,0-40H70V25A20.023,20.023,0,0,1,90,5m0-5A25.073,25.073,0,0,0,65,25V65H25a25,25,0,1,0,0,50H65v40a25,25,0,0,0,50,0V115h40a25,25,0,1,0,0-50H115V25A25.061,25.061,0,0,0,90,0Z"/>
</svg>

<style>
    svg {
        max-width: 1rem;
    }

    .active {
        fill: black;
    }
    
    .inactive {
        fill: none;
    }
</style>