// Vector class
// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/javascript

var Vector = function (components) {
    this.components = components
    this.add = (vector) => {
      if (this.components.length !== vector.components.length) throw "Error"
      let sum = this.components.map((num, i) => num + vector.components[i])
      return new Vector(sum)
    }
    this.subtract = (vector) => {
      if (this.components.length !== vector.components.length) throw "Error"
      let diff = this.components.map((num, i) => num - vector.components[i])
      return new Vector(diff)
    }
    this.dot = (vector) => {
      if (this.components.length !== vector.components.length) throw "Error"
      let total = 0
      this.components.map((num, i) => {
        total += num * vector.components[i]
      })
      return total
    }
    this.norm = () => {
      let total = 0
      this.components.map((num, i) => {
        total += num ** 2
      })
      return Math.sqrt(total)
    }
    this.equals = (vector) => { 
      return this.components.every((num, i) => num === vector.components[i])
    }
    this.toString = () => `(${this.components})`
  };