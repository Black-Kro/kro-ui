import { defineComponent, VNode, h } from 'vue';


export default defineComponent({

    props: {
        activeClass: {
            type: String,
            default: 'kro-item--active',
        },
        required: Boolean,
        max: {
            type: [Number, String],
            defualt: null,
        },
        multiple: Boolean,
    },
    setup(props, { slots }) {



        return () => {
            if (slots.default)
                return h('div', slots.default());
            else
                return h('div');
        };
    
    }

});