import { Component } from "@stencil/core";
import * as looks from "./looks";

@Component({
  tag: "lb-root",
  styleUrl: "lb-root.css"
})
export class LbRoot {
  render() {
    return (
      <main>
        <lb-book looks={looks} />
      </main>
    );
  }
}
