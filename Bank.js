class BankAccount{
    constructor(name, savings){//name is string, savings is float.
        this.name = name;
        this.savings = parseFloat(savings);
    }
    getBalance(){
        return this.name + " has $" + this.savings + ".00";
    }
}
var user1 = new BankAccount("Oliver Twist", 1000);
var user2 = new BankAccount("Richie Rich", 100000)
console.log(user1.getBalance() + "\n" + user2.getBalance());