// Pair of gloves
// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

function numberOfPairs(gloves) {
    let pairs = {}
    let count = 0
    
    gloves.forEach(color => {
      if ((pairs[color])) pairs[color] += 1
      else pairs[color] = 1
    })
    
    for (let pair in pairs) {
      count += Math.floor(pairs[pair] / 2)
    }
    
    return count
  }