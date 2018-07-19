import { Component } from "@stencil/core";
import * as looks from "../looks";

@Component({
	tag: "lb-root",
	styleUrl: "lb-root.css"
})
export class LbRoot {
	render() {
		return (
			<main class="narrow">
				<h3>st-lookbook</h3>
				<p>@steveruizok</p>
				<p>
					<code>npm i st-lookbook</code>
				</p>
				<lb-book looks={looks} />
			</main>
		);
	}
}
