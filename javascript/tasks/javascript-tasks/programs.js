// 1) JavaScript Program To Print Hello World
// let msg = "Hello World"
// console.log(msg);

// 2) JavaScript Program to Add Two Numbers
// let num1 = 10
// let num2 = 20
// let add = num1 + num2
// console.log("Addition is:" + add);

// 3) JavaScript Program to Find the Square Root
// let num = 25
// let squareroot = Math.sqrt(num)
// console.log("The square root is:" + squareroot);

// 4) JavaScript Program to Calculate the Area of a Triangle
// let base = 20
// let height = 10
// let area = 0.5 * base * height
// console.log("Area Of Traingle Is:" + area);

// 5) JavaScript Program to Swap Two Variables
// let a = 10
// let b = 20
// let temp
// temp = a
// a = b
// b = temp
// console.log("a:" + a, "b:" + b);

// 6) JavaScript Program to Solve Quadratic Equation
// let a = 1
// let b = -3
// let c = 2
// let discriminat = b * b - 4 * a * c
// if (discriminat > 0) {
//     let root1 = (-b + Math.sqrt(discriminat)) / 2 * a
//     let root2 = (-b - Math.sqrt(discriminat)) / 2 * a
//     console.log("root1:", root1);
//     console.log("root2:", root2);
// } else if (discriminat === 0) {
//     let root = -b / (2 * a)
//     console.log("root:", root);
// } else {
//     console.log("no real roots");
// }

// 7) JavaScript Program to Convert Kilometres to Miles
// const km = 20
// const miles = km * 0.621371
// console.log(`${km} kilomiter =  ${miles} miles`);

// 8) Javascript Program to Convert Celsius to Fahrenheit
// let celsius = 25
// let fahrenhit = (celsius * 9 / 5) + 32
// console.log(`${celsius} °C is = ${fahrenhit} °F`);

//9) Javascript Program to Generate a Random Number
// let randomnum = Math.floor(Math.random() * 100) + 1;
// console.log("Random number: " + randomnum);

// 10)Javascript Program to Check if a number is Positive, Negative, or Zero
// let num = 10
// if (num > 0) {
//     console.log("Number Is Positive");
// } else if (num < 0) {
//     console.log("Number Is Nagative");
// } else {
//     console.log("Number Is Zero");
// }

// 11)Javascript Program to Check if a Number is Odd or Even
// let num = 7
// if (num % 2 === 0) {
//     console.log("Number Is Even Number");
// } else {
//     console.log("Number Is Odd");
// }

// 12)JavaScript Program to Find the Largest Among Three Numbers
// let num1 = 10
// let num2 = 20
// let num3 = 30
// if (num1 >= num2 && num1 >= num3) {
//     console.log(`${num1} is the largest number.`)
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log(`${num2} is the largest number.`)
// } else {
//     console.log(`${num3} is the largest number.`)
// }

// 13)JavaScript Program to Check Prime Number
// let num = 11
// if (num <= 1) {
//     console.log(`${num} is not a prime number.`);
// } else {
//     let isPrime = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false
//             break
//         }
//     } if (isPrime) {
//         console.log(`${num} is a prime number.`);
//     } else {
//         console.log(`${num} is not a prime number.`);
//     }
// }

// 14) JavaScript Program to Print All Prime Numbers in an Interval
// let start = 5
// let end = 20

// for (let num = start; num <= end; num++) {
//     if (num < 2) {
//         console.log(`${num} is not a prime number.`);
//     } else {
//         let isPrime = true
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 isPrime = false
//             }
//         }
//         if (isPrime) {
//             console.log(`${num}`);
//         }
//     }
// }

// 15)JavaScript Program to Find the Factorial of a Number
// let num = 5
// let factorial = 1

// for (let i = 1; i <= num; i++) {
//     factorial *= i
// }
// console.log(`The factorial of ${num} is ${factorial}.`);

// 16)JavaScript Program to Display the Multiplication Table
// let num = 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// 17)JavaScript Program to Print the Fibonacci Sequence
// let num1 = 0
// let num2 = 1
// let next
// for (let i = 1; i <= 10; i++) {
//     console.log(num1);
//     next = num1 + num2
//     num1 = num2
//     num2 = next
// }

// 18)JavaScript Program to Check Armstrong Number
// let num = 153
// let sum = 0
// let temp = num

// while (temp > 0) {
//     let digit = temp % 10
//     sum += digit * digit * digit
//     temp = Math.floor(temp / 10)
// }

// if (sum === num) {
//     console.log(`${num} is an Armstrong number.`);
// } else {
//     console.log(`${num} is not an Armstrong number.`);
// }
