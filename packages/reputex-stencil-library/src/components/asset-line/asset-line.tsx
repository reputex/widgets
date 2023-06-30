import { Component, h } from '@stencil/core';

@Component({
  tag: 'asset-line',
  shadow: true,
})
export class AssetLine {
  render() {
    return (
      <svg width="248" height="2" viewBox="0 0 248 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line opacity="0.2" y1="1.47157" x2="247.306" y2="1.47157" stroke="white" stroke-width="1.05686" />
      </svg>
    );
  }
}
