# Converse Headless (ES)

Compatible `@converse/headless` with ES modules.

The final file, is a bundle with all the dependencies except the translation files.

### Install

    npm i ubermanu/converse-headless-es

### Usage

Load converse using the legacy event:

```html

<script>
    window.addEventListener("converse-loaded", (ev) => {
        const { converse } = ev.detail;
        // ...
    })
</script>
```

Load converse using ES import:

```html

<script type="module">
    import converse from "./dist/converse-headless.es.js";
    // ...
</script>
```
