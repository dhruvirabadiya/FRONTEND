/* Javascript Object Notation */


/* JSON */

{
    let obj = { name: 'bansi', gender: 'female', age: 24 }

    console.log(obj);

    let jsonObj = JSON.stringify(obj)
    console.log(jsonObj);
}


{
    let jsonString = '{"name":"bansi","gender":"female","age":24}';

    console.log(jsonString);

    let parseObj = JSON.parse(jsonString);
    console.log(parseObj);

}

// javascript fetch

{
    async function profileData() {
        let res = await fetch('http://localhost:3000/profile')
        let data = await res.json()
        console.log(data[0].name);
        console.log(data[0].gender);
        console.log(data[0].age);
    }

    profileData()
}