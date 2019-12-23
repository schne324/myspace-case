module.exports = input =>
  [...input.toLowerCase()]
    .map((v, i) => (i % 2 ? v.toUpperCase() : v))
    .join('')
