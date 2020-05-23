import { inject } from 'vue';

export const IconSymbol = Symbol();

export function useIcons() {
    const icons = inject<string[]>(IconSymbol);
    return {
        icons
    }
}