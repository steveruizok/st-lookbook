import { Component, Prop, Element } from "@stencil/core";

@Component({
  tag: "ok-button",
  styleUrl: "ok-button.css"
})
export class OkButton {
  @Prop() label: string = "Get started";
  @Prop() ghost: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() flag: string = null;
  @Element() elm: HTMLElement;

  render() {
    let flag;

    this.elm.classList.toggle("ghost", this.ghost);
    this.elm.classList.toggle("disabled", this.disabled);

    if (this.flag) {
      flag = <div class="flag">{this.flag}</div>;
    }

    return (
      <div>
        {flag}
        <p>{this.label}</p>
      </div>
    );
  }
}
