import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('simple-carousel')
export class SimpleCarousel extends LitElement {
  override render() {
    return html`<h1>Simple-Carousel</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-carousel': SimpleCarousel;
  }
}
