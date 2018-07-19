import { TestWindow } from "@stencil/core/testing";
import { LbLook } from "./lb-look";

describe("lb-look", () => {
	it("should build", () => {
		expect(new LbLook()).toBeTruthy();
	});

	describe("rendering", () => {
		let element: HTMLLbLookElement;
		let testWindow: TestWindow;
		beforeEach(async () => {
			testWindow = new TestWindow();
			element = await testWindow.load({
				components: [LbLook],
				html: "<lb-look></lb-look>"
			});
		});
	});
});
