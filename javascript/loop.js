/* Javascript Loops */

/*

Loops are used to execute the same block of code again and again, as long as a certain condition is true.

In JavaScript we have the following types of loops:

1. for loop
2. while loop
3. do...while loop
4. for...in loop
5. for...of loop

*/

// 1. for loop

// syntax :

// for(initialization ; condition ; increment/decrement){
//     // code to be execute
// }

// {
//     let i = 1;
//     for (i; i <= 10; i++) {
//         console.log(`For loop ${i}`);
//     }
// }

// {
//     for(let i = 10; i > 0; i--){
//         console.log(`For Loop ${i}`);
//     }
// }

// {
//     for(let i = 0; i < 20; i++){
//         console.log(`For Loop ${i}`);
//         i+=1;
//     }
// }

// While Loop...............

// Syntax :

// while(condition){
//     // code to be executed
//     increment/decrement
// }

// {
//     let i = 0

//     while (i <= 10) {
//         console.log(`While Loop ${i}`);
//         i++;
//     }
// }

// do..while Loop.........


// syntax
// do {
//     // code to be executed
//     // increment/decrement
// } while (condition)

// {
//     let i = 0
//     do{
//         console.log(`do while Loop ${i}`);
//         i++;
//     }while(i > 10)
// }

/* Array and Object */

// Array
// {
//     let array = ['🍕', '🍔', '🍟', '🌭', '🍿', '🍞', '🥪', '🌮']

//     console.log(array);
//     console.log(array.length);
//     array[7] = "🍟"
//     console.log(array);
//     console.log(array[0] = "");
//     console.log(array);

// }

// Object
// {
//     let profile = {
//         name: 'Rakesh',
//         age: 45,
//         email: `Rakesh@gmail.com`,
//         occupation: 'farmer'
//     }
//     console.log(profile);

// }

//  for...in loop
// {
//     let device = {
//         devicename: "laptop",
//         price: 50000,
//         brand: "hp pavalion",
//         color: "white"
//     }
//     console.log(device.devicename);

//     for (key in device) {
//         console.log(`${key} = ${device[key]}`);
//     }
// }

// for...of loop
// {
//     let array = [1, 2, 3, 4, 5, 6]

//     for (value of array) {
//         console.log(`${value * 2}`);

//     }
// }