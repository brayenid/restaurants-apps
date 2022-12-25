import 'regenerator-runtime'
import '../styles/main.css'
import './nowyear.js'
import App from './app'
import swRegister from './swregister'

const app = new App({
  button: document.querySelector('.hamburgerButton'),
  drawer: document.querySelector('.menuList'),
  content: document.querySelector('#app')
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})
