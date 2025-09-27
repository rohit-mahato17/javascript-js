//object and object

// prototypes in js

const student = {
    fullName : "rohit mahato",
    marks: 95.5,
    printMarks: function(){
           console.log("marks=", this.marks);
    }
}
s1 = student;
// console.log(s1.fullName);
// console.log(s1.marks);

s1.printMarks();   