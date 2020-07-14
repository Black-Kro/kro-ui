import { defineComponent, ref } from 'vue';


export default defineComponent({
    setup(props, { slots }) {
        
        const isActive = ref(false);
        const toggle = () => {
            isActive.value = !isActive.value;
        };

        return () => {

            if (slots.default)
                return slots.default({
                    isActive: isActive.value,
                    toggle,
                });
        }

    }
});
