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

// 19)JavaScript Program to Find Armstrong Number in an Interval
// function isArmstrong(num) {
//     let sum = 0
//     let temp = num
//     const digits = String(num).length
//     while (temp > 0) {
//         sum += (temp % 10) ** digits
//         temp = Math.floor(temp / 10)
//     }
//     return sum == num
// }
// function findarmstrongnum(start, end) {
//     const result = []
//     for (let i = start; i <= end; i++) {
//         if (isArmstrong(i)) {
//             result.push(i)
//         }
//     }
//     return result
// }
// console.log(findarmstrongnum(100, 999));

// 20)JavaScript Program to Make a Simple Calculator
// function calculator(num1, num2, calc) {
//     switch (calc) {
//         case '+':
//             return num1 + num2
//         case '-':
//             return num1 - num2
//         case '*':
//             return num1 * num2
//         case '/':
//             if (num2 !== 0) {
//                 return num1 / num2
//             } else {
//                 return "Division by zero is not allowed."
//             }
//         default:
//             return "Invalid operator."
//     }
// }

// const num1 = parseFloat(prompt("Enter The First Number:"))
// const num2 = parseFloat(prompt("Enter The Second Number:"))
// const calc = prompt("Enter A Sign For Calculation")

// const result = calculator(num1, num2, calc)
// alert(`Result: ${result}`);

// 21)JavaScript Program to Find the Sum of Natural Numbers
// let n = 10
// if (n > 0) {
//     const sum = (n * (n + 1) / 2)
//     console.log(`The sum of the first ${n} natural numbers is ${sum}`);
// } else {
//     console.log("Please enter a valid positive integer.");
// }

// 22)JavaScript Program to Check if the Numbers Have Same Last Digit
// const num1 = 456
// const num2 = 176

// const lastdigit1 = num1 % 10
// const lastdigit2 = num2 % 10

// if (lastdigit1 === lastdigit2) {
//     console.log(`The numbers ${num1} and ${num2} have the same last digit: ${lastdigit1}`);
// } else {
//     console.log(`The numbers ${num1} and ${num2} do not have the same last digit.`);
// }

// 23)JavaScript Program to Find HCF or GCD
// function findgcd(num1, num2) {
//     num1 = Math.abs(num1)
//     num2 = Math.abs(num2)

//     while (num2 !== 0) {
//         const temp = num2
//         num2 = num1 % num2
//         num1 = temp
//     }
//     return num1
// }

// const a = 56
// const b = 96
// const gcd = findgcd(a, b);
// console.log(`The HCF (or GCD) of ${a} and ${b} is ${gcd}`);

// 24)JavaScript Program to Find LCM
// function findgcd(num1, num2) {
//     num1 = Math.abs(num1)
//     num2 = Math.abs(num2)

//     while (num2 !== 0) {
//         const temp = num2
//         num2 = num1 % num2
//         num1 = temp
//     }
//     return num1
// }

// function findlcm(num1, num2) {
//     const gcd = findgcd(num1, num2)
//     const lcm = (Math.abs(num1 * num2)) / gcd
//     return lcm
// }

// const a = 15;
// const b = 20;
// const lcm = findlcm(a, b);
// console.log(`The LCM of ${a} and ${b} is ${lcm}`);

// 25)JavaScript Program to Find the Factors of a Number
// function findfactor(num) {
//     const factor = []
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) {
//             factor.push(i);
//         }
//     }
//     return factor
// }
// const number = 36;
// const factors = findfactor(number);
// console.log(`The factors of ${number} are: ${factors.join(', ')}`);

// 26)JavaScript Program to Find Sum of Natural Numbers Using Recursion
// function findsum(n) {
//     if (n !== 0) {
//         return n + findsum(n - 1)
//     } else {
//         return n
//     }
// }

// let n = 5
// console.log(findsum(n));

// 27)JavaScript Program to Guess a Random Number
// function guessnumber() {
//     let random = Math.floor(Math.random() * 10) + 1
//     let number = parseInt(prompt('Guess a number from 1 to 10:'))
//     while (number != random) {
//         number = parseInt(prompt('Guess a number from 1 to 10:'))
//     }
//     if (number == random) {
//         console.log('you guess correct number');
//     } else {
//         console.log('oops number not correct!!!');
//     }
// }
// guessnumber()

// 28)JavaScript Program to Shuffle Deck of Cards
// let cards = ["spades", "diamonds", "club", "heart"]
// const values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
// let deck = []
// for (let i = 0; i < cards.length; i++) {
//     for (let x = 0; x < values.length; x++) {
//         let card = { values: values[x], cards: cards[i] }
//         deck.push(card)
//     }
// }

// for (let i = deck.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i)
//     let temp = deck[i]
//     deck[i] = deck[j]
//     deck[j] = temp
// }

// console.log('first five cards are:');

// for (let i = 0; i < 5; i++) {
//     console.log(`${deck[i].values} of ${deck[i].cards}`);
// }

// 29)JavaScript Program to Display Fibonacci Sequence Using Recursion
// function fibonacci(n) {
//     if (n <= 1) {
//         return n
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// function fibonaccisequence(terms) {
//     if (terms <= 0) {
//         console.log('please enter a positive integer');
//         return
//     }
//     console.log('fibonacci series:');
//     for (let i = 0; i < terms; i++) {
//         console.log(fibonacci(i));
//     }
// }

// let terms = 10
// fibonaccisequence(terms)

// 30)JavaScript Program to Find Factorial of Number Using Recursion
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// let number = 5
// if (number < 0) {
//     console.log("Factorial is not defined for negative numbers.");
// } else {
//     console.log(`The factorial of ${number} is ${factorial(number)}.`);
// }

// 31)JavaScript Program to Convert Decimal to Binary
// let decimal = 25;
// let binary = decimal.toString(2);

// console.log(binary);

// 32)JavaScript Program to Find ASCII Value of Character
// let character = 'A'
// console.log(character.charCodeAt(0));

// 33)JavaScript Program to Check Whether a String is Palindrome or Not
// function ispalindrome(str) {
//     let reversestr = str.split('').reverse('').join('')
//     return str === reversestr
// }

// console.log(ispalindrome('madam'));
// console.log(ispalindrome('hello'));

// 34)JavaScript Program to Find Factorial of Number Using Recursion
// function sortword(str) {
//     return str.split(' ').sort().join(' ');
// }

// console.log(sortword("banana apple orange grape"));

// 35)JavaScript Program to Replace Characters of a String
// function replacechar(str, targetchar, replacechar) {
//     return str.split(targetchar).join(replacechar)
// }

// let string = "hello world"
// let result = replacechar(string, "hello", "hii")

// console.log(string);
// console.log(result);

// 36)JavaScript Program to Reverse a String
// function reversestr(str) {
//     return str.split("").reverse().join("")
// }
// let string = "hello world"
// let reversestring = reversestr(string)

// console.log(string);
// console.log(reversestring);

// 37)JavaScript Program to Create Objects in Different Ways
// 1. Using Object Literals
// let object = {
//     name: "dhruvi",
//     age: 20
// };
// console.log(object);

// 2. Using the new Object()
// let object = new Object()
// object.name = "dhruvi"
// object.age = 20
// console.log(object);

// 3.Using the Object.create() Method
// const Obj = { greet: "Hello" };
// const obj = Object.create(Obj);
// obj.name = "Bob";
// console.log(obj);
// console.log(obj.greet); 

// 38)JavaScript Program to Check the Number of Occurrences of a Character in the String
// function checkcharacter(str , letter){
//      let count = 0
//      for (let i = 0; i < str.length; i++){
//          if(str.charAt(i) == letter){
//             count += 1
//          }
//      }
//      return count
// }

// let string = "hello world"
// let result = checkcharacter(string,"l")
// console.log(result);


// 39)JavaScript Program to Convert the First Letter of a String into UpperCase
// function firstlcapital(str){
//            let capital = str.charAt(0).toUpperCase() + str.slice(1)
//            return capital
// }

// let string = "javascript"
// let result = firstlcapital(string)
// console.log(result);

// 40)JavaScript Program to Count the Number of Vowels in a String
function countvowel(str){
    let count = str.match(/[aeiou]/).length
    return count
}

let string = "hello world"