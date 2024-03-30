let car = {
    Name: "TATA",
    Model: "2022",
    Color: "Blue", 
    Summary : function(){
        return "The Name of the car is " + this.Name + " and car model is " + this.Model + " and car color is "+ car.Color
    }
}
// console.log(car.Name);
// console.log(car["Color"]);
// console.log(car.Summary());

// for..in loop

let x = " "
for( key in car){
    x += car[key] + "\n"
    // console.log(car[key]);
}
// console.log(x);


const student = { 
    Name : "Akash",
    College : "XYZ",
    Branch : "CSE",
    Dress : "Random",
    ID : "008"
}

let a = " "
for(let y in student){
    a += student[y] + " ";
}
// console.log(a);

/* Nested Array and objects */

const person = {
    name : "Akash",
    age : "22",
    cars: [
        {
            name : "BMW",
            Model: ["xx20","j49","kd03"]
        },
        {
            name : "TATA",
            Model : ["hf9", "83nd", "6ge"]
        },
        {
            name : "Audi",
            Model : ["hdh8", "dg83", "gdte8"]
        }
    ]
}

let container = " "
for(let i in person.cars){
    container += person.cars[i].name + " "

    for(let j in person.cars[i].Model){
        container += person.cars[i].Model[j] + "\n"
    }
}
console.log(container);