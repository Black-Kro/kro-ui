<template>
    <div :class="$style.root">
        <button-demo />
        <icon-demo />
        <switch-demo />
        <textfield-demo />
        <squircle-demo />
        <icon-button-demo />
    </div>
</template>

<script>
    import { ButtonDemo } from './components/Button';
    import { IconDemo } from './components/Icon';
    import { SwitchDemo } from './components/Switch';
    import { TextfieldDemo } from './components/Textfield';
    import { SquircleDemo } from './components/Squircle';
    import { IconButtonDemo } from './components/IconButton';

    export default {
        components: { ButtonDemo, IconDemo, SwitchDemo, TextfieldDemo, SquircleDemo, IconButtonDemo }
    }
</script>

<style module>

    * { box-sizing: border-box; }


    :root {

        /* Define Default Component Theme */
        --kro-application-background: white;
        --kro-application-foreground: #2E3440;
        --kro-application-divider: #D8DEE9;

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
        place-items: center;
    }

</style>