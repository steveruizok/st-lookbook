import { TestWindow } from "@stencil/core/testing";
import { LbRoot } from "./lb-root";

describe("lb-root", () => {
	it("should build", () => {
		expect(new LbRoot()).toBeTruthy();
	});

	describe("rendering", () => {
		let element: HTMLLbRootElement;
		let testWindow: TestWindow;
		beforeEach(async () => {
			testWindow = new TestWindow();
			element = await testWindow.load({
				components: [LbRoot],
				html: "<lb-root></lb-root>"
			});
		});
	});
});
