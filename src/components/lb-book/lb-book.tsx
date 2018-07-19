import { Component, Prop, State } from "@stencil/core";

@Component({
	tag: "lb-book",
	styleUrl: "lb-book.css"
})
export class LbBook {
	@Prop() looks: Object = {};
	@State() current: string;

	links = [];
	look_components = {};
	current_component;

	componentWillLoad() {
		if (!this.looks) {
			this.look_components = [<div>Feed me looks.</div>];
			return;
		}

		let keys = Object.keys(this.looks);

		keys.forEach(key => {
			let component = (
				<lb-look
					ref={el => {
						this.current_component = el;
					}}
					look={this.looks[key]}
				/>
			);

			let link = (
				<div
					onClick={() => {
						this.current = key;
					}}
				>
					<a href={"#" + key}>{key}</a>
				</div>
			);

			this.links.push(link);
			this.look_components[key] = component;
		});

		this.current = window.location.hash
			? window.location.hash.slice(1)
			: keys[0];
	}

	componentDidUpdate() {}

	render() {
		let look = this.look_components[this.current];

		return [
			<div class="looks-list">{this.links}</div>,
			<div class="look">{look}</div>
		];
	}
}
