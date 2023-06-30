import { Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'pending-state',
  styleUrl: 'pending-state.css',
  shadow: true,
})
export class PendingState {
  @Prop() bodyMessage: string;
  @Prop() mode: boolean;

  render() {
   
    const modeColor = this.mode ? 'bg-[#1C1E29]' : 'bg-white';
    const textColor = this.mode ? 'text-white' : 'text-black';
    const lineColor = this.mode ? '#fff' : 'black';
    return (
      <div>
        <div class="flex justify-center items-center h-screen" >
          <div class="outer-div-p">
            <div class={`flex flex-col relative rounded-md  px-4 py-3 h-full mx-auto ${modeColor} ${textColor} `}>
              <div class="flex w-[180px] h-[55px] m-5 ml-2 rounded-[106px] bg-[#C5C5C5]">
                <div class="circleRight">
                  <asset-circle-right></asset-circle-right>
                  </div>
                <div class="rectangleTop">
                  <asset-rectangle-top></asset-rectangle-top>
                  </div>
              </div>

              <asset-line class={`w-[170px] ml-4 ${lineColor}`}></asset-line>

              {/* <!-- address display --> */}
              <div>
                <p class="whitespace-normal truncate p-5 text-sm text-left">{this.bodyMessage}</p>
              </div>
              <div class="flex ml-2">
                <div class="rectangleLeft">
                <asset-rectangle-left ></asset-rectangle-left>
                  </div>
                <div class="rectangleMiddle">
                  <asset-rectangle-middle ></asset-rectangle-middle>
                  </div>
                <div class="rectangleRight">
                <asset-rectangle-right ></asset-rectangle-right>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
