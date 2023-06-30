import { Component, h, Prop, State } from '@stencil/core';
import ReputeXSdk from '@reputex/sdk';
import moment from 'moment';

@Component({
  tag: 'reputex-did-widget',
  styleUrl: 'reputex-did-widget.css',
  shadow: true,
})
export class ReputexDidWidget {
  @Prop() visibility: boolean;
  @Prop() userDid: string;
  @Prop() apiAccessKey: string;
  @Prop() apiSecretKey: string;
  @Prop() mode: boolean;

  @State() showScoreComponent: boolean = false;
  @State() errorMessage: string = 'score is being updated for this wallet';
  @State() score: number = 0;
  @State() timeStamp?: Date;
  @State() formattedDate: string;

  isAddress(address: string): boolean {
    if (address.length != 42) {
      // The address has to be a length of 42 characters
      return false;
    } else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      // check if it has the basic requirements of an address
      return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
      // If it's all small caps or all all caps, return true
      return true;
    } else {
      // Fallback to true instead of checksum since API will take care of an issue.
      return true;
    }
  }

  isDid(did: string): boolean {
    const splitArr = did.split(':');
    if (splitArr[0] != 'did') return false;
    else if (splitArr[1] != 'hid') return false;
    else if (!this.isAddress(splitArr[splitArr.length - 1])) return false;
    else return true;
  }

  async fetchScore() {
    try {
      if (!this.isDid(this.userDid.trim())) {
        this.showScoreComponent = false;
        this.errorMessage = 'Invalid Input';
        return;
      }

      const reputeX = new ReputeXSdk({
        accessKey: this.apiAccessKey,
        secretKey: this.apiSecretKey,
      });

      const scoreData = await reputeX.score.didGetBreakdown(this.userDid, {
        compactBreakdown: true,
      });

      if (scoreData.success && scoreData.data?.data.didScore.reputeXScore != undefined && scoreData.data?.data.didScore.reputeXScore != null) {
        this.score = scoreData.data?.data.didScore.reputeXScore ?? 550;
        this.timeStamp = scoreData.data?.data.didScore.lastUpdated ?? new Date();
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
  }

  formatDate() {
    const date = moment(this.timeStamp);
    const formatted = date.format('MMMM DD, YYYY');
    return formatted;
  }

  render() {
    return (
      <div>
        {this.visibility &&
          (this.showScoreComponent ? (
            <score-loaded reputeXScore={Math.trunc(this.score)} userAddress={this.userDid} lastUpdated={this.formatDate()} mode={this.mode} isDid></score-loaded>
          ) : (
            <pending-state body-message={this.errorMessage} mode={this.mode}></pending-state>
          ))}
      </div>
    );
  }
}
