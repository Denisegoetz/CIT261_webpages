
//*** add method at creation of object - HARDCODED OBJECT***//
let Person = {
     fname: "Sue",
     Lname: "Brown",
       job: "Teacher",
       age: 46,
   display: function() {
     return this.fname + " " + this.Lname + " works as a " + this.job + " at age " + this.age;},
 updateAge: function() { return ++Person.age; }
};

// call message function in Person object //
document.getElementById("person").innerHTML = "Person Object -  " + Person.display();
document.getElementById("ageChange").innerHTML = "Next year " + Person.fname + " will be " + Person.updateAge() + "."; 


//*** add method at creation of object - CONSTRUCTOR OBJECT***//
let People = function(fname, Lname, job, age = 20){ 
     this.fname = fname;
     this.Lname = Lname;
     this.job = job;
     this.age = age;
     this.display = function() {
         return  this.fname + " " + this.Lname + " works as a " + this.job + " at age " + this.age;
       };
     this.updateAge = function() { return ++People.age; }
};

let people1 = new People("Sue", "Smith", "Teacher", 42);
let people2 = new People("John", "Jones", "Pilot");

document.getElementById("people1").innerHTML = "People Object #1-  " + people1.display();
document.getElementById("people2").innerHTML = "People Object #2-  " + people2.display();


//*** add prototype  object - OBJECT.CREATE() ***//

const Car = {
      name: "name",
      make: "make",
     miles: 0,
     price: 30000,
     drive() {return "Test drive a car.";},
     display() { return this.name + ", by " + this.make + " is " + this.price + " dollars."; }
    };

document.getElementById("car").innerHTML = "Car.display(): " + Car.display();


// econo Use Car Prototype to create Car object
    const econo = Object.create(Car);
    econo.name  = "Civic";
    econo.make  = "Honda";
    econo.miles = 5;

document.getElementById("econo").innerHTML = "econo.display(): " + econo.display();




