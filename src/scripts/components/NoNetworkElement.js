class NoNetwork extends HTMLElement {
  connectedCallback() {
    this._message = this.getAttribute('message') || 'No Network!'
    this.render()
  }

  render() {
    this.innerHTML = `
        <div class="noNetwork">
            <h2><span>Tidak dapat menampilkan konten :</span> ${this._message}</h2>
        </div>
        `
  }
}

customElements.define('no-network', NoNetwork)
