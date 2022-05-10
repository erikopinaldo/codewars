// Sort the odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    let oddNums = array.filter(element => element % 2 !== 0).sort((a, b) => a - b)
    
    return array.map((element, index) => {
      if (element % 2 !== 0) {
        let oddNum = oddNums[0]
        oddNums.shift()
        return oddNum
      }
      else return element
    })
  }