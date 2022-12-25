import Drawer from './drawer'
import routes from './routes/routes'
import urlParser from './routes/url-parser'
class App {
  constructor({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._initialAppShell()
  }

  _initialAppShell() {
    Drawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage() {
    const url = urlParser.withCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.onMounted()
    await page.onAfterMounted()
  }
}
export default App
