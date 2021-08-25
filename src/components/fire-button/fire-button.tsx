import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fire-button',
  styleUrl: 'fire-button.css',
  shadow: true,
})
export class FireButton {
  @Prop() text: string;

  render() {
    return <button type="button">{this.text}</button>;
  }
}
