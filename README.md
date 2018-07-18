# lookbook

@steveruizok

A very small environment for previewing components and their props. A lot like Storybook, but micro.

Built with StencilJs.

<div style="text-align:center">
<img src="/readme/demo_gif.gif">
</div>

[On NPM](https://www.npmjs.com/package/st-lookbook)

[Example Here](http://stencil-projects.firebaseapp.com).

## Usage

Add to your project using `npm install st-lookbook` or by including the following in your HTML head.

`<script src='https://unpkg.com/st-lookbook@0.0.2/dist/app.js'></script>`

The package comes with two components: `lb-look` and `lb-book`. 

### lb-look

The `lb-look` component previews a component and provides knobs for modifying that component's props. 

It accepts one prop: a Function that returns either JSX or a string (of HTML).

 Prop | Type | Description 
--- | --- | ---
 `look` | `Function` | A function that sets knobs and returns JSX (or HTML as a string). |
 
This look function should look similar to this:

```
function test(look) {
		let label = look.text("Label", "No problem");

		return (<div>{label}</div>);
	}
```

Or as a string:

```javascript
function test(look) {
		let label = look.text("Label", "No problem");

		return (`<div>${label}</div>`);
	}
```

The `lb-look` component passes itself to the function as an argument. The methods `text`, `boolean`, `array`, and `range` are available for setting knobs.

### lb-book

The `<lb-book/>` component generates several `lb-look` instances and organises them into a list. It takes an object of look functions (normally, an exports object). 

 Prop | Type | Description 
--- | ---| ---
 `looks` | `Object` | An object of functions.

**Example**

```jsx
import * as looks from "./looks.tsx"

...

render(
  return(
   <lb-book looks={looks} />
  );
);
```

## Example in HTML

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
	<meta charset="utf-8">
	<title>Lookbook</title>
</head>

<script src='https://unpkg.com/st-lookbook@0.0.2/dist/app.js'></script>
<link rel="stylesheet" href='https://unpkg.com/st-lookbook@0.0.2/dist/app.css'>

</script>


<body>
	<lb-look id="look"></lb-look>
</body>

<script>
	function test(look) {
		let label = look.text("Label", "No problem");

		return (`<div>${label}</div>`);
	}

	document.getElementById("look").look = test;
</script>

</html>
```

