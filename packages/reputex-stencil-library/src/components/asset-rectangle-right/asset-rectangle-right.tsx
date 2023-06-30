import { Component, h } from '@stencil/core';

@Component({
  tag: 'asset-rectangle-right',
  shadow: true,
})
export class AssetRectangleRight {
  render() {
    return (
      <svg width="33" height="44" viewBox="0 0 33 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="33" height="44" rx="10" fill="#61626A" />
      </svg>
    );
  }
}
