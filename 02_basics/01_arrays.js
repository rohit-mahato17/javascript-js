//array

// const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr[0])

// console.log(myArr.length);
// for(let i=0; i<5; i++){
//     console.log(myArr.length);
// }

// let array=["red","green","dark"];
// array.push("orange","lite red");
// console.log(array);

// value = array

// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }


// const array = ['a','b','c'];

// const iterator = array.entries();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// const a= ['a','b','c'];
// for(const [index,element]of a.entries()){
//     console.log(index, element);
// }

const array=[1,2,3,4,5];

// array.push(6,7,8,9);
// array.pop();
// console.log(array);


// array.unshift(9);  //add value on start
// array.shift();     //remove the value

//  give the result is true or false
// console.log(array.includes(9));  //false
// console.log(array.includes(5));  //true

// const newArr = array.join()

// console.log(array);
// console.log(typeof newArr);

//slice, splice

console.log("A ", array);

const myn1 = array.slice(1,3)

console.log(myn1);
console.log("B ", array);

const myn2 = array.splice(1,3);
console.log("C ", array);
console.log(myn2);