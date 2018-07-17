# component-preview

@steveruizok

A very small environment for previewing components and their props. A bit like Storybook, but micro. Novella?

Built with StencilJs.

<div style="text-align:center">
<img src="/readme/demo_gif.gif">
</div>

[Example Here](http://stencil-projects.firebaseapp.com).

## Usage

This project has two webcomponents: `ok-preview` and `ok-preview-book`. 

### Ok-Preview

The `ok-preview` previews a component and provides knobs for modifying that component's props. 

It accepts three props.

 Prop | Type | Description 
--- | --- | ---
 `tag` | `string` | The tag of the component you'd like to preview. |
 `knobs` | `Object` | An object containing the knobs to provide. (optional) |
 `notes` | `string` | Any notes to display with this component's preview. (optional) |

For the `knobs` object, include key value pairs, where the key is the name of the prop that this knob modifies, and the value is an initial value for that prop. The type of this initial value determines the input for this knob in the rendered component. Valid types for knobs are currently limited to `string`, `boolean`, and `Array<string>`.

**Example**

```jsx
render(
  let knobs = {
    label: "Click here!"
    ghost: false,
    disabled: false
  }
  
  return(
    <ok-preview tag="my-button" knobs={knobs} notes="This is my button." />
    );
);
```

### Ok-Preview-Book

The `ok-preview-book` generates several `ok-preview` instances, based on its `components` prop, and provides an interface for selecting between those previews.

 Prop | Type | Description 
--- | ---| ---
 `components` | `Array<Object>` | An array of objects with `tag`, `knobs`, and `notes` properties. 

**Example**

```jsx
render(
  let buttonOptions = {
        tag: "ok-button",
        knobs: {
          label: "Click here!",
          ghost: true,
          disabled: false,
          flag: [null, "4", "5", "7"]
        },
        notes: "This is a classic button."
      };

  let toggleOptions = {
        tag: "ok-toggle",
        knobs: {
          disabled: false
        },
        notes: "This is something else."
      };

  return(
   <ok-preview-book components={[buttonOptions, toggleOptions]} />
  );
);
```
   
