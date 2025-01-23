/* Javascript alert() */

function Clicks(){
    return alert("hi i am javascript")
}

/* Javascript prompt() */
// function User(){
//     return prompt("enter your name")
// }

// console.log(User());


// function User(){
//     let names = parseInt(prompt('username'))
//     return names
// }

// let value = User()
// console.log(value);

/* Javascript conform() */
// const Conformation = () =>{
//     return console.log(confirm("are you a devloper!!!!"));
// }

/* Javascript Array Distructuring */
{
    let array = [1, 2, 3, 4, 5]
    const [num1, num2, num3, num4, num5] = array
    console.log(array);
    
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    console.log(num5);
    
}

/* Javascript Object Distructuring */
{
     let profile = {
        name : 'dhruvi',
        age : 20,
        email : 'dhruvi@gmail.com'
     }

    const {name, age, email} = profile
    console.log(profile);

    console.log(name);
    console.log(age);
    console.log(email);
}