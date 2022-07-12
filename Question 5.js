var module = 
{
    code: "ST0502",
    abbr: "FOP",
    year: 1,
    tot_class: 26,
    tot_students: 539
}

var class1 = 
{
    class: "Z01",
    students: 20,
    female: 12,
    male: 8
}

function computeDist()
{
    var Distinction = Math.round(0.05 * module.tot_students);
    return Distinction;
}

//Total number of classes taking FOP
console.log("The total number of students taking " + module.abbr + " is " + module.tot_students);

//Percentage of females students in class1 taking FOP
var femaleStud = (class1.female / class1.students) * 100;
console.log("The percentage of female students taking " + module.abbr + " is " + femaleStud + " percent.");
//Top 5% students who are eligible for distinctions
console.log(computeDist() + " students are eligible for distinctions.");