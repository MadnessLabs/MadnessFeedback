import { flush, render } from '@stencil/core/testing';
import { MadnessFeedback } from './madness-feedback';

describe('madness-feedback', () => {
  it('should build', () => {
    expect(new MadnessFeedback()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [MadnessFeedback],
        html: '<madness-feedback></madness-feedback>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).toEqual('Your new madness-feedback component');
    });
  });
});