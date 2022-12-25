import Restaurants from '../global/api'
import Base from '../global/base-data'
import itemList from '../components/ItemList'
const Main = {
  async onMounted() {
    return `
        <header>
          <div class="jumboLayer">
            <h1>Resto Kekinian</h1>
            <p>Apapun makan minumnya, looking-looking tempatnya ya di Resto Kekinian!</p>
          </div>
        </header>
        <main id="main">
            <h2 class="title">Eksplor Restoran</h2>
            <div class="restoList"></div>
        </main>
        `
  },

  async onAfterMounted() {
    const restos = document.querySelector('.restoList')
    const { restaurants } = await Restaurants.getAll()
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
  }
}
export default Main
