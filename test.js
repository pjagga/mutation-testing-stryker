const { isUserOldEnough } = require('./index.js')

describe('Unit test for userAge', () => {    
    test('> than 18 years', () => {
      let user = {
        name: "TestUser",
        age: "20"
      }
     let ageResult = isUserOldEnough(user)
     expect(ageResult).toEqual(true)
    })
})