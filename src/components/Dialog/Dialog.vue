<template>
    <div>
        <slot :open="open" :close="close" :toggle="toggle" name="activator"></slot>
        Contend Mounted: {{shouldMountContent}}
        <Teleport to="#kro-portal">
            <div :tabindex="isOpen ? 1 : -1" :class="{[$style.root]: true, [$style.isOpen]: isOpen}">
                <div @click="() => { if (!persistent) { close(); } }" :class="$style.scrim"></div>
                <kro-surface raised :class="$style.content" @transitionstart="onTransitionStarted" @transitionend="onTransitionEnded">
                    <slot v-if="shouldMountContent" :open="open" :close="close" :toggle="toggle"></slot>
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
        props: {
            persistent: Boolean,
        },
        setup(props) {
            const isOpen = ref(false);
            const shouldMountContent = ref(false);

            const onTransitionStarted = (e) => {
                if (e.propertyName === 'transform') {
                    shouldMountContent.value = true;
                }
            }

            const onTransitionEnded = (e) => {
                if (e.propertyName === 'transform') {
                    if (!isOpen.value) {
                        shouldMountContent.value = false;
                    }
                }
            }

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

            const toggle = () => { isOpen ? close(null) : open(); };

            return {
                isOpen,
                shouldMountContent,

                open,
                close,
                toggle,

                onTransitionStarted,
                onTransitionEnded,
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
            background: rgba(0, 0, 0, .25);

            // Backdrop Filters currently cause a bug in chrome on macos
            // and are not supported on firefox. In the fureture this maybe be
            // enabled, but for now it will stay disabled.
            // backdrop-filter: blur(5px);

            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .content {
            max-width: 600px;

            position: relative;
            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1),
                        transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }

</style>