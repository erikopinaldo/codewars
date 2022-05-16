// Find the unique string
// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

function findUniq(arr) {
  
    // dna is an array that contains the keys if our cache object. The object contains the count for each character
    let dna = arr.map((element, index) => {
      let cache = {}
      let letters = element.toLowerCase().replace(/ /g, '').split('').sort()
      letters.forEach(letter => cache[letter] = (cache[letter] || 0) + 1)
      return Object.keys(cache).join('')
    })
    
    let output = 0
    
    dna.forEach((element, index, array) => {
      if (array.indexOf(element) == array.lastIndexOf(element)) output += index
    })
  
    return arr[output]
  }