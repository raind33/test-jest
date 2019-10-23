const fun = () => {
  throw new Error('a')
}
test('a*b应该等于', () => {
  expect(fun).toThrow('a')
})
test('a*b应该等于2', () => {
  expect(10).toBe(10)
})
test('a*b应该等于3', () => {
  expect(2).toBe(2)
})
