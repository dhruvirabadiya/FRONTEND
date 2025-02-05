// Javascript Function Closure
// function sum(){
//     return 4 + 4
// }

// console.log(sum());

// {
//     function print(name){
//               function greet(){
//                 console.log('name is ', name);
//               }
//               greet()
//     }
//     print ('skillqode')
// }

// {
//     function print(name){
//              function greet(){
//                 console.log('name is',name);
                
//              }
//              return greet
//     }

//     let demo = print('skillqode')
//     console.log(demo);
//     console.log(demo);
 
// }

// {
//     function sum(){
//         let num = 0
//         function multi(){
//             return num = num + 1
//         }
//         return multi()
//     }

//     console.log(sum());
//     console.log(sum());
    
// }

// {
//     function multiply(x){
//              function add(y){
//                 return x*y
//              }
//              return add
//     }

//     // let demo = multiply(1)
//     let demo = multiply(2)
//     let demo1 = multiply(2)
//     console.log(demo(2));
//     console.log(demo1(2));
// }

{
    if(Math.random()>0.5){
        var x = 1
    }else{
        var x = 2
    }
    console.log(x);
}