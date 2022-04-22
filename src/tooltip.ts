import { css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { html } from 'lit/static-html.js'

@customElement('graph-tooltip')
export class Tooltip extends LitElement {
  static styles = css`
    .tooltip {
      animation: fadein 0.3s ease-in-out;
      font-size: 12px;
      border-radius: 2px;
      background: rgba(20, 20, 20, 0.9);
      padding: 4px 10px;
      color: #eee;
      position: fixed;
      transform: translateY(-100%) translateX(-50%);
    }
    .tooltip:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      background: transparent;
      border-top-color: rgba(20, 20, 20, 0.9);
      border-width: 5px;
      margin-left: -5px;
    }
  `

  @property({ type: String })
  date: string = ''

  @property({ type: String })
  count: number = 0

  protected render(): unknown {
    return html`
      <div class="tooltip" style=${styleMap(this.style as Record<string, any>)}>
        <strong>Date:</strong> ${this.date}<br />
        <strong>Contributions:</strong> ${this.count}
      </div>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'graph-tooltip': Tooltip
  }
}
