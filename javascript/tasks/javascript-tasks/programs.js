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
// function countvowel(str){
//     let count = str.match(/[aeiou]/gi).length
//     return count
// }

// let string = "hello world"
// let result = countvowel(string)
// console.log(result);

// 41)JavaScript Program to Remove a Property from an Object
// let person = {
//     name : "dhruvi",
//     age : 20,
// }

// console.log(person);
// delete person.age
// console.log(person);

// 42)JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
// let checkchar = (string, startindex, endsindex) =>{
//        let startscheck = string.startsWith(startindex)
//        let endscheck = string.endsWith(endsindex)

//        return startscheck && endscheck
// };

// let string = "hello world"
// let startindex = "a"
// let endsindex = "d"

// if(checkchar(string, startindex, endsindex)){
//     console.log(true);
// }else{
//     console.log(false);
// }

// 43)JavaScript Program to Check if a Key Exists in an Object

// let set1 = new Set()
// const obj1 = {key1 : 1}
// set1.add(obj1)

// console.log(set1.has(obj1));

// 44)JavaScript Program to Clone a JS Object
// let cloneobject = {a : 1, b : 2, c : 3}
// let Clone_Object = {};
// Clone_Object = Object.assign({},cloneobject)
// console.log(Clone_Object);

// 45)JavaScript Program to Loop Through an Object
// const student = {
//     name : "dhruvi",
//     age : 20,
//     hobbie : ['music', 'coding']
// };

// for(let key in student){
//     let value = student[key]
//     console.log(key + " - " + value);
// }

// 46)JavaScript Program to Merge Property of Two Objects
// let object1 = {
//     name : "dhruvi",
//     age : 20
// };

// let object2 = {
//     gender : "female",
//     passion : "devloper"
// }

// let assign = Object.assign(object1,object2)
// console.log(assign);

// 47)JavaScript Program to Count the Number of Keys/Properties in an Object
// const student = {
//     name : "dhruvi",
//     age : 20,
//     hobbie : ['music', 'coding'],
//     passion : 'devloper',
//     gender : "female"
// };

// let count = 0

// for (key in student){
//      ++count
// }

// console.log(count);

// 48)JavaScript Program to Add Key/Value Pair to an Object
// const object = { language: "html" };
// object.lan = "css";
// console.log(object);

// 49)JavaScript Program to Replace All Occurrences of a String
// let string = "mr red has a red house and a red car"
// let regex = /red/gi
// let newstring = string.replace(regex, 'blue')
// console.log(newstring);

// 50)JavaScript Program to Create Multiline Strings
// let meassage = "this is long meassage\n" +
//     "this is long meassage\n" +
//     "heloo this is javascript"

// console.log(meassage);

// 51)JavaScript Program to Format Numbers as Currency Strings
// const number = new Intl.NumberFormat('en-us', {
//     style: 'currency',
//     currency: 'USD'
// })
// console.log(number.format(2500));

// 52)JavaScript Program to Generate Random String
// function genranstring(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let result = ''
//     for (let i = 0; i < length; i++) {
//         const randomstr = Math.floor(Math.random() * characters.length)
//         result += characters.charAt(randomstr)
//     }
//     return result
// }
// const randomstring = genranstring(10)
// console.log(randomstring);

// 53)JavaScript Program to Check if a String Starts With Another String
// const string = 'hello world'
// const tocheckstring = 'he'
// if (string.startsWith(tocheckstring)) {
//     console.log('the string starts with "he" ')
// } else {
//     console.log(`The string does not starts with "he".`)
// }

// 54)JavaScript Program to Trim a String
// const string = '        hello javascript      '
// const result = string.trim()
// console.log(result);

// 55)JavaScript Program to Convert Objects to Strings
// const person = {
//     name: "dhruvi",
//     age: 20
// }
// const result = JSON.stringify(person)
// console.log(result);
// console.log(typeof result);

// 56)JavaScript Program to Check Whether a String Contains a Substring
// const str = prompt("Enter A String:")
// const checkstr = prompt("Enter a string you want to check")

// if (str.includes(checkstr)) {
//     console.log(`the string contains ${checkstr}`);
// } else {
//     console.log(`the string not conatins ${checkstr}`);
// }

// 57)JavaScript Program to Compare Two Strings
// const string1 = "javascript program"
// const string2 = "JAVASCRIPT PROGRAM"

// // const result = string1.toLowerCase() === string2.toLowerCase()
// const result = string1.toUpperCase() === string2.toUpperCase()

// if(result){
//     console.log('the string are simillar');
// }else{
//     console.log('the string are not simillar');
// }

// 58)JavaScript Program to Encode a String to Base64
// const str = "hello javascript"
// const result = window.btoa(str)
// console.log(result);

// const result1 = window.atob(result)
// console.log(result1);

// 59)JavaScript Program to Replace all Instances of a Character in a String
// const string = "hello html javascript html javascript html"
// const regex = /html/gi
// const newtext = string.replace(regex,'javascript')
// console.log(newtext);

// 60)JavaScript Program to Replace All Line Breaks with
// const string = `i am learning javascript
//                 javascript is fun
//                 javascript is easy`
// const result = string.replace(/(\r\n|\r|\n)/g,'<br>')
// console.log(result);

// 61)JavaScript Program to Display Date and Time
// const date = new Date()
// const n = date.toDateString()
// const time = date.toLocaleTimeString()
// console.log('Date: ' + n);
// console.log('Time: ' + time);

// 62)JavaScript Program to Check Leap Year
// function leapyear(year){
//         if((0 == year % 4) && (0 == year % 100) || (0 == year % 400)){
//             console.log(`${year} is leap year`);
//         }else{
//             console.log(`${year} is not leap year`);
//         }
// }

// const year = 2000
// leapyear(year)

// 63)JavaScript Program to Format the Date
// let currentdate = new Date()
// let day = currentdate.getDate()
// let month = currentdate.getMonth() + 1
// let year = currentdate.getFullYear()

// if(day < 10){
//     day = '0' + day
// }

// if(month < 10){
//     month = '0' + month
// }

// const formatdate = month + '/' + day + '/' + year
// const formatdate1 = day + '/' + month + '/' + year
// console.log(formatdate);
// console.log(formatdate1);

// 64)Javascript Program to Display Current Date
// let date = new Date()
// let currentdate = date.getDate()
// console.log(currentdate);

// 65)JavaScript Program to Compare The Value of Two Dates
// let date1 = new Date()
// let date2 = new Date()

// let comapare1 = date1 > date2
// console.log(comapare1);

// let comapare2 = date1 < date2
// console.log(comapare2);

// let compare3 = date1 >= date2
// console.log(compare3);

// let compare4 = date1 <= date2
// console.log(compare4);

// let comapare5 = date1.getTime() === date2.getTime()
// console.log(comapare5);

// 66)JavaScript Program to Create Countdown Timer
// let countdate = new Date().getTime() + 24 * 60 * 60 * 1000
// let x = setInterval(function(){
//     let now = new Date().getTime()

//     let timeleft = countdate - now

//     const days = Math.floor(timeleft /(1000 * 60 * 60 * 24))
//     const hours = Math.floor((timeleft / (1000 * 60 * 60) ) % 24)
//     const minutes = Math.floor((timeleft / 1000 / 60 ) % 60)
//     const seconds = Math.floor((timeleft / 1000 ) % 60)

//     console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

//     if(timeleft < 0){
//         clearInterval(x)
//         console.log('countdown finished');
//     }

// },2000)

// 67)JavaScript Program to Remove Specific Item From an Array
// function removeitem(array, n) {
//     return array.filter(item => item !== n);
// }
// const result = removeitem([1, 2, 3, 4, 5], 2)
// console.log(result);

// 68)JavaScript Program to Check if An Array Contains a Specified Value
// const array = ['you' , 'will' , 'learn' , 'javascript']
// const value = array.includes('javascript')
// if(value){
//     console.log('array contains value');
// } else{
//     console.log('array does not conatains value');
// }

// 69)JavaScript Program to Insert Item in an Array
// function insertelement() {
//   let array = [1, 2, 3, 4, 5];
//   let index = 3;
//   let element = 8;
//   array.splice(index, 0, element);
//   console.log(array);
// }

// insertelement();

// 70)JavaScript Program to Append an Object to an Array
// function insertobject(arr, obj) {
//   arr.push(obj);
//   console.log(arr);
// }

// let arr = [1, 2, 3, 4, 5];
// let object = { x: 12, y: 18 };
// insertobject(arr, object);

// 71)JavaScript Program to Check if An Object is An Array
// function checkobj(arr) {
//     const result = Array.isArray(arr)
//     if (result) {
//         console.log(`[${arr}] is an array.`);
//     } else {
//         console.log(`${arr} is not an array.`);
//     }
// }

// // const array = [1, 2, 3]
// // const array = { name: "Dhruvi" }
// checkobj(array)

// 72)JavaScript Program to Empty an Array
// function emptyarray(){
//     arr = []
//     return arr
// }

// const array = [1, 2, 3, 4, 5]
// console.log(array);

// const result = emptyarray(array)
// console.log(result);

// 73)JavaScript Program to Add Element to Start of an Array
// const array = [1, 2, 3, 4, 5]
// array.unshift(10)
// console.log(array);

// 74)JavaScript Program to Remove Duplicates From Array
// let array = [10, 20 ,30, 30, 40, 50, 40]
// let set = new Set(array)
// let a1 = [...set]
// console.log(a1);

// 75)JavaScript Program to Merge Two Arrays and Remove Duplicate Items
// let arr1 = [10, 20, 30, 40, 50]
// let arr2 = [30, 40, 50, 60, 70]
// let s = new Set([...arr1,...arr2])
// let a = [...s]
// console.log(a);

// 76)JavaScript Program to Sort Array of Objects by Property Values
// let employeedetails = [
//     {
//         name : "mohan",
//         age : 17
//     },
//     {
//         name :"mohan",
//         age : 30 
//     },
//     {
//         name : "shyam",
//         age : 15
//     },
//     {
//         name : "shyam",
//         age : 17
//     }
// ];

// let compare = (a, b) =>{
//     if(a.age < b.age){
//         return -1
//     }
//     if(a.age > b.age){
//         return 1
//     }
//     return 0
// }

// employeedetails.sort(compare)
// console.log(employeedetails);

// 78)JavaScript Program to Extract Given Property Values from Objects as Array
// function extractvalue(arr, prop){
//     let extractvalue = arr.map(item => item[prop])
//     return extractvalue
// }

// const array = [{a:1, b:2},{a:4, b:5},{a:8,b:9}]
// const result = extractvalue(array,'b')
// console.log(result);

// 79)JavaScript Program to Compare Elements of Two Arrays
// function comparearray (arr1,arr2){
//     const result = JSON.stringify(arr1) == JSON.stringify(arr2)

//     if(result){
//         console.log('the array have same elemaents');
//     }else{
//         console.log('the array have different element');
//     }
// }

// const array1 = [1, 3, 5, 8]
// const array2 = [1, 3, 5, 8]
// comparearray(array1, array2)

// 80)JavaScript Program to Get Random Item From an Array
// let array = [10, 20, 30, 40, 50]
// let i = Math.floor(Math.random() * array.length)
// let r = array[i]
// console.log(r);

// 81)JavaScript Program To Perform Intersection Between Two Arrays
// function intersection(arr1, arr2){
//          return arr1.filter(item => arr2.includes(item))
// }

// const arr1 = [3, 1, 5, 2]
// const arr2 = [5, 2, 7]
// console.log(intersection(arr1, arr2));

// 82)JavaScript Program to Split Array into Smaller Chunks
function splitchunk(arr, chunk){
         for(let i = 0; i < arr.length ; i += chunk){
            let temparray
            temparray = arr.slice(i, i += chunk)
            console.log(temparray);
            
         }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const chunk = 2
splitchunk(array, chunk)