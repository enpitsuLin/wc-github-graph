import { LitElement, nothing } from 'lit'
import { html, unsafeStatic } from 'lit/static-html.js'
import { customElement, property, state } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import style from './styles'
import './tooltip'

type GraphState = 'loading' | 'loaded' | 'error'

interface Tooltip {
  show: boolean
  data: {
    date: string
    count: string
  }
  postion: {
    left: string
    top: string
  }
}

@customElement('github-graph')
export class GithubGraph extends LitElement {
  static styles = style

  @property({ type: String })
  username = ''

  @state()
  state: GraphState = 'loading'

  @state()
  header = ''

  @state()
  chart = ''

  @state()
  tooltip: Partial<Tooltip> = { show: false, data: { date: '', count: '0' }, postion: { left: '0px', top: '0px' } }

  render() {
    const tooltipStyle = styleMap(this.tooltip.postion || {})
    return html` <div class="contributions" style=${this.style.cssText}>
      <h2 class="contributions-header">${this.header}</h2>
      <div class="contributions-chart" @mouseover=${this._mouseOverHandler} @mouseout=${this._mouseOutHandler}>
        ${unsafeStatic(this.chart)}
      </div>
      ${this.tooltip.show
        ? html`<graph-tooltip
            style=${tooltipStyle}
            date=${this.tooltip.data?.date || false}
            count=${this.tooltip.data?.count || false}
          />`
        : nothing}
    </div>`
  }
  private _mouseOverHandler(e: Event) {
    const target = e.target as HTMLElement
    const isRect = target.matches('rect')
    if (isRect) {
      const rect = target.getBoundingClientRect()
      const tooltip = {
        show: true,
        data: target.dataset as Tooltip['data'],
        postion: { left: `${rect.x + rect.width / 2}px`, top: `${rect.y - 4}px` }
      }
      this.tooltip = tooltip
    }
  }

  private _mouseOutHandler() {
    this.tooltip = { show: false }
  }

  connectedCallback() {
    super.connectedCallback()
    this.init()
  }

  private async init() {
    try {
      const contributions = await fetch(
        `https://cors.kylekarpack.workers.dev/corsproxy/?apiurl=https://github.com/users/${this.username}/contributions`,
        { mode: 'cors' }
      )
      let responseText = await contributions.text()
      const parser = new DOMParser()
      const doc = parser.parseFromString(responseText, 'text/html')
      const graph = doc.body.querySelector('.calendar-graph, .js-calendar-graph') as HTMLDivElement
      if (!graph) throw new Error('no graph')
      const svgEle = graph.querySelector('svg')
      if (!svgEle) throw new Error('no svg')
      graph.querySelector('.f6')?.remove()

      svgEle.setAttribute(
        'viewBox',
        `0 0 ${svgEle.getAttribute('width') || '828'} ${svgEle.getAttribute('height') || '128'}`
      )

      this.state = 'loaded'
      this.header = doc.body.querySelector('.f4')?.innerHTML || ''
      this.chart = graph.innerHTML
    } catch (error) {
      this.state = 'error'
      console.error('Error retrieving github graph', error)
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'github-graph': GithubGraph
  }
}
