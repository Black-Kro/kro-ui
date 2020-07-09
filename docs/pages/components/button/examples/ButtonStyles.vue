<template>
    <div class="grid grid-cols-3 gap-1">
        <div class="grid items-center content-center justify-center gap-4">
            <kro-button outline>Outline</kro-button>
            <kro-button outline primary>Outline Primary</kro-button>
            <kro-button outline primary icon="settings">Outline Primary w/ Icon</kro-button>
        </div>
        <div class="grid items-center content-center justify-center gap-4">
            <kro-button>Normal Button</kro-button>
            <kro-button raised>Raised Button</kro-button>
            <kro-button raised primary>Raised Primary Button</kro-button>
        </div>
        <div class="grid items-center content-center justify-center gap-4">
            <kro-button to="/components/button-group">Interal Link</kro-button>
            <kro-button primary raised href="https://github.com">External Link</kro-button>
            <kro-button outline hide-external-icon icon="github" href="https://github.com">External Link w/ Icon</kro-button>
        </div>
    </div>
</template>
