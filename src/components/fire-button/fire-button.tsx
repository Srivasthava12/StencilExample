import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'fire-button',
  styleUrl: 'fire-button.scss',
  shadow: true,
})
export class FireButton {
  @Prop() text: string;

  render() {
    return (
      <button>Test</button>
    );
  }
}
