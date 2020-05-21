<template>
    <div :class="$style.root">
        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style module lang="scss">

    * { box-sizing: border-box; }


    :root {

        /* Define Default Component Theme */
        --kro-application-background: white;
        --kro-application-foreground: #2E3440;
        --kro-application-divider: #D8DEE9;

        --kro-component-divider: var(--kro-application-divider);

        --kro-component-background: #E5E9F0;
        --kro-component-foreground:  #3B4252;
        --kro-component-accent: #5E81AC;
        --kro-component-accent-contrast: white;

        --kro-component-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;


        /* Define Default Dark Theme for Components */
        --kro-application-background: #2E3440;
        --kro-component-background-secondary: #434C5E;
        
        --kro-application-foreground: #ECEFF4;
        --kro-application-divider: #4C566A;

        --kro-component-background: #3B4252;
        --kro-component-foreground:  #D8DEE9;
        --kro-component-accent: #5E81AC;
        --kro-component-accent-contrast: white;

    }


    html,
    body {
        margin: 0;
        font-family: 'Rubik', sans-serif;

        color: var(--kro-application-foreground);
        background: var(--kro-application-background);
    }

    .root {
        padding: 1rem;
        display: grid;
        grid-template-columns: 300px auto;
        gap: 1rem;

        place-content: center;

    }

    .navigation {
        padding: 1rem;
        width: 100%;
        border-right: 4px solid var(--kro-application-divider);
    }

    .logoContainer {

        display: grid;
        grid-template-columns: 3.5rem auto;
        align-items: center;
        gap: 1rem;

        img {
            filter: drop-shadow(0.15rem 0.15rem #ff3232) drop-shadow(-0.15rem -0.15rem #00dcdc);
        }

        span {
            font-size: 2rem;
            font-weight: 700;
        }

    }

    .content {
    }

</style>