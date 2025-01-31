//local storage data
// function setData() {
//     localStorage.setItem('user', 'abcd')
//     localStorage.setItem('email', 'abcd@gmail.com')
//     localStorage.setItem('password', 'abcd123')
//     alert("Data Stored in LocalStorage!")
// }

const { log } = require("async")

// function getData() {
//     let users = localStorage.getItem('user')
//     document.getElementById('output').innerHTML = users
// }

// function removeData() {
//     localStorage.removeItem('user')
// }

// function clearData() {
//     localStorage.clear()
// }

/*   Session Storage  */
function sessionSet() {
    sessionStorage.setItem('user', 'abcd')
    sessionStorage.setItem('email', 'abcd@gmail.com')
    sessionStorage.setItem('password', 'abcd123')
}

function sessionGet() {
    let email = sessionStorage.getItem('email')
    document.getElementById('output').innerHTML = email
}

function sessionRemove() {
    sessionStorage.removeItem('user')
}

function removeData() {
    sessionStorage.clear()
}