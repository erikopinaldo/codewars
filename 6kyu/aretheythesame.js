// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
    if (array1 !== [] && array2 !== [] && array1 !== null && array2 !== null) {
      let a2 = array1.sort((a, b) => a - b).map(element => element ** 2)
      return array2.sort((a, b) => a - b).every((element, index) => element === a2[index])
    }
    else return false
  }