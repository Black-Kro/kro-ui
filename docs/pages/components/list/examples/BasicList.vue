<template>
    <kro-surface :raised="false" :padded="false">

        <kro-item-group>
            <div>
                <div v-for="n in 3" :key="n">
                    <kro-item v-slot="{ isActive, toggle }">
                        <kro-button :primary="isActive" @click="toggle">Item {{n}}</kro-button>
                    </kro-item>
                </div>
            </div>
        </kro-item-group>

        <!-- <kro-item v-slot="{ isActive, toggle }">
            <button @click="toggle">{{isActive}}</button>
        </kro-item>

        <kro-item-group>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
        </kro-item-group> -->
    </kro-surface>
</template>