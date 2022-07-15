var input = require("readline-sync");

var employee1 = new Object();
{
    employee1.name = "Freddie"
    employee1.age = 30
    employee1.salary = 3900 
    employee1.sales = 30000
}

var employee2 = new Object();
{
    employee2.name = "Anya"
    employee2.age = 29
    employee2.salary = 4300
    employee2.sales = 27000
}

console.log(employee1.name + " " + employee1.age + " " + "$" + employee1.salary + " " + employee1.sales + "\n" + employee2.name + " " +employee2.age + " " + "$" + employee2.salary + " " + employee2.sales);

//change the name of the first employee
employee1.name = input.question("Please enter a new name: ");
//output to see if the changes are made
console.log(employee1.name + " " + employee1.age + " " + "$" + employee1.salary + " " + employee1.sales + "\n" + employee2.name + " " +employee2.age + " " + "$" + employee2.salary + " " + employee2.sales);
//total sales
var totalSales = employee1.sales + employee2.sales;
if (totalSales > 50000)
{
    var newSalary1 = employee1.sales + (employee1.sales * 0.20);
    var newSalary2 = employee2.sales + (employee2.sales * 0.20);
    console.log("Congrats " + employee1.name + ", your salary has been raised by 20%! Your new salary is: $" + newSalary1);
    console.log("Congrats " + employee2.name + ", your salary has been raised by 20%! Your new salary is: $" + newSalary2);
}