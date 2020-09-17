<template>
    <div ref="el" :class="$attrs.class" class="kro-icon"></div>
</template>

<script lang="ts" setup="props">
    import { watch, ref, onMounted, nextTick } from 'vue';
    import Iconify from '@purge-icons/generated';

    declare const props: {
        icon: string;
    }

    export const el = ref<HTMLElement | null>(null);

    const update = async() => {
        if (el.value) {
            await nextTick();

            const svg = Iconify.renderSVG(props.icon, {});

            if (svg) {
                el.value.textContent = '';
                el.value.appendChild(svg);
            } else {
                const span = document.createElement('span');
                span.className = 'iconify';
                span.dataset.icon = props.icon;
                el.value.textContent = '';
                el.value.appendChild(span);
            }
        } 
    }

    watch(() => props.icon, update, { flush: 'post' });
    onMounted(update);
</script>

<style lang="scss">
    .kro-icon {
        width: var(--kro-icon-size, 1.5rem);
        height: var(--kro-icon-size, 1.5rem);

        fill: currentColor;

        svg {
            width: 100%;
            height: 100%;
        }
    }
</style>