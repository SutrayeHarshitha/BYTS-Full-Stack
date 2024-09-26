// let logic=function(z){
//     return z+1;
// }
// let res=logic(10);
// console.log(res);

//1.normal function
// function square(x){
//     return x*x;
// }


//2.function expression
// let square=function(x){
//     return x*x;
// }

// 3. arrow function
// let square=(x)=>{
//     return x*x;
// }
// let res=square(4);
// console.log(res);

/*let square1 = (x) => {
    return x * x;
}*/
// let add = (a,b) => a+b;
// let res = add(3,5)
// console.log(res);


// arrow function
// different combination of javascript arrow function
// const fn1 = () => 100; // () bracket is mandatory when you don't have any parameter
// const fn2 = x => x*10; // () bracket is optional when you have only one parameter
// const fn3 = (x) => x*10;
// const fn4 = (a,b) => a+b;

// let r1 = fn1();
// console.log(r1);

// let r2 = fn2(10);
// console.log(r2);

// let r3 = fn3(10);
// console.log(r3);

// let r4 = fn4(8,1);
// console.log(r4);

// 
// let arr = [10,20,30];
// let x = arr;
// arr[1] = 200;
// console.log(x);

// function fn(x) {
//     x[1] = 200;
// }


// let arr = [10,20,30];
// fn(arr);
// console.log(arr);

// 

//  if a func is return anything by default itwill return undefined.
// function fn() {}
// res = fn();
// console.log(res);


// 

//passing func as parameter to another function
// const fun1 = (x) => x*2; //10*2
// const fun2 = (x) => x*3; //10*3
// function logic(a,b,value) {
//     return a(value) + b(value); // 20+30
// }
// let res = logic(fun1,fun2,10);
// console.log(res);  //10


//  

//function in function

function fn() {
    let add = (a,b) => a+b;
    return add;
    //here we are able to return a fucnction
    // bcz, in js,functions are treated as normal variable
}

let addition = fn();
let result = addition(10,20);
console.log(result);