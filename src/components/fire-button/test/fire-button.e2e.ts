import { newE2EPage } from '@stencil/core/testing';

describe('fire-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fire-button></fire-button>');

    const element = await page.find('fire-button');
    expect(element).toHaveClass('hydrated');
  });
});
