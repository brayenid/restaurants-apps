import * as TestFactories from './helpers/TestFactories'
import FavoriteResto from '../src/scripts/global/favorite-resto'

describe('unliking a restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = `<div class="likeButtonContainer"></div>`
    await FavoriteResto.addResto({ id: 1 })
    await TestFactories.createLikeButtonPresenter({ id: 1 })
  })

  afterAll(() => {
    FavoriteResto.deleteResto(1)
  })

  it('should display unlike button when the movie has been liked', async () => {
    expect(document.querySelector('[aria-label="batal sukai restoran ini"]')).toBeTruthy()
  })

  it('should unlike the movie and delete the data from Db', async () => {
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteResto.getAllRestos()).toEqual([])
  })

  it('should not throw if unlike movie is not on the list', async () => {
    await FavoriteResto.deleteResto(1)
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteResto.getAllRestos()).toEqual([])
  })
})
