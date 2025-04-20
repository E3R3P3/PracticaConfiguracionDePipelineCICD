// tests/app.test.js
const suma = require('../src/app');

test('suma de 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
