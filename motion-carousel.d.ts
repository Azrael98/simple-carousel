import { LitElement } from 'lit';
export declare class MotionCarousel extends LitElement {
    static styles: import("lit").CSSResult;
    private selectedInternal;
    selected: number;
    get maxSelected(): number;
    hasValidSelected(): boolean;
    render(): import("lit-html").TemplateResult<1>;
    private previous;
    protected updated(changedPrope: any): any;
}
declare global {
    interface HTMLElementTagNameMap {
        'motion-carousel': MotionCarousel;
    }
}
//# sourceMappingURL=motion-carousel.d.ts.map