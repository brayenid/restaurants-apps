/* eslint-disable */
Feature('restaurant')

Scenario('Make a review', async ({ I }) => {
  I.amOnPage('/#/detail/s1knt6za9kkfw1e867')
  I.waitForElement('.review', 10)
  const reviewsLengthBefore = await I.grabNumberOfVisibleElements('.review')
  I.seeElement('#addReview')
  I.fillField('#reviewName', 'John Doe')
  I.fillField('#reviewContent', 'Hei')
  I.click('#addReview [type="submit"]')
  I.wait(1)
  const reviewsLengthAfter = await I.grabNumberOfVisibleElements('.review')
  I.assertBelow(reviewsLengthBefore, reviewsLengthAfter)
})
