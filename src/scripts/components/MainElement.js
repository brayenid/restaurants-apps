import makeItemListSkeleton from './helpers/skeleton-maker'
class MainElement extends HTMLElement {
  connectedCallback() {
    this._mainTitle = this.getAttribute('main-title') || null
    this.render()
  }

  render() {
    this.innerHTML = `
        <main id="main" tabindex="0">
            <h2 class="title">${this._mainTitle}</h2>
            <div class="restoList">
            ${makeItemListSkeleton(20)}
            </div>
        </main>
        `
  }
}
customElements.define('main-element', MainElement)
