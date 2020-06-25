<template>
    <div ref="container" class="kro-menu">
        <slot :open="open" name="activator"></slot>
        
        <div ref="menu" class="kro-menu__content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref, Component } from 'vue';

    export default {
        name: 'KroMenu',
        props: { 
            offsetX: Boolean,
            offsetY: Boolean,

            left: Boolean,
            right: Boolean,
            top: Boolean,
            bottom: Boolean,

        },
        setup(props) {
            const isOpen = ref(false);

            const container = ref<HTMLElement | null>(null);
            const menu = ref<HTMLElement | null>(null);

            const open = () => { 
                isOpen.value = true;

                if (menu.value && container.value) {

                    let desiredX = props.left ? -1 : (props.right ? 1 : 0);
                    let desiredY = props.bottom ? -1 : (props.top ? 1 : 0);

                    const { offsetX: shouldOffsetX, offsetY: shouldOffsetY } = props;

                    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
                    const { top, right, bottom, left } = container.value.getBoundingClientRect();

                    const { clientHeight: containerHeight, clientWidth: containerWidth } = container.value;
                    const { clientHeight: menuHeight, clientWidth: menuWidth } = menu.value;

                    const offsetX = shouldOffsetX ? containerWidth : 0;
                    const offsetY = shouldOffsetY ? containerHeight : 0;

  
                    // Check can fit top, bottom, left, right.
                    const canFitBottom = (menuHeight + top + offsetY) < windowHeight;
                    const canFitTop = (menuHeight) < top;
                    // const canFitMiddle = ()

                    const canFitLeft = (menuWidth) < left;
                    const canFitRight = (menuWidth + left + offsetX) < windowWidth;


                    if (desiredY === -1) {
                        if (!canFitBottom)
                            desiredY = 1;
                        else
                            menu.value.style.setProperty('--kro-menu-offset-y', `${offsetY}px`);
                    }

                    if (desiredY === 1) {
                        if (!canFitTop)
                            desiredY = 0;
                        else
                            menu.value.style.setProperty('--kro-menu-offset-y', `-${offsetY + menuHeight}px`)
                    }




                    console.log(menuHeight + offsetY) ;

                    console.log('Can Fit Bottom', canFitBottom);
                    console.log('Can Fit Top', canFitTop);
                    console.log('Can Fit Left', canFitLeft);
                    console.log('Can Fit Right', canFitRight);

                }
            }

            const close = () => { 
                isOpen.value = false; 
            }

            const toggle = () => { isOpen.value ? close() : open(); }

            return {
                // Props
                isOpen,

                // Events
                open,
                close,
                toggle,

                // Refs
                menu,
                container,
            }
        }
    }
</script>

<style lang="scss">

    @import '../../styles/general/layers';

    .kro-menu {
        @include useLayer(menu);

        display: inline-block;
        position: relative;
    }

        .kro-menu__content {
            // opacity: 0;
            // bottom: 0;
            // top: 50%;
            // right: 0;
            // transform: translateX(100%) translateY(-50%);
            pointer-events: none;
            transform: translateX(var(--kro-menu-offset-x)) translateY(var(--kro-menu-offset-y));

            top: 0; left: 0;
            width: 200px;
            opacity: 0.5;

            background: var(--kro-background-secondary);
            border: 2px solid black;

            position: absolute;
        }

</style>