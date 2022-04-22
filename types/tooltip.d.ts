import { LitElement } from 'lit';
export declare class Tooltip extends LitElement {
    static styles: import("lit").CSSResult;
    date: string;
    count: number;
    protected render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'graph-tooltip': Tooltip;
    }
}
