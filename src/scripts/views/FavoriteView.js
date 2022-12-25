import FavoriteResto from '../global/favorite-resto'
import Base from '../global/base-data'
import itemList from '../components/ItemList'
const Favorite = {
  async onMounted() {
    return `
        <header>
          <div class="jumboLayer">
            <h1>Resto Kekinian</h1>
            <p>Apapun makan minumnya, looking-looking tempatnya ya di Resto Kekinian!</p>
          </div>
        </header>
        <main id="main">
            <h2 class="title">Favorit</h2>
            <div class="restoList"></div>
        </main>
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
