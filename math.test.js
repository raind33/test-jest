const {add, minus, mutil} = require('./math.js')

test('a+b应该等于', () => {
  expect(add(3, 2)).toBe(5)
})
test('a-b应该等于1', () => {
  expect(minus(3, 2)).toBe(0)
})
test('a*b应该等于', () => {
  expect(mutil(3, 2)).toBe(6)
})