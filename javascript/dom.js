/* Javascript DOM */
/* Document Object Model */

// function styles(){
//     let dom = document.querySelector('div')
//     dom.setAttribute('id','firstdiv')
//     document.getElementById('firstdiv').style.backgroundColor = "red"
// }

/* Document.getElementById() */
// {
//     let dom = document.getElementById('firstdiv').innerHTML
//     console.log(dom);
    
//     let dom1 = document.getElementById('firstdiv').textContent
//     console.log(dom1);
    
// }

// New Element Create In Html Using Javascript

// createElement
// textContent  , innerText
// appendChild
{
    let newelement = document.createElement('dbo')
    console.log(newelement);

    newelement.textContent = "this is bdo tag"
    newelement.setAttribute('dir','rtl')
    
}