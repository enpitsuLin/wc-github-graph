import { html, css, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

type GraphState = 'loading' | 'loaded' | 'error'

@customElement('github-graph')
export class GithubGraph extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `
  @state()
  state: GraphState = 'loading'

  render() {
    return html`<div></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'github-graph': GithubGraph
  }
}
