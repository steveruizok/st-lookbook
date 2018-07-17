import { TestWindow } from '@stencil/core/testing';
import { OkToggle } from './ok-toggle';

describe('ok-toggle', () => {
  it('should build', () => {
    expect(new OkToggle()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLOkToggleElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OkToggle],
        html: '<ok-toggle></ok-toggle>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
