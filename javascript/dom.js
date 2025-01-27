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
    
//    let  dom2 = document.getElementById('firstDiv').innerText
//    console.log(dom2);
// }

// New Element Create In Html Using Javascript

// createElement
// textContent  , innerText
// appendChild
// {
//     let newelement = document.createElement('dbo')
//     console.log(newelement);

//     newelement.textContent = "this is bdo tag"
//     newelement.setAttribute('dir','rtl')

//     document.getElementById('firstdiv').appendChild(newelement)
//     document.querySelector('#firstdiv span i ' ).appendChild(newelement)
//     document.body.appendChild(newelement)
// }

// document.getElementByClassName()
// {
//     let dom = document.getElementsByClassName('box')
//     console.log(dom);
    
//     let colors = ['orange','aqua','slatgray']

//     for(let i = 0;i < 10; i++){
//         dom[i].style.height = "100px"
//         dom[i].style.backgroundColor = `${colors[i]}`
//     }
// }

// document.getElementByName()
// {
//     let divstyle = {
//         height : "100px",
//         width : "100px",
//         background : "purple"
//     }

//     let dom = document.getElementsByName('main')[1]
//     console.log(dom);

//     console.log(dom.style.height = divstyle.height);

//     dom.style.height = "100px"
//     dom.style.width = "100px"
//     dom.style.border = "10px solid black"

// }

// document.getElementByTagName()
// {
//     let dom = document.getElementsByName('span')
//     console.log(dom); 
// }

// addClass , removeClass , toggleClass , classList
{
    function remove(){
        let dom = document.getElementById('demo').classList
        dom.remove('box')
        console.log(dom);  
    }

    function add(){
        let dom = document.getElementById('demo').classList
        dom.add('box')
        console.log(dom);
    }
}