class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return Math.PI * (this.radius ** 2);//Standard area
    }
    enlargeCircle(){
        return Math.PI * ((this.radius * 3) ** 2);//Enlarge by 3
    }
    shrinkCircle(){
        var small = this.radius * 1.5;
        return Math.PI * (small ** 2);//Shrink by half
    }
}

var circle1 = new Circle(2);
var big = circle1 * 3;
var small = big / 2;
console.log("Area of circle1 with radius 2.0 is " + circle1.getArea() + "\n");
console.log("Circle is enlarged 3 times. \nArea of circle1 with radius 6.0 is " + circle1.enlargeCircle() + "\n");
console.log("Circle is shrunk by half. \nArea of circle1 with radius 3.0 is " + circle1.shrinkCircle());