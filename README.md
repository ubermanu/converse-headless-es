# Converse Headless (ES)

Compatible `@converse/headless` with ES modules.

### Install

    npm i @ubermanu/converse-headless-es

### Usage

Load converse using the legacy event:

```html

<script>
    window.addEventListener('converse-loaded', (ev) => {
        const { converse } = ev.detail
        // ...
    })
</script>
```

Load converse using ES import:

```html

<script type="module">
    import converse from "./dist/converse-headless.js"
    // ...
</script>
```
