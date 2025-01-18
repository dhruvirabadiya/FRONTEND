/* Javascript Functions */
// let a = 10

// function sum(a,b){
//     return a + b
// }

// console.log(sum(10,20));
// console.log(sum(10,30));

/* Javascript Arrow Functions */
// const arrow = () =>{
//     console.log('hello function');
// }

// arrow()

// const arrow = (a,b) => console.log(a * b);

// const arraysum = ([a,b]) => console.log([a*b]);
// arraysum([10,20])

// arrow(10,20)

/* syncronous and Asyncronous Javascript */

/*
setTimeout
clearTimeout
setInterval
clearInterval
*/

function sum([a, b]) {
  return a * b;
}

setTimeout(()=>{
    console.log(sum([10, 20]));
},2000)

let clearinterval =  setInterval(()=>{
    console.log(sum([10,20]));
    
},2000)

setInterval(()=>{
    clearInterval(clearinterval)
},10000)

