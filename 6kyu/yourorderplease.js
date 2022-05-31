// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
    let arr = words.split(' ')
    let output =[]
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i].match(/[1-9]/g)
      output[num - 1] = arr[i]
    }
    return output.join(' ')
  }