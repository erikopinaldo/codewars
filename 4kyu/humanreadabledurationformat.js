// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration (seconds) {
  
    if (seconds === 0) return "now"
    
    // Calculate the values for each unit. Units are 0 if there aren't enough seconds for that unit.
    let second = seconds, minute, hour, day, year
    
    year = Math.floor(seconds / 31536000)
    second -= year * 31536000
    day = Math.floor(second / 86400)
    second -= day * 86400
    hour = Math.floor(second / 3600)
    second -= hour * 3600 
    minute = Math.floor(second / 60)
    second -= minute * 60
    
    
    
    let output = []
    let units = {year: year, day: day, hour: hour, minute: minute, second: second}
    
    // Create an array containing substrings representing each non-zero unit.
    for (const property in units) {
      if (units[property] !== undefined && units[property] > 0) {
        
        // Add an 's' at the end of each unit if the value is >1
        if (Number(units[property]) > 1) {
          output.push(`${units[property]} ${property}s`)
        }
        else {
          output.push(`${units[property]} ${property}`)
        }
      }
    }
    
    let string = ""
    
    // If there is only one unit present in the array, return that single unit as a string.
    if (output.length === 1) {
      string += output[0]
      return string
    }
    
    // If there is more than one unit in the array, construct a concated string. 
    for (let i = 0; i < output.length; i++) {
      if (i === (output.length - 1)) {
        string += ` and ${output[i]}`
      }
      else if (i > 0) {
        string += `, ${output[i]}`
      }
      else {
        string += output[i]
      }
    }
    return string
  }