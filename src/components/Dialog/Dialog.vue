<template>
    <div>
        <slot :open="open" :close="close" :toggle="toggle" name="activator"></slot>
        <Teleport to="#kro-portal">
            <div :tabindex="isOpen ? 1 : -1" :class="{[$style.root]: true, [$style.isOpen]: isOpen}">
                <div @click="close" :class="$style.scrim"></div>
                <kro-surface raised :class="$style.content">
                    <slot :open="open" :close="close" :toggle="toggle"></slot>
                </kro-surface>
            </div>
        </Teleport>
    </div>
</template>

<script lang='ts'>
    import { ref } from 'vue';
    import { KroSurface } from '../Surface';

    export default {
        components: { KroSurface },
        setup(props) {
            const isOpen = ref(false);

            const close = (e) => { 
                if (e?.type === 'keydown') {
                    if (e.key === 'Escape') {
                        isOpen.value = false;
                        window.removeEventListener('keydown', close);
                    }
                } else {
                    isOpen.value = false;
                }
            };

            const open = () => { 
                isOpen.value = true;
                window.addEventListener('keydown', close);
            };

            const toggle = () => { isOpen ? close() : open(); };

            return {
                isOpen,

                open,
                close,
                toggle,
            }
        }
    }
</script>

<style module lang="scss">

    .root {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: 9001;

        display: grid;
        place-items: center;

        &:not(.isOpen) {
            pointer-events: none;

            .scrim {
                opacity: 0;
            }

            .content {
                opacity: 0;
                transform: scale(0);
            }
        }
    }

        .scrim {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            backdrop-filter: blur(5px);
            background: rgba(0, 0, 0, .25);

            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .content {
            max-width: 600px;

            position: relative;
            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1),
                        transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }

</style>