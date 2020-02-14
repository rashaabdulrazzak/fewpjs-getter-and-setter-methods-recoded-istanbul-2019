// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius 
  }
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return this.diameter * Math.PI
  }
  get area(){
    let a = Math.pow(this.radius ,2) * Math.PI
  }
  set diameter( number){
     this.radius = number /2
  }
  set circumference(number){
    this.radius = number /(2 * Math.PI)
  }
}