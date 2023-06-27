import { Component, Prop, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'pending-state',
  styleUrl: 'pending-state.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class PendingState {
  @Prop() bodyMessage: string;
  @Prop() mode: boolean;
  @Prop() circleRight = 'circleRight.svg';
  @Prop() rectangleTop = 'rectangleTop.svg';
  @Prop() rectangleLeft = 'rectangleLeft.svg';
  @Prop() rectangleMiddle = 'rectangleMiddle.svg';
  @Prop() rectangleRight = 'rectangleRight.svg';
  @Prop() line = 'line.svg';

  render() {
    const modeColor = this.mode ? 'bg-[#1C1E29]' : 'bg-white';
    const textColor = this.mode ? 'text-white' : 'text-black';
    const lineColor = this.mode ? '#fff' : 'black';
    const CircleRight = getAssetPath(`./assets/${this.circleRight}`);
    const RectangleTop = getAssetPath(`./assets/${this.rectangleTop}`);
    const RectangleLeft = getAssetPath(`./assets/${this.rectangleLeft}`);
    const RectangleMiddle = getAssetPath(`./assets/${this.rectangleMiddle}`);
    const RectangleRight = getAssetPath(`./assets/${this.rectangleRight}`);
    const Line = getAssetPath(`./assets/${this.line}`);
    return (
      <div>
        <div class="flex justify-center items-center h-screen">
          <div class="outer-div-p">
            <div class={`flex flex-col relative rounded-md  px-4 py-3 h-full mx-auto ${modeColor} ${textColor} `}>
              <div class="flex w-[180px] h-[55px] m-5 ml-2 rounded-[106px] bg-[#C5C5C5]">
                <div class="circleRight"><img src={CircleRight} alt="circleRight" /></div>
                <div class="rectangleTop"><img src={RectangleTop} alt="rectangleTop" width={80} /></div>
                
              </div>

              <img src={Line} alt="line" class={`w-[170px] ml-4 ${lineColor}`}  />

              {/* <!-- address display --> */}
              <div>
                <p class="whitespace-normal truncate p-5 text-sm">{this.bodyMessage}</p>
              </div>
              <div class="flex ml-2">
                <div class="rectangleLeft"><img src={RectangleLeft} alt="rectangleLeft"  /></div>
                <div class="rectangleMiddle"><img src={RectangleMiddle} alt="rectangleMiddle"  /></div>
                <div class="rectangleRight"><img src={RectangleRight} alt="rectangleRight" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
