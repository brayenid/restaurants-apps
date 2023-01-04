import 'regenerator-runtime'
import '../styles/reset.css'
import '../styles/main.css'
import './nowyear.js'
import App from './app'
import swRegister from './swregister'

const app = new App({
  button: document.querySelector('.hamburgerButton'),
  drawer: document.querySelector('.menuList'),
  content: document.querySelector('#app')
})

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage()
  swRegister()
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})
