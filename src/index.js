module.exports = function reverse (n) {
  // return Math.abs(n).toString(10).split('').reverse().join('')
  return Math.abs(n).toString(10)
                    .split('')
                    .map((value, index, array) => array[array.length - index - 1])
                    .join('')
}
