import { newSpecPage } from '@stencil/core/testing';
import { FireButton } from '../fire-button';

describe('fire-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FireButton],
      html: `<fire-button></fire-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fire-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fire-button>
    `);
  });
});
