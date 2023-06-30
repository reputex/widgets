import { Component, h, Prop, State} from '@stencil/core';
import ReputeXSdk from "@reputex/sdk";
import moment from 'moment';


// @Component({
//   tag: 'pending-state',
// })

// @Component({
//   tag: 'score-loaded',
// })

@Component({
  tag: 'reputex-widget',
  styleUrl: 'reputex-widget.css',
  shadow: true,
})
export class ReputexWidget { 

  @Prop() visibility: boolean
  @Prop() userAddress: string
  @Prop() apiAccessKey: string
  @Prop() apiSecretKey: string
  @Prop() mode: boolean

  @State() showScoreComponent: boolean = false;
  @State() errorMessage: string = '';
  @State() score: number = 0;
  @State() timeStamp?: Date;
  @State() formattedDate: string;
// private formattedDate: string = '';

  // @State() userAddress: string = '';
  // private apiAcessKey: string = 'your-api-access-key';
  // private apiSecretKey: string = 'your-api-secret-key';
  // private formattedDate: string = '';

  // @Watch('timeStamp')
  //   FormattedDate(newTimeStamp: Date | undefined) {
  //   if (newTimeStamp) {
  //     this.timeStamp.toLocaleDateString()
  //   }
  // }
  
  

  validateDomain(value: string): boolean {
    if (/[a-z0-9-]+\.(?:eth)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (
      /[a-z0-9-]+\.(?:crypto)(?:\.[a-z]{2,3})?/.test(value) === true
    ) {
      return true;
    } else if (/[a-z0-9-]+\.(?:nft)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (
      /[a-z0-9-]+\.(?:wallet)(?:\.[a-z]{2,3})?/.test(value) === true
    ) {
      return true;
    } else if (/[a-z0-9-]+\.(?:zil)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (
      /[a-z0-9-]+\.(?:blockchain)(?:\.[a-z]{2,3})?/.test(value) === true
    ) {
      return true;
    } else if (/[a-z0-9-]+\.(?:dao)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:888)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:x)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else {
      return false;
    }
  }

  isAddress(address: string): boolean {
    if (address.length != 42) {
      // The address has to be a length of 42 characters
      return false;
    } else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      // check if it has the basic requirements of an address
      return false;
    } else if (
      /^(0x)?[0-9a-f]{40}$/.test(address) ||
      /^(0x)?[0-9A-F]{40}$/.test(address)
    ) {
      // If it's all small caps or all all caps, return true
      return true;
    } else {
      // Fallback to true instead of checksum since API will take care of an issue.
      return true;
    }
  }

  async fetchScore() {
    try {
      if (
        !this.validateDomain(this.userAddress.trim()) &&
        !this.isAddress(this.userAddress.trim())
      ) {
        this.showScoreComponent = false;
        this.errorMessage = 'Invalid Input';
        return;
      }

      const reputeX = new ReputeXSdk({
        accessKey: this.apiAccessKey,
        secretKey: this.apiSecretKey,
      });

      const scoreData = await reputeX.score.getBreakdown(this.userAddress, {
        compactBreakdown: true,
      });

      if (
        scoreData.success &&
        scoreData.data?.reputeXScore != undefined &&
        scoreData.data?.reputeXScore != null
      ) {
        this.score = scoreData.data?.reputeXScore ?? 550;
        this.timeStamp = (scoreData.data?.lastUpdated ?? new Date());
        this.showScoreComponent = true;
      } else {
        this.showScoreComponent = false;
        if (!scoreData.success) {
          this.errorMessage = 'Score does not exist for the given address';
        } else {
          this.errorMessage = 'Could not fetch the score';
        }
      }
    } catch (error) {
      this.showScoreComponent = false;
      this.errorMessage = 'Could not fetch the score';
    }
  }

  
  componentWillLoad() {
    this.fetchScore();
    this.formatDate();
  }

  formatDate() {
    const date = moment(this.timeStamp);
    const formatted = date.format('MMMM DD, YYYY');
    this.formattedDate = formatted;
  }


  render() {
    return (
      <div>
    {this.visibility &&
      (this.showScoreComponent ? (
        <score-loaded
          reputeXScore={Math.trunc(this.score)}
          userAddress={this.userAddress}
          lastUpdated={this.formattedDate}
          mode={this.mode}
        ></score-loaded>
      ) : (
        <pending-state
          body-message={this.errorMessage}
          mode={this.mode}
        ></pending-state>
      ))}
  </div>
    );
  }
}