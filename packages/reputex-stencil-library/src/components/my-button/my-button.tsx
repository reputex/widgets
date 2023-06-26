import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() label: string;

  render() {
    return (
      <button
        style={{
          background: 'linear-gradient(90deg, #00FFFF 0%, #8A76FF 45%, #FF00FF 100%)',
        }}
        class="px-4 py-2 text-white bg-red-400 cursor-pointer rounded-3xl"
      >
        {this.label}
      </button>
    );
  }
}
