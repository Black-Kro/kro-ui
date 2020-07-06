import { Ref } from 'vue';

interface PositioningOptions {
    offsetX: Boolean,
    offsetY: Boolean,
};

export const usePositioning = (containerEl: Ref<HTMLElement | null>, targetEl: Ref<HTMLElement | null>, options: PositioningOptions) => {

    if (!containerEl.value || !targetEl.value)
        return { canFit: { top: false, bottom: false, left: false, right: false, } };

    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    const container = containerEl.value.getBoundingClientRect();
    const target = targetEl.value.getBoundingClientRect();

    const offsetX = options.offsetX ? container.width : 0;
    const offsetY = options.offsetY ? container.height : 0;

    const canFit = {
        bottom: (target.height + container.top + offsetY) < windowHeight,
        top: target.height < container.top,
        left: target.width < container.left,
        right: (target.width + container.left + offsetX) < windowWidth,
    };

    return {
        canFit
    }
};