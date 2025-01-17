/* Javascript Object Method */

// arrayInstance.with(index, value)
{
    let Object1 = {}
    console.log(Object1);

    let objectnew = Object({'key1':'javascript'})
    console.log(objectnew.key1);
    console.log(objectnew['key1']);
    
    let object = {
        key1:['value1',
            {
                key2:['value2',{
                                key3:['value3']
                }
            ]
                
            }
        ]
    }
    
    console.log(object.key1);
    console.log(object.key1[1].key2[1].key3);
}

/* Javascript Object Prototypes */
// Javascript Object.assign()

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

{
    let obj1 = {key:'apple',key2:'kiwi'}
    let obj2 = {key3:'orange',key4:'banana'}
    let newobject = Object.assign(obj1,obj2)
    console.log(newobject);
    
}

// Object.create()

// Object.create(proto)
// Object.create(proto, propertiesObject)
{
    let obj1 = {}
}
