import FavoriteResto from '../global/favorite-resto'
import Base from '../global/base-data'
import itemList from '../components/templates/ItemListTemplate'
import '../components/MainElement'
const Favorite = {
  async onMounted() {
    return `
        <main-element main-title="Restoran Favorit :"></main-element>
        `
  },
  async onAfterMounted() {
    const restos = document.querySelector('.restoList')
    const restaurants = await FavoriteResto.getAllRestos()
    if (restaurants.length) {
      restaurants.forEach((resto) => {
        const imgPath = `${Base.API_URL}${Base.IMG_PATH}${resto.pictureId}`
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
    } else {
      restos.style.display = 'block'
      restos.innerHTML = `<h2 class="noData">No Data!</h2>`
    }
  }
}
export default Favorite
