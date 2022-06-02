// Elo rating - one game, one pair
// https://www.codewars.com/kata/55633765da97b266e3000067/train/javascript

function elo(experience, opponent, score, k) {
    if (k === undefined) {
      k = (exp) => {
        if (experience.length < 30) return 25
        else if (experience.some(rating => rating > 2400)) return 10
        else return 15
      }
    }
    
    let oldRating = (experience.length > 0 ) ? experience[experience.length - 1] : 1000
    let expectation = 1 / (1 + (10**((opponent - oldRating)/400)))
    
    return Math.round(oldRating + (k(experience) * (score - expectation)))
  };