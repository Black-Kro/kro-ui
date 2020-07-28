import { ComponentPropsOptions, PropType, computed } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { ComponentProp } from '../../types';

export const RoutablePropsMetadata : ComponentProp[] = [
    {
        name: 'to',
        description: 'Denotes the target route of the link.',
        type: 'string | object',
        values: '-',
        default: 'undefined',
    },
    {
        name: 'exact',
        description: 'Exactly match the link. Without this, \'/\' will match every route.',
        type: 'bool',
        values: '-',
        default: 'undefined',
    },
    {
        name: 'activeClass',
        description: 'Configure the active CSS class applied when the link is active',
        type: 'string',
        values: '-',
        default: 'undefined',
    },
    {
        name: 'exactActiveClass',
        description: 'Configure the active CSS class applied when the link is active with exact match.',
        type: 'string',
        values: '-',
        default: 'undefined',
    },
    {
        name: 'href',
        description: 'Designates the component as anchor and applies the href attribute.',
        type: 'string',
        values: '-',
        default: 'undefined',
    },
    {
        name: 'target',
        description: 'Designates the target attribute. This should only be applied when using the href prop.',
        type: 'string',
        values: '-',
        default: 'undefined',
    },
];

export const RoutableProps = {
    to: {
        type: [String, Object] as PropType<RouteLocationRaw>,
    },
    /**
     * Turns the button into a link
     */
    href: String,

    /**
     * If the button is a link, then this will set the target
     */
    target: {
        type: String,
        default: '_blank'    
    },
    exact: {
        type: Boolean,
        default: false,
    },
    activeClass: String,
    exactActiveClass: String,
};

export const useRoutable = (props) => {
    const tag = props.to ? 'router-link' : props.href ? 'a' : null;
    const componentProps = computed(() => {
        if (props.to)
            return { to: props.to }

        if (props.href)
            return { href: props.href }

        return {}
    });
    const routeData = props;

    return {
        tag,
        componentProps,
        routeData,
    }

};