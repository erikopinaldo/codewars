// Find heavy ball
// https://www.codewars.com/kata/544034f426bc6adda200000e/train/javascript

function findBall(scales) {
    let initial = scales.getWeight([1,2,3],[4,5,6])
     
     if (initial === 0) {
       return (scales.getWeight([0], [7]) === -1) ? 0 : 7  
     }
     else if (initial === -1) {
       let secondary = scales.getWeight([1], [3])
       
       if (secondary === 0) return 2
       else if (secondary === -1) return 1
       else return 3
     }
     else {
       let secondary = scales.getWeight([4], [6])
       
       if (secondary === 0) return 5
       else if (secondary === -1) return 4
       else return 6
     }
   }