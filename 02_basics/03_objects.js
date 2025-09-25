//object literals

const mysym = Symbol("key1");   //IMP for 

const jsUser = {
    name: "hitesh", 
    "full name":"rohit maato",
    [mysym]: "mykey1",
    age:18,
    lacation: "odisha",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLogicdays: ["manday","saturday"]

}
// jsUser.email = "js sctipt";  //chenges

// console.log(jsUser.email);
// console.log(jsUser.age);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["age"]);
// console.log(jsUser[mysym]);


// jsUser.freeze(jsUser);

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js");
}
jsUser.greeting();
console.log(jsUser.greeting);