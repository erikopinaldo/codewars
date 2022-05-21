// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/solutions/javascript/me/best_practice

function isPangram(string){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return alpha.every(letter => string.toLowerCase().split('').includes(letter))
  }