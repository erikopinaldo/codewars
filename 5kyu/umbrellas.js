// A Man and his Umbrellas
// https://www.codewars.com/kata/58298e19c983caf4ba000c8d/train/javascript

function minUmbrellas(weather) {
    let storage = {home: 0, work: 0}
    let conditions = ["rainy", "thunderstorms"]
    let isRainy = false
    
    if (!conditions.some(condition => weather.includes(condition))) return 0 
    
    for (let i = 0; i < weather.length; i++) {
      if (!conditions.includes(weather[i])) {
        isRainy = false
      }
      else {
        isRainy = true
        
        if (i % 2 === 0) {
          storage.home += 1
          storage.work -= 1
          storage.work = Math.max(0, storage.work)
        }
        else {
          storage.work += 1
          storage.home -= 1
          storage.home = Math.max(0, storage.home)
        }
      }
    }
    console.log(storage)
    return storage.home + storage.work
  }