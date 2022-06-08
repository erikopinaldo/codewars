// The Fruit Juice
// https://www.codewars.com/kata/5264603df227072e6500006d/train/javascript

function Jar() {
    this.volume = {}
   }
   
   Jar.prototype.add = function(amount, type) {
     if (this.volume[type]) this.volume[type] += amount
     else this.volume[type] = amount
   };
   
   Jar.prototype.pourOut = function(amount) {
     let percent = 1 - (amount / this.getTotalAmount())
     
     for (let fruit in this.volume) {
       this.volume[fruit] = this.volume[fruit] * percent
     }
   };
   
   Jar.prototype.getTotalAmount = function() {
     let total = 0
     for (let fruit in this.volume) {
       total += this.volume[fruit]
     }
     return total
   };
   
   Jar.prototype.getConcentration = function(type) {
     if (this.volume[type]) return this.volume[type] / this.getTotalAmount()
     else return 0
   }