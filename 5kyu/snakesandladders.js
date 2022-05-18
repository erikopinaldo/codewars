// Snakes and Ladders
// https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/javascript

function SnakesLadders() {
  // Object storing snakes
  this.snakes = {16:6, 46:25, 49:11, 62:19, 64:60, 74:53, 89:68, 92:88, 95:75, 99:80}
  
  // Object storing ladders
  this.ladders = {2:38, 7:14, 8:31, 15:26, 21:42, 28:84, 36:44, 51:67, 71:91, 78:98, 87:94}
  
  // Object storing player turn
  this.playerTurn = 1
  
  // Object storing player position
  this.playerPosition = {1:0, 2:0}
  
  // Object storing gameOver state 
  this.gameOver = false
};

SnakesLadders.prototype.play = function(die1, die2) {
  
  if (this.gameOver === true) return `Game over!`
    
  // Get player's stored position and add the roll value to get new position
  this.playerPosition[this.playerTurn] += die1 + die2 

  // If player passes square 100, then subtract the overshoot from their current position
  if (this.playerPosition[this.playerTurn] > 100) {
    this.playerPosition[this.playerTurn] = 100 - (this.playerPosition[this.playerTurn] - 100)
  }

  // Bonus phase (snakes or ladders)
  // If player lands on the beginning of a snake or ladder, replace their current position with the snake/ladder destination 
  if (this.playerPosition[this.playerTurn] in this.snakes) {
    this.playerPosition[this.playerTurn] = this.snakes[this.playerPosition[this.playerTurn]]
  }
  else if (this.playerPosition[this.playerTurn] in this.ladders) {
    this.playerPosition[this.playerTurn] = this.ladders[this.playerPosition[this.playerTurn]]
  }

  // These variables will be used for the final output string
  let currentPlayer = this.playerTurn
  let currentSquare = this.playerPosition[this.playerTurn]


  // If the game isn't over, switch the player turn state and return player position string. Else, end the game
  if (currentSquare != 100) {
    // If each die have different values, switch to next player. 
    // If both dice have the same value, the current player goes again.
    if (die1 != die2) {
      if (this.playerTurn === 1) this.playerTurn = 2
      else this.playerTurn = 1
    }   
    return `Player ${currentPlayer} is on square ${currentSquare}`
  }
  else {
    this.gameOver = true
    return `Player ${currentPlayer} Wins!`
  }
}