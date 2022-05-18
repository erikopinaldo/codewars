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
    
    // Object storing gameOver state {gameOver: false}
    this.gameOver = false
  };
  
  SnakesLadders.prototype.play = function(die1, die2) {
    
    let roll = die1 + die2
    let currentPlayer = this.playerTurn
    
    // Roll
    // Move player based on roll value
    this.playerPosition[this.playerTurn] += roll 
    
    // Bonus phase (snakes or ladders)
    // if this.playerPosition[this.playerTurn] exists in this.snakes, then this.playerPosition[this.playerTurn] = this.snakes[playerPosition[this.playerTurn]]
    if (this.playerPosition[this.playerTurn] in this.snakes) {
      this.playerPosition[this.playerTurn] = this.snakes[this.playerPosition[this.playerTurn]]
    }
    else if (this.playerPosition[this.playerTurn] in this.ladders) {
      this.playerPosition[this.playerTurn] = this.ladders[this.playerPosition[this.playerTurn]]
    }
    
    let currentSquare = this.playerPosition[this.playerTurn]
    
    // If roll is double dice, don't change playerTurn
    // Else, switch to next player
    if (die1 != die2) {
      if (this.playerTurn === 1) {
        this.playerTurn = 2
      }
      else this.playerTurn = 1
    }
    
    // return resulting square for selected player -> 'Player n is on square x'
    return `Player ${currentPlayer} is on square ${currentSquare}` 
    
    // if player's resulting square > 100, go back total - 100 squares
    // if player's resulting square === 100 -> gameOver = true -> return 'Player n Wins!' and also 'Game over!' if another players tries to play
    // also if player's resulting square === 100, ignore any double rolls
  }