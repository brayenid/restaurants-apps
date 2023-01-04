/* eslint-disable */
Feature('restaurant')

Scenario('Unliking a resto', ({ I }) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867')
  I.waitForElement('#likeButton', 6)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.waitForElement('.resto', 6)
  I.seeElement('.resto')
  I.seeElement('.restoName')
  I.click('.restoName')

  I.waitForElement('#likeButton', 6)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.seeElement('.noData')
})
