/* Ajax Method */

// {
//     function getdata(){
//         let xhttps = new XMLHttpRequest()

//         xhttps.onreadystatechange = function(){
//             if(this.readyState === 4 && this.status === 200){
//                 document.getElementById('output').innerHTML = this.responseText
//             }else{
//                 document.getElementById('output').innerHTML = "page not found"
//             }
//         }
//         xhttps.open('GET','demo.txt',true)
//         xhttps.send()
//     }

// }

async function getdata(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json()
    console.log(data);

    data.map((item)=>document.getElementById('output').innerHTML = item.title)
    data.map((item)=>document.write(`${item.title}`))
    
}