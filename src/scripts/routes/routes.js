import Main from '../views/MainView'
import Detail from '../views/DetailView'
import Favorite from '../views/FavoriteView'
const routes = {
  '/': Main,
  '/detail/:id': Detail,
  '/favorites': Favorite
}
export default routes
