// Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
    let validSmileys = {eyes: [':', ';'], nose: ['-', '~'], mouth: [')', 'D']}
    
    return arr.filter(smiley => {
      let smileyChars = smiley.split('')
      if (smileyChars.length === 3) {  
        return (validSmileys.eyes.includes(smileyChars[0]) && validSmileys.nose.includes(smileyChars[1]) && validSmileys.mouth.includes(smileyChars[2])) 
      }
      else if (smileyChars.length === 2) {
        return (validSmileys.eyes.includes(smileyChars[0]) && validSmileys.mouth.includes(smileyChars[1])) 
      }
    }).length
  }