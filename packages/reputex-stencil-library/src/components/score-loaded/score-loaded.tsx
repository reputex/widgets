import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'score-loaded',
  styleUrl: 'score-loaded.css',
  shadow: true,
})
export class ScoreLoaded {
  @Prop() mode: boolean;
  @Prop() reputeXScore: number;
  @Prop() userAddress: string;
  @Prop() lastUpdated: string;
  @Prop() isDid: boolean;

  getAddressForExplorer() {
    if (!this.isDid) return this.userAddress;
    else {
      const splitArr = this.userAddress.split(':');
      return splitArr[splitArr.length - 1];
    }
  }

  getAddressForDisplay() {
    if (!this.isDid) return `${this.userAddress.slice(0, 10)}...${this.userAddress.slice(-4)}`;
    else return `${this.userAddress.slice(0, 19)}...${this.userAddress.slice(-2)}`;
  }

  render() {
    const modeColor = this.mode ? 'bg-[#1C1E29]' : 'bg-white';
    const textColor = this.mode ? 'text-white' : 'text-black';
    const lineColor = this.mode ? '#fff' : 'black';

    return (
      <div class="flex justify-center items-center h-screen">
        <div class="outer-div">
          <div class={`flex flex-col relative rounded-md px-4 py-3 h-full mx-auto  ${modeColor} ${textColor} `}>
            {/* score display */}
            <div class="score-div flex-row space-x-4 ">
              <div class="m-1">
                <asset-reputex-logo></asset-reputex-logo>
              </div>
              <p class=" text-[28px] mt-2 p-1 text-white">{this.reputeXScore}</p>
              <div class="mt-5 ">
                <a href="https://reputex.io/" target="_blank" rel="noreferrer">
                  <asset-maximize></asset-maximize>
                </a>
              </div>
            </div>

            <asset-line class={`w-[170px] ml-4 ${lineColor}`}></asset-line>

            {/* address display */}
            <div class="p-4 text-left">
              <p class="text-left"> {this.getAddressForDisplay()}</p>
              <p class="text-[#9B9797] mt-1 text-left">{this.lastUpdated}</p>
            </div>

            <div class="mb-3 flex items-center ml-2">
              <a href={`https://reputex.io/explorer?address=${this.getAddressForExplorer()}`} target="_blank" rel="noreferrer">
                <button type="button" class={`rounded-3xl p-0.5 cursor-pointer w-60 h-12 mt-1 ml-1 ${modeColor} ${textColor} border-2 border-[#9B9797]`}>
                  Try the Explorer
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
