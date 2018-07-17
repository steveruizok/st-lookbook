import { Component, Prop, Element } from "@stencil/core";

@Component({
  tag: "ok-toggle",
  styleUrl: "ok-toggle.css"
})
export class OkToggle {
  @Prop() disabled: boolean;
  @Element() elm: HTMLElement;

  render() {
    this.elm.classList.toggle("disabled", this.disabled);

    return <p>Hello OkToggle!</p>;
  }
}
