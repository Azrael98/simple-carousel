import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {styles} from './styles.js';

@customElement('motion-carousel')
export class MotionCarousel extends LitElement {
  static styles = styles;
  private selectedInternal = 0;
  @property({type: Number})
  selected = 0;

  get maxSelected() {
    return this.childElementCount - 1;
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  override render() {
    if(this.hasValidSelected()){
        this.selectedInternal = this.selected;
    }
    return html`
      <div class="fit" @click=${this.clickHandler}>
        <slot name="selected"></slot>
      </div>
    `;
  }

  private previous = 0;
  protected updated(changedProperties: PropertyValues) {
    console.log(changedProperties)
    if (changedProperties.has('selected') && this.hasValidSelected()) {
      this.updateSlots();
      this.previous = this.selected;
      console.log("updated Called after clicked")
    }
  }

  private updateSlots() {
    this.children[this.previous]?.removeAttribute('slot');
    this.children[this.selected]?.setAttribute('slot', 'selected');
  }

  private clickHandler(e:MouseEvent) {
    console.log(this.selected)
    const i = this.selected + (Number(!e.shiftKey)||-1);
    console.log("value of i:", i)
    console.log("Shift:", e.shiftKey)
    this.selected = i > this.maxSelected ? 0 : i< 0 ? this.maxSelected : i;
    const change = new CustomEvent('change', {
        detail: this.selected, bubbles: true, composed: true
    })
    this.dispatchEvent(change)
    console.log("Clicked")
  }

}
declare global {
  interface HTMLElementTagNameMap {
    'motion-carousel': MotionCarousel;
  }
}
