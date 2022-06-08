// The Fruit Juice
// https://www.codewars.com/kata/5264603df227072e6500006d/train/javascript

function Jar() {
  this.volume = {}
  this.total = 0
}

Jar.prototype.add = function(amount, type) {
  if (this.volume[type]) this.volume[type] += amount
  else this.volume[type] = amount
  this.total += amount
};

Jar.prototype.pourOut = function(amount) {
  let percent = 1 - (amount / this.getTotalAmount())
  
  for (let fruit in this.volume) {
    this.volume[fruit] = this.volume[fruit] * percent
  }
  this.total -= amount
};

Jar.prototype.getTotalAmount = function() {
  return this.total
};

Jar.prototype.getConcentration = function(type) {
  if (this.volume[type]) return this.volume[type] / this.total
  else return 0
}