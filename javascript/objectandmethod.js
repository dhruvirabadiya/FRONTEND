/* Javascript Object Method */

// arrayInstance.with(index,value)

// {
//     let array = [1, 2, 3, 4, 5]
//     array[3] = "box"
//     console.log(array.with(-2),'box');

//     console.log(array);
// }

{
    // let object = {}
    // console.log(object);

    // let ObjectNew = Object({'key1':'javascript','key2':'css'})
    // console.log(ObjectNew);    
    // console.log(ObjectNew.key1);    
    // console.log(ObjectNew.key2);  

    let object = {
        key1: [
            'value1',
            {
                key2: [
                    'value2',
                    {
                        key3: [
                            'value3'
                        ]
                    }
                ]
            }
        ]
    }

    console.log(object.key1);
    console.log(object.key1[1]);
    console.log(object.key1[0]);
    console.log(object.key1[1].key2);
    console.log(object.key1[1].key2[0]);
    console.log(object.key1[1].key2[1]);
    console.log(object.key1[1].key2[1].key3[0]);
}

/* Javascript Object Prototypes */
// Javascript Object.assign()
// Object.create()
// Object.freeze() / Object.isFrozen()
// Object.seal() / // Object.isSealed()
// Object.values()
// Object.keys()

// Javascript Object.assign()

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)
{
    let obj1 = { key1: 'apple', key2: 'banana' }
    let obj2 = { key3: 'grapes', key4: 'orange' }

    let newobject = Object.assign(obj1, obj2)
    console.log(newobject);

}

// Object.create()

// Object.create(proto)
// Object.create(proto, propertiesObject)
{
    let obj1 = { key1: 'apple', key2: 'banana' }
    let obj2 = { key3: 'grapes', key4: 'orange' }
    let newcreate = Object.create(obj1)

    console.log(newcreate.key2);

}

// Object.freeze() / Object.isFrozen()
{
    let obj = { num1: 1, num2: 2 }
    let freeze = Object.freeze(obj)
    obj.num1 = 10
    console.log(freeze);
    console.log(obj);
    console.log(Object.isFrozen(obj));
}

// Object.seal() / // Object.isSealed()
{
    let obj = { prop: 10 }
    let seal = Object.seal(obj)
    obj.newProp = 20;
    console.log(seal);
    console.log(obj);
    console.log(Object.isSealed(obj));
}

// Object.values()
{
    let obj = { val1: 'abc', val2: 'def', val3: 3 }
    let value = Object.values(obj)
    console.log(value);
}

// Object.keys()
{
    let obj = { val1: 'abc', val2: 'def', val3: 3 }
    let key = Object.keys(obj)
    console.log(key);
}