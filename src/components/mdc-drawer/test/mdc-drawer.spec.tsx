import { newSpecPage } from '@stencil/core/testing';
import { MdcDrawer } from '../mdc-drawer';

describe('mdc-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MdcDrawer],
      html: `<mdc-drawer></mdc-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <mdc-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mdc-drawer>
    `);
  });
});
