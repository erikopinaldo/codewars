// Title Case
// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
    let articles = []
    let lowers = title.toLowerCase()  
    let array = lowers.split(' ')
    
    if (minorWords !== undefined) {
      articles = minorWords.toLowerCase().split(' ')
    }
  
    return array.map((word, index) => {
      if (!articles.includes(word) || index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      else return word
    })
    .join(' ')
  }