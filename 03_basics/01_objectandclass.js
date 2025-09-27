//object and object

// prototypes in js

// const student = {
//     fullName : "rohit mahato",
//     marks: 95.5,
//     printMarks: function(){
//            console.log("marks=", this.marks);
//     }
// }
// s1 = student;
// // console.log(s1.fullName);
// // console.log(s1.marks);

// s1.printMarks();   

//*******
// const employee = {
//     calcTax(){
//         console.log("taxt rate is 10%");
//     }
// }
// employee.calcTax();

//classes in js

// class carshowroom{
//      start() {
//        console.log("start");
//     }
//     stop(){
//        console.log("stop");
//     }

//     setBrand(brand){
//          this.brandname=brand;
//          console.log(brand);
//     }
// }
// let fortuner = new carshowroom();

// fortuner.start();
// fortuner.setBrand("l car"); 

//constructor
// class carshowroom{
//    constructor(brand,mileage){
//       console.log("create new object");
//       this.brand = brand;
//       this.mileage =mileage;
//    }

//      start() {
//        console.log("start");
//     }
//     stop(){
//        console.log("stop");
//     }


// }
// let fortuner = new carshowroom("fortuner",10);
//    console.log(fortuner);
// let lexus = new carshowroom("fo",12); 

//inheritance 

// class parents {
//    hello() {
//       console.log("hello");
//    }
// }

// class child extends parent {

// }

class Person {
   eat(){
      console.log("eat");
   }
   sleep(){
      console.log("sleep");
   }
}

class Engineer extends Person{
   work (){
      console.log("solve problem, puild some thing");
   }
}

let calltof = new Engineer();
   calltof.work();
   calltof.sleep();
   calltof.eat();