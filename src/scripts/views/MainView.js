import Restaurants from '../global/api'
import Base from '../global/base-data'
import itemList from '../components/templates/ItemListTemplate'
import '../components/MainElement'
const Main = {
  async onMounted() {
    return `
        <main-element main-title="Eksplor Restoran :"></main-element>
        `
  },

  async onAfterMounted() {
    const restos = document.querySelector('.restoList')
    const { restaurants } = await Restaurants.getAll()
    restos.innerHTML = ''
    restaurants.forEach((resto) => {
      const imgPath = `${Base.API_URL}${Base.IMG_PATH_SMALL}${resto.pictureId}`
      const substringDescription = `${resto.description.substring(0, 250)}...`
      const restoEl = document.createElement('article')
      restoEl.setAttribute('class', 'resto')
      restoEl.innerHTML = itemList({
        data: resto,
        imagePath: imgPath,
        description: substringDescription
      })
      restos.append(restoEl)
    })
  }
}
export default Main
