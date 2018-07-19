import { Component, Prop, State } from "@stencil/core";

@Component({
	tag: "lb-look",
	styleUrl: "lb-look.css"
})
export class LbLook {
	@Prop() look: Function;
	@State() values: Object = {};
	inputs = [];
	knobs = [];
	notes = [];
	content;
	preview;

	// Set a value for the inputs
	setValue = (key, value) => {
		let change = {};
		change[key] = value;

		let newValues = Object.assign({}, this.values, change);
		this.values = newValues;
	};

	// get a value (existing or initial)
	getValue = (label: string, initial: any) => {
		if (this.values[label] === undefined) {
			this.values[label] = initial;
		}

		return this.values[label];
	};

	// Knobs

	// Add a knob
	addKnob = (label: string, input: any) => {
		this.knobs.push([<label class="label">{label}</label>, input]);
	};

	// Add a note
	addNote = (label: string, note: string) => {
		this.notes.push(
			<div class="note-container">
				<label class="label">{label}</label>
				<p class="note">{note}</p>
			</div>
		);
	};

	// Set a text knob
	text = (label: string, initial: string) => {
		const current = this.getValue(label, initial);

		const input = (
			<input
				id={label}
				type="text"
				class="knob-text"
				value={current}
				onInput={ev => {
					let target = ev.target as HTMLInputElement;
					let value = target.value;
					this.setValue(label, value);
				}}
			/>
		);

		this.addKnob(label, input);
		return current;
	};

	// Set a boolean knob

	boolean = (label: string, initial: string) => {
		const current = this.getValue(label, initial);

		const input = (
			<input
				class="knob-checkbox"
				id={label}
				checked={current}
				type="checkbox"
				onChange={ev => {
					let target = ev.target as HTMLInputElement;
					let value = target.checked;
					this.setValue(label, value);
				}}
			/>
		);

		this.addKnob(label, input);
		return current;
	};

	// sets a select knob
	select = (label: string, options: any[]) => {
		const current = this.getValue(label, options[0]);

		const input = (
			<select
				class="knob-select"
				id={label}
				onChange={ev => {
					let target = ev.target as HTMLSelectElement;
					let value = target.value;
					this.setValue(label, value);
				}}
			>
				{options.map(i => {
					return <option value={i}>{i}</option>;
				})}
			</select>
		);

		this.addKnob(label, input);
		return current;
	};

	// sets a range knob
	range = (
		label: string,
		initial: number,
		min: number,
		max: number,
		step: number = 1
	) => {
		const current = this.getValue(label, initial);

		const input = [
			<div class="knob-range">
				<input
					type="range"
					id={label}
					value={current}
					min={min}
					max={max}
					step={step}
					onInput={ev => {
						let target = ev.target as HTMLSelectElement;
						let value = target.value;
						this.setValue(label, value);
					}}
				/>
				<span class="label align-right">{current}</span>
			</div>
		];

		this.addKnob(label, input);
		return current;
	};

	note = (note: string, label: string) => {
		this.addNote(label, note);
	};

	// clear notes and knobs before update
	componentWillUpdate() {
		this.knobs = [];
		this.notes = [];
	}

	// Render
	render() {
		let stringContent;
		let content = this.look(this);

		if (typeof content === "string") {
			stringContent = h("div", { innerHTML: content });
			content = stringContent;
		}

		let notes;

		if (this.notes.length > 0) {
			notes = <div class="notes">{this.notes}</div>;
		}

		return [
			<div class="preview">{content}</div>,
			<div class="knobs">{this.knobs}</div>,
			notes
		];
	}
}
