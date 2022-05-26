// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
    let temp = num
    let count = 0
    while (`${temp}`.length != 1) {
      temp = temp.toString().split('').reduce((acc, c) => acc * Number(c), 1)
      count++
    }
    return count
  }