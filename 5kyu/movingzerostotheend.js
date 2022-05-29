// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
    let zeros = []
    
    return arr.filter(element => {
      if (element === 0 ){
        zeros.push(element)
      }
      return element !== 0
    }).concat(zeros)
  }