// function call , apply and bind method

// call method
// {
//     function sum(a,b){
//             return a + b
//     }

//     let result = sum(5,10)
//     console.log(result);
    
// }

// with call method
// {
//     function sum(a,b){
//          return a + b
//     }

//     // let result = sum.call(this,10,10)
//     // let result = sum.call(NaN,10,10)
//     // console.log(result);
    
//      let result = sum.apply(this,[10,10])
//      console.log(result);
     
// }

{
    // let profile = {
    //     firstname : "jack",
    //     lastname : "martin",
    //     discription(age,email){
    //         console.log(`my name is ${this.firstname} ${this.lastname} and my age is ${age} and email is ${email}`);     
    //     }
    // }
    // // profile.discription(45,'example@gmail.com')
    // profile.discription.call(profile,45,'example@gmail.com')
    // profile.discription.call(profile,[45,'example@gmail.com'])

    let profile = {
         firstname : "piter",
         lastname : "parker",
         introduction:function details(){
            console.log(`my name is ${this.firstname} ${this.lastname} `);  
         }
    }
}