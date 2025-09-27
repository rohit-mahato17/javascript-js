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
class carshowroom{
   constructor(brand){
      console.log("create new object");
      this.brand = brand;
      // console.log(brand);
   }

     start() {
       console.log("start");
    }
    stop(){
       console.log("stop");
    }


}
let fortuner = new carshowroom("fortuner");
let lexus = new carshowroom();