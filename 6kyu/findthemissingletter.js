// Find the missing letter
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array){
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    for (let i = 1; i < array.length; i++) {
      if (alphabet.indexOf(array[i]) !== alphabet.indexOf(array[i - 1]) + 1) {
        return alphabet[alphabet.indexOf(array[i]) - 1]
      }
    }
  }