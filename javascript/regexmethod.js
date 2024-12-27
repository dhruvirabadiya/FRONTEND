/* javascript string match and matchAll Method */

// console.log(/[0-9]/);
// match(regexp)
{
    let str = "Dog is very cute and cat is lovable but dog is danger and Cat is wound"
    let regex = /dog/gi
    let demo = str.match(regex)
    console.log(demo);
    
}