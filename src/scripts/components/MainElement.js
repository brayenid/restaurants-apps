class MainElement extends HTMLElement {
  connectedCallback() {
    this._mainTitle = this.getAttribute('main-title') || null
    this.render()
  }

  render() {
    this.innerHTML = `
        <main id="main">
            <h2 class="title">${this._mainTitle}</h2>
            <div class="restoList"></div>
        </main>
        `
  }
}
customElements.define('main-element', MainElement)
