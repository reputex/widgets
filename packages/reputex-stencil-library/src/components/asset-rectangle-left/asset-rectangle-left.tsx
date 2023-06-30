import { Component, h } from '@stencil/core';

@Component({
  tag: 'asset-rectangle-left',
  shadow: true,
})
export class AssetRectangleLeft {
  render() {
    return (
      <svg width="82" height="44" viewBox="0 0 82 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="82" height="44" rx="10" fill="#61626A" />
      </svg>
    );
  }
}
