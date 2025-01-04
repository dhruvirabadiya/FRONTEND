/* Javascript Number Method */
// Number values represent floating-point numbers like 37 or -9.25.
// The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

// new Number(value)
// Number(value)

{
//   let x = "10";
//   let y = Number(x);
//   console.log(y);

//   console.log(typeof x);
//   console.log(typeof y);
}

{
//   console.log(Number.isFinite(0 / 0));
//   console.log(Number.isFinite(1 / 0));
//   console.log(Number.isFinite(0 / 1));
//   console.log(Number.isFinite(Infinity / 1));
//   console.log(Number.isFinite(-Infinity / 1));
//   console.log(Number.isFinite(Infinity / 0));
//   console.log(Number.isFinite(-Infinity / 0));
//   console.log(Number.isFinite(-Infinity / Infinity));
//   console.log(Number.isFinite(Infinity / -Infinity));
//   console.log(Number.isFinite(NaN / 1));
//   console.log(Number.isFinite(NaN / 0));
//   console.log(Number.isFinite("1" / 0));
//   console.log(Number.isFinite(0 / "1"));
//   console.log(Number.isInteger(10));
//   console.log(Number.isInteger(-10));
//   console.log(Number.isInteger(-10.10));
//   console.log(Number.isInteger(10.10));
//   console.log(Number.isInteger(Number(true)));
//   console.log(Number.isInteger(false));
//   console.log(Number.isNaN());
//   console.log(Number.isNaN(NaN));
//   console.log(Number.isNaN(0/"1"));
//   console.log(Number.isNaN("1"/"1"));
//   console.log(Number.isNaN("1"/1));
//   console.log(Number.isSafeInteger("1"/"1"));
//   console.log(Number.isSafeInteger(65465456545654654654 + 1));
//   console.log(Number.parseFloat(10.10));
//   console.log(Number.parseInt(10.10));
  
}

// /* Number.prototype.toExponential() */
// {
//     let number = 450000
//     let expontial1 = number.toExponential()
//     console.log(expontial1);

//     let expontial2 = number.toExponential(1)
//     console.log(expontial2);

//     let expontial3 = number.toExponential(20)
//     console.log(expontial3);  
// }

// {
//     let number = 450.5465214
//     let fixed = number.toFixed(0)
//     console.log(fixed);
//     let fixed1 = number.toFixed(1)
//     console.log(fixed1);
//     let fixed2 = number.toFixed(2)
//     console.log(fixed2);
// }

// {
//     let number = 450.5465214
//     let precision = number.toPrecision(1)
//     console.log(precision);
//     let precision1 = number.toPrecision(2)
//     console.log(precision1);
//     let precision2 = number.toPrecision(20)
//     console.log(precision2);
// }

// {
//     let number = 10.10
//     let string = number.toString()
//     console.log(string);
//     let value = number.valueOf()
//     console.log(value);
    
// }

/* Javascript Basic Functions */
// function print(){
//     console.log("hello world!!!");
// }

// function print(){
//     console.log('hello javascript');
    
//     return console.log("hello world!!!");    
// }

// print()

const print = function(){
    return console.log('Hello World'); 
}

console.log(print);

/* callback function */
function demo1(callback){
    callback()
    console.log('main function');
    
}

function demo2(){
    console.log('callback function');
}

demo1(demo2)

/* function with arguments */
function sum(a , b , c){
    return a + b + c
}

console.log(sum(2 , 3, 4));
