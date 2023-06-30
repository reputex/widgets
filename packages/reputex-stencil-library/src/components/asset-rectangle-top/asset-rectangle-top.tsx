import { Component, h } from '@stencil/core';

@Component({
  tag: 'asset-rectangle-top',
  shadow: true,
})
export class AssetRectangleTop {
  render() {
    return (
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="20" rx="6" fill="#61626A" />
      </svg>
    );
  }
}
