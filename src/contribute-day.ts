import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { html } from 'lit/static-html.js'

@customElement('contribute-day')
export class ContributeDay extends LitElement {
  @property({ type: String })
  date = ''

  @property({ type: Number })
  count = 0

  @property({ type: Number })
  level = 0

  render() {
    return html`<div></div>`
  }
}
