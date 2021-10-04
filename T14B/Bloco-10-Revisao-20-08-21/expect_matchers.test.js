const mult = (a, b) => a * b;

test('multiplica dois valores', () => {
  expect(mult(2, 3)).toBe(6);
  expect(mult(2, 3)).toEqual(6);
})

// describe('', () => {
//   it('', () => {

//   })
// })