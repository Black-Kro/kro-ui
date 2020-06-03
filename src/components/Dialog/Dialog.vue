<template>
    <div>
        <slot :open="open" :close="close" :toggle="toggle" name="activator"></slot>
        <Teleport to="#kro-portal">
            <div :tabindex="isOpen ? 1 : -1" :class="{[$style.root]: true, [$style.isOpen]: isOpen}">
                <div @click="() => { if (!persistent) { close(); } }" :class="$style.scrim"></div>
                <kro-surface raised :class="$style.content" @transitionend="onTransitionEnded">
                    <div v-if="shouldMountContent">
                        <div v-if="!!$slots.title" :class="$style.title">
                            <slot :open="open" :close="close" :toggle="toggle" name="title"></slot>
                        </div>
                        <slot :open="open" :close="close" :toggle="toggle"></slot>
                        <div v-if="!!$slots.controls" :class="$style.controls">
                            <slot :open="open" :close="close" :toggle="toggle" name="controls"></slot>
                        </div>
                    </div>
                </kro-surface>
            </div>
        </Teleport>
    </div>
</template>

<script lang='ts'>
    import { ref, onMounted, nextTick, onUnmounted } from 'vue';
    import { KroSurface } from '../Surface';

    export default {
        components: { KroSurface },
        props: {
            open: Boolean,
            persistent: Boolean,
        },
        setup(props, { emit }) {
            const isOpen = ref(false);
            const shouldMountContent = ref(false);

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
                        if (!props.persistent) {
                            isOpen.value = false;
                            window.removeEventListener('keydown', close);
                            emit('close');
                        }
                    }
                } else {
                    isOpen.value = false;
                    emit('close');
                }

            };

            const open = () => { 
                isOpen.value = true;
                shouldMountContent.value = true;
                window.addEventListener('keydown', close);

                emit('open');
            };

            const toggle = () => { isOpen ? close(null) : open(); };

            onMounted(async () => {
                if (props.open)
                    open();
            });

            onUnmounted(() => {
                window.removeEventListener('keydown', close);
            });

            return {
                isOpen,
                shouldMountContent,

                open,
                close,
                toggle,

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
        place-content: center;

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

    .title {
        font-size: 1.5rem;
        font-weight: 500;
        padding-top: 0.5rem;

        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        white-space: nowrap;
        align-items: center;
        gap: 0.5rem;
    }

    .controls {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        gap: 1rem;
        justify-content: flex-end;
    }

</style>