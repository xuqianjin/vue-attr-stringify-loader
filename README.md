# vue-attr-stringify-loader

## Example

Converts

```html
<template>
  <div :data-bb="{ dd: 1 }">sdsfs</div>
</template>
```

(roughly) to

```html
<template>
  <div :data-bb="JSON.stringify({ dd: 1 })">sdsfs</div>
</template>
```

### options

`options` must be object.

```javascript
{
  "attr":['data-bb']
}
```
