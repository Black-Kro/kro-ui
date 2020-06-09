# Button Groups

`kro-button-group` is a component that groups button into a single element that contains multiple buttons.

## Usage

<style>
    .buttons-demo > * {
        margin: 0 1rem 1rem 0 !important;
    }
</style>

<div class="buttons-demo">
    <kro-button-group>
        <kro-button>Cut</kro-button>
        <kro-button>Copy</kro-button>
        <kro-button>Paste</kro-button>
    </kro-button-group>
    <kro-button-group>
        <kro-button>Profile</kro-button>
        <kro-button><kro-icon icon="settings"></kro-icon></kro-button>
    </kro-button-group>
</div>

```html
<kro-button-group>
    <kro-button>Cut</kro-button>
    <kro-button>Copy</kro-button>
    <kro-button>Paste</kro-button>
</kro-button-group>
<kro-button-group>
    <kro-button>Profile</kro-button>
    <kro-button><kro-icon icon="settings"></kro-icon></kro-button>
</kro-button-group>
```