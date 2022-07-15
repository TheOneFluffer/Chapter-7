class Circle{
    constructor(radius)
    {
        this.radius = radius; //state
    }
    getArea(){ //behaviour (method)
        return Math.PI * (this.radius ** 2);
    }
}
//Creating new objects
var Circle1 = new Circle(10);
var Circle2 = new Circle(30);
var Circle3 = new Circle(120);
//Invoking class
console.log("The area of the circles are: " + Circle1.getArea() + ", " + Circle2.getArea() + " and " + Circle3.getArea());