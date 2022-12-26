class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <header>
        <div class="jumboLayer">
            <h1>Resto Kekinian</h1>
            <p>Apapun makan minumnya, looking-looking tempatnya ya di Resto Kekinian!</p>
        </div>
    </header>
    `
  }
}
customElements.define('header-element', HeaderElement)
