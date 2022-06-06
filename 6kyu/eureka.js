// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
    let start = a
    let end = b
    const range = [...Array(end - start + 1).keys()].map(x => x + start);
    
    return range.filter(num => {
      let arr = String(num).split('')
      let subtotal = 0
      
      for (let i = 0; i < arr.length; i++) {
        subtotal += arr[i] ** (i + 1)
      }
      return subtotal === num
    })
  }