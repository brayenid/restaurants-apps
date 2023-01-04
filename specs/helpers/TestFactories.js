import LikeButton from '../../src/scripts/components/LikeButtonElement'

const createLikeButtonPresenter = async (resto) => {
  await LikeButton.init({
    likeButtonContainer: document.querySelector('.likeButtonContainer'),
    resto
  })
}
export { createLikeButtonPresenter }
