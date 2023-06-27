import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'score-loaded',
  styleUrl: 'score-loaded.css',
  shadow: true,
  assetsDirs: ['assets'],
})

export class ScoreLoaded {
  @Prop() mode: boolean;
  @Prop() reputeXScore: number;
  @Prop() userAddress: string;
  @Prop() lastUpdated: string;
  @Prop() reputeXLogo = "reputexLogo.svg";
  @Prop() maximizeButton = "maximize.svg";
  @Prop() line= "line.svg";

  render() {
    const modeColor = this.mode ? 'bg-[#1C1E29]' : 'bg-white';
    const textColor = this.mode ? 'text-white' : 'text-black';
    // const lineColor = this.mode ? '#fff' : 'black';
    const ReputeXLogo = getAssetPath(`./assets/${this.reputeXLogo}`)
    const MaximizeButton = getAssetPath(`./assets/${this.maximizeButton}`)
    const Line = getAssetPath(`./assets/${this.line}`)

    return (
      <div class="flex justify-center items-center h-screen">
        <div class="outer-div">
          <div class={`flex flex-col relative rounded-md px-4 py-3 h-full mx-auto  ${modeColor} ${textColor} `}>
            {/* score display */}
            <div class="flex w-[180px] h-[62px]  m-4 rounded-[106px] bg-gradient-to-r from-[#00FFFF] via-[#8A76FF] to-[#FF00FF] text-white">
              <div class="m-1">
               <img src={ReputeXLogo}/>
              </div>
              <p class=" text-[28px] mt-1 ml-1 font-grotesk p-1 text-white">{this.reputeXScore}</p>
              <div class="mt-5 ml-2">
                <a href="https://reputex.io/" target="_blank" rel="noreferrer">
                <img src={MaximizeButton}/>
                </a>
              </div>
            </div>

            {/* <Line class="w-[170px] ml-4" /> */}
            <img src={Line}/>

            {/* address display */}
            <div class="p-4">
              <p>{this.userAddress}</p>
              <p class="text-[#9B9797]">{this.lastUpdated}</p>
            </div>

            <div class="mt-3 ml-3">
              {/* TODO: Update the url */}
              <a href={`http://localhost:3000/explorer?address=${this.userAddress}`}>
                <button
                  type="button"
                  class={`rounded-3xl relative inline-flex items-center font-grotesk justify-center p-0.5 cursor-pointer w-60 h-12 mt-1 ml-1 ${modeColor} ${textColor} border-2 border-[#9B9797]`}
                >
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
