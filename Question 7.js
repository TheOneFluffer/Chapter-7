/*var club1 = { name: "Sports", members: 1600, fees: 50 };
var club2 = { name: "Community Service", members: 1200,fees: 0 };
var club3 = { name: "Foodies", members: 800, fees: 100 };
var totalFees = club1.fees + club2.fees + club3.fees;
//total fees
console.log("The total fees are :$" + totalFees);
//Adding 10% more to joining fee (not using method)
var foreignerFee1 = (club1.fees * 0.10) + club1.fees;
var foreignerFee2 = (club2.fees * 0.10) + club2.fees;
var foreignerFee3 = (club3.fees * 0.10) + club3.fees;
console.log("Foreigner fee for club 1: $" + foreignerFee1);
console.log("Foreigner fee for club 2: $" + foreignerFee2);
console.log("Foreigner fee for club 3: $" + foreignerFee3);*/
//Adding 10% more to joining fee (using method)
var club1 = 
{ 
    name: "Sports", 
    members: 1600, 
    fees: 50,
    foreignerfees: function()
    {
        return (this.fees * 0.10) + this.fees;
    }
};
var club2 = 
{ 
    name: "Community Service",
    members: 1200,
    fees: 0,
    foreignerfees: function()
    {
        return (this.fees * 0.10) + this.fees;
    }
};
var club3 = 
{ 
    name: "Foodies",
    members: 800,
    fees: 100,
    foreignerfees: function()
    {
        return (this.fees * 0.10) + this.fees;
    }
};
console.log("The fees for foreigners are as follows: \n" + club1.name + " Club: $" + club1.foreignerfees() + "\n" + club2.name + " Club: $" + club2.foreignerfees() + "\n" + club3.name + " Club: $" + club3.foreignerfees());