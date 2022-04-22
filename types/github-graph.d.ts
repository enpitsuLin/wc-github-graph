import { LitElement } from 'lit';
import './tooltip';
declare type GraphState = 'loading' | 'loaded' | 'error';
interface Tooltip {
    show: boolean;
    data: {
        date: string;
        count: string;
    };
    postion: {
        left: string;
        top: string;
    };
}
export declare class GithubGraph extends LitElement {
    static styles: import("lit").CSSResult;
    username: string;
    state: GraphState;
    header: string;
    chart: string;
    tooltip: Partial<Tooltip>;
    render(): import("lit").TemplateResult<1 | 2>;
    private _mouseOverHandler;
    private _mouseOutHandler;
    connectedCallback(): void;
    private init;
}
declare global {
    interface HTMLElementTagNameMap {
        'github-graph': GithubGraph;
    }
}
export {};
