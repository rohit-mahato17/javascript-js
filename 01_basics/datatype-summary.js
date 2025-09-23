// primitive 

// 7 type: string, Number, Boolearn, null, undefine, symbol , BigInt

// const score = 100 ;
// const scorevalue = 100.9;

// const isLoggedIn = false;
// const outsidetemp = null;
// let userEmail;

// const id= symbol('123');
// const anotherId = sumbol('123')

// console.log(id == anotherId);

// const bigNumber = 1267453298476n;


// Reference (Non prinitive)

//Array, objects, Funtions 

// const heros = ["shaktime", "naagraj", "doga"]
// let Obj = {
//     name: "rohit",
//     age: 22,
    
// }

// function myFuntion(){
//     console.log("hello world");
// }

// myFuntion();

//*************//

// Stack (Primitive), Heap (Non-Primitive)

// let myName = "rohit";

// let another = myName;
// another = "box or code";
// console.log(myName);
// console.log(another);

let userone = {
    email : "user@gmail.com",
    age : 21,
}

let userTwo = userone ;

userTwo.email = "rohit@google.com";

console.log(userone.email);
console.log(userTwo.email);

