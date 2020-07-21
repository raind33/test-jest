function sun (x, y) {
  return x + y
}

test('sun', () => {
  expect(sun(2,2)).toBe(4)
})