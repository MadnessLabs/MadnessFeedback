import '@ionic/core';
import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'madness-feedback',
  styleUrl: 'madness-feedback.css'
})
export class MadnessFeedback {

  @Prop() title: string;

  send(event: UIEvent) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <ion-card>
        <form onSubmit={(event: UIEvent) => this.send(event)}>
          <h2 class="form-title">{this.title ? this.title : 'Send us Feedback'}</h2>
          <ion-item>
            <ion-input placeholder="Message" />
          </ion-item>
          <ion-button fill="clear" type="submit">
            <ion-icon name="md-send" />
          </ion-button>
          <div class="logo"></div>
        </form>
      </ion-card>
    );
  }
}