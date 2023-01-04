import FavoriteResto from '../src/scripts/global/favorite-resto'
import * as TestFactories from './helpers/TestFactories'

describe('Liking a restaurant', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="likeButtonContainer"></div>`
  })

  afterEach(() => {
    FavoriteResto.deleteResto(1)
  })

  it('should show the like button when the movie hasnt been liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 })

    expect(document.querySelector('[aria-label="sukai restoran ini"]')).toBeTruthy()
  })

  it('should like the movie and store it to the DB', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const getDataFromDb = await FavoriteResto.getResto(1)

    expect(getDataFromDb).toEqual({ id: 1 })
  })

  it('should not store the movie again when the movie already liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 })
    await FavoriteResto.addResto({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteResto.getAllRestos()).toEqual([{ id: 1 }])
  })

  it('it should not store non id restaurant', async () => {
    await TestFactories.createLikeButtonPresenter({})
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteResto.getAllRestos()).toEqual([])
  })
})
