export function button(preview) {
	preview.name = "Example";
	const text = preview.text("Text", "Get started");
	const ghost = preview.boolean("Ghost", false);
	const flag = preview.select("Flag", ["1", "2", "3"]);
	const range = preview.range("!s", 1, 0, 5);
	preview.note("This is a note about this button", "general");

	let points = "";

	for (let i = 0; i < range; i++) {
		points += "!";
	}
	return <ok-button label={text + points} ghost={ghost} flag={flag} />;
}

export function look_2(preview) {
	const ghost = preview.boolean("Ghost", false);
	const greeting = preview.select("Greeting", [null, "Friendly", "Rude"]);

	let greet;

	switch (greeting) {
		case "Friendly":
			greet = <p>"Hello, friend."</p>;
			break;
		case "Rude":
			greet = (
				<p>
					"Oh, it's <b>you</b>. *sigh*"
				</p>
			);
			break;
	}

	return (
		<div>
			{greet}
			<ok-button label="Get started!" ghost={ghost} />
		</div>
	);
}

export function string(preview) {
	const text = preview.text("Text", "This look returns a string.");
	return `<p>${text}</p>`;
}

export function wide(preview) {
	const text = preview.text("Text", "Ok.");
	return <div class="wide">Hello world {text}</div>;
}
