// String incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString (string) {
    let numExtract = string.replace(/[^0-9]/g,'')
    let numLength = numExtract.length  
    let letterExtract = string.replace(/[^a-z]/g,'')
    
    let calcNum = Number(numExtract) + 1
    let stringNum = calcNum.toString().padStart(numLength, '0')
   
    return letterExtract + stringNum
  }