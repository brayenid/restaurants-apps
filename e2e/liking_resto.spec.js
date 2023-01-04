const assert = require('assert')

/* eslint-disable */
Feature('restaurant')

Scenario('Liking a resto', async ({ I }) => {
  I.amOnPage('/')
  I.waitForElement('.restoName', 6)
  I.seeElement('.restoName')
  const firstRestoName = await I.grabTextFrom(locate('.restoName').first())
  I.click(locate('.restoName').first())

  I.waitForElement('#likeButton', 6)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('#/favorites')
  I.waitForElement('.resto', 6)
  I.seeElement('.resto')
  const likedRestoName = await I.grabTextFrom(locate('.restoName').first())

  assert.strictEqual(firstRestoName, likedRestoName)
})
