const Drawer = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('menulistShow')
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('menulistShow')
  }
}

export default Drawer