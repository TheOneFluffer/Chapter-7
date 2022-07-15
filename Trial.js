var Circle = 
{
    Circle1 : 10,
    Circle2 : 23,
    Circle3 : 125,
    area1: function()
    {
        return Math.PI * (this.Circle1 * this.Circle1);
    },

    area2: function()
    {
        return Math.PI * (this.Circle2 * this.Circle2);
    },

    area3: function()
    {
        return Math.PI * (this.Circle3 * this.Circle3);
    }
}

console.log("The radius of the 3 circles are: " + Circle.Circle1 + ", " + Circle.Circle2 + " and " + Circle.Circle3);
console.log("The area of the circles are: " + Circle.area1() + ", " + Circle.area2() + " and " + Circle.area3());

var rectangle1 = 
{
    length: 10,
    breadth: 5,
    area: function()
    {
        return this.length * this.breadth;
    }
}

var rectangle2 = 
{
    length: 20,
    breadth: 15,
    area: function()
    {
        return this.length * this.breadth;
    }
}

console.log("Properties of rectangle 1 length: " + rectangle1.length + ", breadth: " + rectangle1.breadth + "\n Properties of rectangle 2 length: " + rectangle2.length + ", breadth: " + rectangle2.breadth);
console.log("The area of both rectangles: " + rectangle1.area() + " and " + rectangle2.area());

//Another one
var input = require("readline-sync");

var employee1 =
{
    name: "Freddie",
    age: 30,
    salary: 3900,
    sales: 57000,
    newSalary: function()
    {
        if (this.sales > 50000)
        {
            return this.sales + (this.sales * 0.20);
        }
    } 
}

var employee2 =
{
    name: "Anya",
    age: 29,
    salary: 4300,
    sales: 65000,
    newSalary: function()
    {
        if (this.sales > 50000)
        {
            return this.sales + (this.sales * 0.20);
        }
    } 
}

console.log(employee1.name + " " + employee1.age + " " + "$" + employee1.salary + " " + employee1.sales + "\n" + employee2.name + " " +employee2.age + " " + "$" + employee2.salary + " " + employee2.sales);

//change the name of the first employee
employee1.name = input.question("Please enter a new name: ");
//output to see if the changes are made
console.log(employee1.name + " " + employee1.age + " " + "$" + employee1.salary + " " + employee1.sales + "\n" + employee2.name + " " +employee2.age + " " + "$" + employee2.salary + " " + employee2.sales);
//total sales
var totalSales = employee1.sales + employee2.sales;
//Output congrats message
console.log("Congrats " + employee1.name + ", your salary has been raised by 20%! Your new salary is: $" + employee1.newSalary());
console.log("Congrats " + employee2.name + ", your salary has been raised by 20%! Your new salary is: $" + employee2.newSalary());