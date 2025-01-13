// 3 types - var , let , const
// var   : [global scope variable] reassigned , redeclaired
// let   : [block scope variable] reassigned , not redeclaired
// const : [block scope variable]  not reassigned , not redeclaired

// var [global scope variable]

// var a = 10;

// {
//     var a = 30;
//     var b = 20;
//     console.log(a);

//     console.log(b);

// }
// console.log(a);

// let [block scope variable]
// let a = 10;
// a = 30;

// {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);

// const [block scope variable]
// {
//     const profile = "john";
//     profile = "john";
//     console.log(profile);

// }

// Javascript Hoisting
// {
//   var x, y, z;

//   x = 10;
//   y = 20;
//   z = 30;

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// {
//   let x, y, z;

//   x = 10;
//   y = 20;
//   z = 30;

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// {
//   const x, y, z;

//   x = 10;
//   y = 20;
//   z = 30;

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }