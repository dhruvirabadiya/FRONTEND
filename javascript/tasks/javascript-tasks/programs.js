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
let a = 1
let b = -3
let c = 2
let discriminat = b * b - 4 * a * c
if (discriminat > 0) {
    let root1 = (-b + Math.sqrt(discriminat)) / 2 * a
    let root2 = (-b - Math.sqrt(discriminat)) / 2 * a
    console.log("root1:", root1);
    console.log("root2:", root2);
} else if (discriminat === 0) {
    let root = -b / (2 * a)
    console.log("root:", root);
} else {
    console.log("no real roots");
}
