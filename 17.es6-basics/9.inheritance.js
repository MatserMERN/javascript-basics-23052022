class Shape{
    constructor(){

    }

    draw(){
        return "I am a generic Shape"
    }
}

class Circle extends Shape {
    constructor(radius){
       super()
       this.radius = radius
    }
    draw(){
        return `I am a Circle and my radius is ${this.radius} `
    }
}

let circle = new Circle(100)
console.log(circle.draw())