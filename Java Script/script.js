//optional chaining -- topic

// let college = {
//     address: {
//         city: "nandyal",
//         pincode: 518501,
//     }
// }
// console.log(college?.area?.street); //undefined

//  let obj = {
//      name: "Alice",
//      address: {
//          street: "123 main",
//          city: "nandyal",
//          zipCode: {
//              code: "1234",
//              extension :"567"
//          }
//      }
//  }
//  console.log(obj.address.zipCode.code);

////////////////////////////////////////

//  Array Destructuring -- topic

// array destructuring
// let [a,b] = [0,"hello"];
// console.log(a,b);    //  0 hello

// array destructuring
//var [x,y] = [10,20,30,40]; //x=10,y=20,
//console.log(x,y);
//  x is stored with 10 and y is stored with 20 remaining all ignored(undefined)

//var [a1,b1] = [10];  //a1=10, b1 = undefined
//console.log(a1,b1); 

// var[a,b] = [10,20]; //a=10,b=20
// var[a,b] = [10,20,30,40];  //a=10,b=20, remaining undefined
// var[a,b] = [10]; //a=10, b = undefined
// var[b,c,a] = ["hello",123.123,{name:'kio'}];
//b='hello'    c=123.123   a={name:'kio'}

//... -> rest operator , spread operator
//rest operator -> used to store rest of the values
//spread operators -> used to spread values 
                    //from current structure

// var[a, ...b] = [10,20,30,40];
// //a=10, b=[20,30,40]

// var arr = [[10,20,30],[50,60]];
// console.log(arr); // [[10,20,30],[50,60]]
// // to keep in single array use (spread operator)

// var arr = [...[10,20,30],...[50,60]];
// console.log(arr);  //[10,20,30,50,60]


// let a = [10,20];
// let b = a;
// a.push(30);
// console.log(a,b); //[10,20,30] [10,20,30]
// a=[10,20];
// console.log(a,b); 


// let a = [10,20,30];
// let b= a;
// //a.push(40);
// a = [...a, 40]; //using this code.
// //instead of .push method,
// //so that I can create new refernce

// let result = Object.is(a,b);
// console.log(result);
// true but i want false and value of a should be [10,20,30,40]


//Object destructing-- topic
// let { name, value } = {value : 123, name: 'harshu'};
// //in object destructing, values are assigned based on properties within the object.
// console.log(name); //harshu
// console.log(value); //123


// const obj = {age : 5, name1 : 'harshu', };
// const {age} = obj;
// console.log(age);
// const {name1} = obj;
// console.log(name1);
//the only values where we required can be 

// ///////////////////////////////


// Map Function: -

// let arr = [4,8,3,2,6];
// let fn=(x) => x*10;
// let res_arr = arr.map(fn);
// console.log(res_arr);  //[40,80,30,20,60]

//
// let arr = [4,8,3,2,6];
// //accept x and return x*10yyyy
// let result_arr = arr.map((x)=> {
//     return x * 10;
// }); // ☝we will keep our map logic like this only in all our REACT application.
// console.log(result_arr);



//////////////////////////////

//Map rules:

// we are suppose to pass a function to map
//but that function has some rules those rules are :
// 1. parameters :
// -1. (value)
// -2. (value,index)
// 2.return :
// -that function must return something

// let arr = [4,8,3,2,6];
// let res1 = arr.map((value) => {
//     return value * 10;
// });
// let res2 = arr.map((value,index) => {
//     return value * index;
// })

// console.log(res1); //[40,80,30,20,60]
// console.log(res2); //[0,8,6,6,24]


// let array = [4,8,3,2,6];
// let stage1 = array.map((value) => {
//     return value * 11;
// });
// let stage2 = stage1.map((value) => {
//     if(value%2 == 0) {
//         return value + 5;
//     }
//     else {
//         return value+10;
//     }
// })
// console.log(stage1);
// console.log(stage2);


/////////////////////////////////

//filter rules:

// we are suppose to pass a function to map
//but that function has some rules those rules are :
// 1. parameters :
// -1. (value)
// -2. (value,index)
// 2.return :
// -that function must return boolean

// let arr =[1,2,3,4,5];
// let odd_arr = arr.filter((value) => {
//     return value%2 != 0;
// });
// console.log(odd_arr);  //[1,3,5]

/////////////////////////////////////////////////

// setTimeout --topic

// setTimeout(() => {
//     console.log("hai..😍");
// }, 5000);


// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");
// setTimeout(() => {
//     console.log("hai...🥰");
// }, 1000);
// console.log("hello 4");
// console.log("hello 5");
// console.log("hello 6");

// let timeout_1_id = setTimeout(() => {
//     console.log("timeout 1 ...🥰");
// }, 5000);
// let timeout_2_id = setTimeout(() => {
//     console.log("timeout 2 ...🥰");
// }, 10000);

// clearTimeout(timeout_2_id);
// //the above code will cancelthe second



let count = 0;
let interval_id = setInterval(() => {
    console.log("hello ....", count++);
}, 1000);

setTimeout(() =>  {
    clearInterval(interval_id);
    console.log("cancel interval:",interval_id);
},5000);