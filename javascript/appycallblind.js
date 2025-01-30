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

    // let profile = {
    //     firstname: "jack",
    //     lastname: "parker",
    //     introduction: function details() {
    //         console.log(`my name is ${this.firstname} ${this.lastname} `);
    //     }
    // };
    // let profile2 = {
    //     firstname: 'peter',
    //     lastname: 'parker'
    // }

    // let result = profile.introduction.bind(profile2)
    // result()
}

{
    // let num1 = [1, 2, 3, 4]
    // let num2 = [5, 6, 7, 8]
    // let concat = num1.concat(num2)
    // console.log(concat);

    // let applydemo = num1.push.apply(num2)
    // console.log(applydemo);

    // let max = Math.max.apply(this, num1)
    // console.log(max);

}

// Asynchronous Javascript

// callback hell 
{
    let farm = 'open'

    if (farm === 'open') {
        setTimeout(() => {
            console.log('farm is open!!');
            setTimeout(() => {
                console.log('coffee bean growth!!!');
                setTimeout(() => {
                    console.log('coffee Harvesting!!!');
                    setTimeout(() => {
                        console.log('coffee bean Separation!!!');
                        setTimeout(() => {
                            console.log('coffee beans Processing and drying!!');
                            setTimeout(() => {
                                console.log('coffee Cleaning, sorting, and grading!!');
                                setTimeout(() => {
                                    console.log('Roasting coffee beans');
                                    setTimeout(() => {
                                        console.log('Now Coffee beans ready for brewing!!!');
                                    }, 8000)
                                }, 7000)
                            }, 6000)
                        }, 5000)
                    }, 4000)
                }, 3000)
            }, 2000)
        }, 1000)
    }
}

