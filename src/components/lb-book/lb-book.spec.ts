import { TestWindow } from '@stencil/core/testing';
import { LbBook } from './lb-book';

describe('lb-book', () => {
  it('should build', () => {
    expect(new LbBook()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLbBookElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LbBook],
        html: '<lb-book></lb-book>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
