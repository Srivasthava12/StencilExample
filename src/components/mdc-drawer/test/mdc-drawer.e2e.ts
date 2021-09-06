import { newE2EPage } from '@stencil/core/testing';

describe('mdc-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mdc-drawer></mdc-drawer>');

    const element = await page.find('mdc-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
