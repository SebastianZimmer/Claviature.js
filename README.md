# 🎹🎹🎹 Claviature.js 🎹🎹🎹

Hello dear friend of the web! with this JavaScript library, you can easily
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
  container_id: "piano_container",
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

## 🔧 Options

### .create(options)

Creates the claviature.

#### container_id

Type: `string`

The id of the container element.

### showLabels

Type: `boolean`
Default: `false`

Render key labels. By default, these are the note names of the keys.

### onactivate

Type: `function`

Callback that is fired when a key is activated.

### ondeactivate

Type: `function`

Callback that is fired when a key is activated.

### start

Type: `number`

The first key to render.

### end

Type: `number`

The last key to render.

### zoom

Type: `number`
Default: `100`

How big the keyboard will be.
