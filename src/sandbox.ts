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
const circumf=(diameter:number)=>
{
    return 2*diameter*Math.PI;
}
console.log(circumf(34));

// 3rd -> arrays and objects
let arr=[23,34,56];
arr.push(45);
// arr.push("pi"); -> will not work because of different type
// to create arrays and objects which will have their type determined later use:
let arr1=[];
let obj={};
// mixed arrays
let mixarr=[23,"pri","yan","shi",45];
mixarr.push(5);
// mixarr.push(true); -> will not work because arr is of type string|int
// array's type is determined at the declaration
// objects :
let student={
    name:"Adam",
    age:20,
    course:"Physics"
};
// student.class="3-A"; -> cannot add any other attribute once declared
student={
    name:"Adam",
    age:20,
    course:"Physics",
    // class:"3-A" -> cannot add the attribute to the object
}

// 4th: explicit types:
let char : string;
let num  : number;
let arr3 : string[] =[];
// union type array
let mixarr2:(string|number)[]=[];
// union type variable
let uid : string|number;

// 5th :dynamic types:
var n1 : any 
var a4 : any[] =["str",23,true];
// for objects 
var obj2 : {name:any,age:number} = {name:"pri",age:21};