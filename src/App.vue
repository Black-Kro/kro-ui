<template>
    <div :class="$style.root">
        <div :class="$style.navigation">
            <div :class="$style.logoContainer">
                <img :class="$style.logo" src="@/assets/kro.svg" alt="">
                <span>Krō UI</span>
            </div>
        </div>

        <div :class="$style.content">
            <button-demo />
            <spinner-demo />
            <switch-demo />
            <textfield-demo />
            <icon-button-demo />
            <button-group-demo />
            <squircle-demo />
            <icon-demo />
        </div>

    </div>
</template>

<script>
    import { ButtonDemo } from './components/Button';
    import { IconDemo } from './components/Icon';
    import { SwitchDemo } from './components/Switch';
    import { TextfieldDemo } from './components/Textfield';
    import { SquircleDemo } from './components/Squircle';
    import { IconButtonDemo } from './components/IconButton';
    import { SpinnerDemo } from './components/Spinner';
    import { ButtonGroupDemo } from './components/ButtonGroup';

    export default {
        components: { 
            ButtonDemo, 
            IconDemo, 
            SwitchDemo, 
            TextfieldDemo, 
            SquircleDemo, 
            IconButtonDemo, 
            SpinnerDemo,
            ButtonGroupDemo
        }
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