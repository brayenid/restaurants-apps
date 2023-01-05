const Drawer = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.menuList')) {
        this._closeDrawer(event, drawer)
      }
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
