# 🎹🎹🎹 Claviature.js 🎹🎹🎹

Hey there! With this JavaScript library, you can easily
create a musical keyboard on your web page.

## 🎉 Awesome! How does it work?

1. Add the `keyboard.css` and the `claviature.js` to your HTML page:

```
<link rel="stylesheet" type="text/css" href="keyboard.css">
<script src="claviature.js"></script>
```

2. Add an empty `<div>` element to your page. It will serve as the container element:

```
<div id="piano-container"></div>
```

3. Now, you can call `CLAVIATURE.create()`, and pass some options to it:

```
CLAVIATURE.create({
  container_id: "piano-container",
  showLabels: true,
  onactivate: function(key, note){
    console.log("Key down: " + note);
  },
  ondeactivate: function(){
    console.log("Key up: " + note);
  },
  start: 27,
  end: 75,
  zoom: 150
});
```

## 🔧 API

### .create(options)

Creates the claviature.

#### container_id

Type: `string`

The id of the container element.

#### showLabels

Type: `boolean`

Default: `false`

Render key labels. By default, these are the note names of the keys.

#### onactivate

Type: `function`

Callback that is fired when a key is activated.

#### ondeactivate

Type: `function`

Callback that is fired when a key is activated.

#### start

Type: `number`

Default: `0`

The first key to render. Minimum is `0`.

#### end

Type: `number`

Default: `87`

The last key to render. Maximum is `87`.

#### zoom

Type: `number`

Default: `120`

How big the keyboard will be.
