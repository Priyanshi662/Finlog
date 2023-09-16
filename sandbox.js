// 1st
// const n="Mario";
// console.log(n);
// const inputs=document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input=>{
//     console.log(input);
// });
// 2nd -> types basics
// let na="mario";
// na=2; -> gives error because we cant assign value of different type
// can specify type of values in function parameters so that correct type is passed
var circumf = function (diameter) {
    return 2 * diameter * Math.PI;
};
console.log(circumf(34));
// 3rd -> arrays and objects
var arr = [23, 34, 56];
arr.push(45);
// arr.push("pi"); -> will not work because of different type
// to create arrays and objects which will have their type determined later use:
var arr1 = [];
var obj = {};
// mixed arrays
var mixarr = [23, "pri", "yan", "shi", 45];
mixarr.push(5);
// mixarr.push(true); -> will not work because arr is of type string|int
// array's type is determined at the declaration
// objects :
var student = {
    name: "Adam",
    age: 20,
    course: "Physics"
};
// student.class="3-A"; -> cannot add any other attribute once declared
student = {
    name: "Adam",
    age: 20,
    course: "Physics",
    // class:"3-A" -> cannot add the attribute to the object
};
