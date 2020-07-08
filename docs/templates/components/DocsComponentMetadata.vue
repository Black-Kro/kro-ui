<template>
    <kro-surface :raised="false" :padded="false">
        <div class="metadata-tabs flex flex-row">
            <div @click="metadata.props && select(0)" :class="{ 'isSelected': selected === 0 }" :disabled="!metadata.props" class="flex-1 flex align-middle justify-center p-4 cursor-pointer"><kro-icon class="mr-2" icon="settings" />Props</div>
            <div @click="metadata.events && select(1)" :class="{ 'isSelected': selected === 1 }" :disabled="!metadata.events" class="flex-1 flex align-middle justify-center p-4 cursor-pointer"><kro-icon class="mr-2" icon="flash" />Events</div>
            <div @click="metadata.slots && select(2)" :class="{ 'isSelected': selected === 2 }" :disabled="!metadata.slots" class="flex-1 flex align-middle justify-center p-4 cursor-pointer"><kro-icon class="mr-2" icon="package-down" />Slots</div>
            <div @click="metadata.css && select(3)" :class="{ 'isSelected': selected === 3 }" :disabled="!metadata.css" class="flex-1 flex align-middle justify-center p-4 cursor-pointer"><kro-icon class="mr-2" icon="palette" />CSS</div>
        </div>

        <div v-if="selected === 0">
            <div @click="copyProp(prop)" class="prop-card" v-for="prop in metadata.props" :key="prop.name">
                <div class="flex">
                    <span class="flex-1 prop-card__name">{{prop.name}}</span>
                    <span class="bubble">type: {{prop.type}}</span>
                    <!-- <span class="bubble">accepted values: {{prop.values}}</span> -->
                    <span class="bubble">default: {{prop.default}}</span>
                </div>
                <div class="description">{{prop.description}}</div>
            </div>
        </div>
        <div v-if="selected === 1">
            <div @click="copyEvent(event)" class="prop-card" v-for="event in metadata.events" :key="event.name">
                <div class="flex">
                    <span class="flex-1 prop-card__name">{{event.name}}</span>
                </div>
                <div class="description">{{event.description}}</div>
            </div>
        </div>
        <div v-if="selected === 2">
            <div @click="copySlot(slot)" class="prop-card" v-for="slot in metadata.slots" :key="slot.name">
                <div class="flex">
                    <span class="flex-1 prop-card__name">{{slot.name}}</span>
                    <span class="bubble">parameters: {{slot.props.join(', ')}}</span>
                </div>
                <div class="description">{{slot.description}}</div>
            </div>
        </div>
        <div v-if="selected === 3">
            CSS
            {{selected}}
        </div>

        <!-- Component Metadata Here
        {{metadata.props}} -->
    </kro-surface>
</template>

<script>
    import { ref } from 'vue';
    import { useClipboard } from '@vueuse/core';

    export default {
        props: {
            metadata: Object
        },
        setup() {
            const { copy } = useClipboard();
            const selected = ref(0);

            const select = (index) => {
                selected.value = index;
            }

            const copyProp = (prop) => { copy(`${prop.name === 'v-model' ? '' : ':' }${prop.name}=""`); };
            const copyEvent = (prop) => { copy(`${prop.name}=""`); };
            const copySlot = (prop) => { copy(`${prop.name}${ (!!prop.props && prop.props.length > 0) ? `="{ ${prop.props.join(', ')} }"` : '' }`); };

            return {
                selected,
                select,
                copyProp,
                copyEvent,
                copySlot
            }
        }
    }
</script>

<style lang="scss">

    .metadata-tabs {

        border-bottom: 1px solid var(--kro-divider);
        overflow: auto;
        -webkit-overflow-scrolling: touch;

        [disabled="true"] {
            color: var(--kro-foreground-disabled);
            cursor: default;
        }

        .isSelected {
            color: var(--kro-primary);
        }

    }

    .data-table {

        
        thead {
            color: var(--kro-foreground-secondary);
            font-size: 0.875rem;

            text-align: left;
            border: none;
            // background: var(--kro-background);

            tr { border: none; }
            th { border-left: none; border-right: none; border-top: none; }
        }

        tbody {
            tr {
                border: none;
            }
            tr:hover {
                border-color: var(--kro-divider);
                background: rgba(0, 0, 0, .12);
                cursor: pointer;
            }

            td {
                vertical-align: top;
                padding: 0.5rem 1rem;
                border: none;
                font-size: 0.875rem;
                color: var(--kro-foreground-secondary);
    
                &:first-child {
                    color: var(--kro-foreground);
                    font-weight: 500;
                }
            }
        }
    }

    .prop-card {
        &:hover {
            background: rgba(0, 0, 0, .12);
        }

        padding: 1rem;
        cursor: pointer;

        .prop-card__name {
            color: var(--kro-primary);
        }

        .description {
            font-size: 0.875rem;
            color: var(--kro-foreground-secondary);
        }
    }

    .bubble {
        padding: 0.25rem 0.5rem;
        background: var(--kro-background);
        color: var(--kro-foreground-secondary);
        margin-left: 0.5rem;
        font-size: 0.75rem;
        border-radius: 0.25rem;
    }

</style>