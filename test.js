const { isUserOldEnough } = require('./index.js')

describe('Unit test for userAge', () => {    
    test('Age above voting age', () => {
      let user = {
        name: "TestUser",
        age: "20"
      }
     let ageResult = isUserOldEnough(user)
     expect(ageResult).toEqual(true)
    })
    test('Age euqals voting age', () => {
      let user = {
        name : "TestUser",
        age: "18"
      }
        let ageResult = isUserOldEnough(user)
        expect(ageResult).toEqual(true)
     })
       test('Age below voting age', () => {
        let user = {
          name : "TestUser",
          age: "9"
        }
        let ageResult = isUserOldEnough(user)
        expect(ageResult).toEqual(false)
       })
})