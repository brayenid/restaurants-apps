class SkeletonElement extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `  
    <div class="restoImgCity">
        <img loading="lazy" src="/images/placeholder.png" alt="Gambar" width="100%" height="350px">
    </div>
    <div class="restoContent">
        <p class="skeleton"></p>
        <h2 class="skeleton">Lorem</h2>
        <p class="restoDescription skeleton">Lorem ipsum</p>
    </div>`
  }
}

customElements.define('skeleton-element', SkeletonElement)
