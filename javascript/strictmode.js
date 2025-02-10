/* javascript strict mode */
// strict mode

// 'use strict'

// var demo = "jupiter"
// console.log(demo);

// let demo1 = "object"
// console.log(demo1);

// firstname = "skill"
// console.log(firstname);

// var a , b, c;
// a = 10;
// b = 20;
// c = 30;

// console.log(a , b , c);

// function sum (){
//     'use strict'
//     a = 20;
//     console.log(a);
    
// }

// sum()

let array = []
let object = {}

console.log(array);
console.log(object);

/* javascript in module ES6 */
/* import export keyword */

export function call(){
    console.log('hello');
}

let names = "javascript"

export default names

let web = "https://fakestoreapi.com/products"
console.log(web);

async function Getdata() {
    let res = await fetch(web)
    let data = await res.json()
    console.log(data);
    
    try{
        let res = await fetch(web)
        let data = await res.json()
        console.log(data);
    }catch{
        console.log(error);
    }

    fetch(web)
    .then(response => response.json())
    .then(json => console.log(json))
}

Getdata()