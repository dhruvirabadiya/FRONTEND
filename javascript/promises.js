//javascript promises
// Syntax:
// {
//     new Promise(function (resolve, reject) { })
// }

// {
//     let promise = new Promise(function(resolve,reject){})
// }

{
    let value = true
    let DataModule = new Promise(function (resolve, reject) {
        if (value) {
            resolve('DataModule Complate Successfully!!!')
        } else {
            reject('DataModule is not Complate!!!')
        }
    })
}