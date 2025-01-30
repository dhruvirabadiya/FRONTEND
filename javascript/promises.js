//javascript promises
// Syntax:
// {
//     new Promise(function (resolve, reject) { })
// }

// {
//     let promise = new Promise(function(resolve,reject){})
// }

// {
//     let value = true
//     let DataModule = new Promise(function (resolve, reject) {
//         if (value) {
//             resolve('DataModule Complate Successfully!!!')
//         } else {
//             reject('DataModule is not Complate!!!')
//         }
//     })
//     DataModule.then((result) => {
//               console.log(result);
//     }).then(()=>{
//         console.log("program is complate!!!");
//     }).then(()=>{
//         console.log("hi javascript!!!");
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

// {
//     let value = true
//     let DataModule = new Promise(function(resolve , reject){
//         reject('abcdefgh')
//         resolve('abcdefghijklm')
//     })
//     DataModule.then((result)=>{
//         console.log(result);
//     }).then(()=>{
//         console.log('program is complate!!!!');
//     }).then(()=>{
//         console.log('hi javascript!!!');
//     }).catch((error)=>{
//         console.log(error);
//     })
// }


// {
//     let kayo = 'sick'
//     let kayopromise = new Promise((resolve, reject) => {
//         if (kayo === 'healthy') {
//             resolve('kayo is healthy')
//         } else {
//             reject('kayo is sick')
//         }
//     })

//     kayopromise.then((result) => {
//         console.log(result);
//     }).then(() => {
//         console.log('I Have Cake And I am Happy!!!');
//     }).catch((error) => {
//         console.log(error);
//     }).finally(() => {
//         console.log('I Still Have a Party');
//     })
// }

let kayo = 'sick';
let kayopromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (kayo === 'healthy') {
            resolve('kayo is healthy');
        } else {
            reject('kayo is sick');
        }
    }, 5000);
}).then((result) => {
    console.log(result);
}).then(() => {
    console.log('i am present');
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('i still have party!!');
});

async function Schoolattandance() {
    return new Promise((resolve, reject) => {
        if (kayo === 'healthy') {
            resolve('kayo goes to school!!!!')
        } else {
            reject('go to hospital')
        }
    }).then((result) => {
        console.log(result);
    }).then(() => {
        console.log('i am present');
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log('I Still Have a Party!!');
    })
}

async function kayolife() {
    let promise1 = await kayopromise
    let promise2 = await Schoolattandance()
}

kayolife()