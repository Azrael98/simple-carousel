var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.js';
let MotionCarousel = class MotionCarousel extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedInternal = 0;
        this.selected = 0;
        this.previous = 0;
    }
    get maxSelected() {
        return this.childElementCount - 1;
    }
    hasValidSelected() {
        return this.selected >= 0 && this.selected <= this.maxSelected;
    }
    render() {
        if (this.hasValidSelected()) {
            this.selectedInternal = this.selected;
        }
        return html `
      <div class="fit" @click=${this.clickHandler}>
        <slot name="selected"></slot>
      </div>
    `;
    }
    updated(changedProperties) {
        console.log(changedProperties);
        if (changedProperties.has('selected') && this.hasValidSelected()) {
            this.updateSlots();
            this.previous = this.selected;
            console.log("updated Called after clicked");
        }
    }
    updateSlots() {
        var _a, _b;
        (_a = this.children[this.previous]) === null || _a === void 0 ? void 0 : _a.removeAttribute('slot');
        (_b = this.children[this.selected]) === null || _b === void 0 ? void 0 : _b.setAttribute('slot', 'selected');
    }
    clickHandler(e) {
        console.log(this.selected);
        const i = this.selected + (Number(!e.shiftKey) || -1);
        console.log("value of i:", i);
        console.log("Shift:", e.shiftKey);
        this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;
        const change = new CustomEvent('change', {
            detail: this.selected, bubbles: true, composed: true
        });
        this.dispatchEvent(change);
        console.log("Clicked");
    }
};
MotionCarousel.styles = styles;
__decorate([
    property({ type: Number })
], MotionCarousel.prototype, "selected", void 0);
MotionCarousel = __decorate([
    customElement('motion-carousel')
], MotionCarousel);
export { MotionCarousel };
//# sourceMappingURL=motion-carousel.js.map