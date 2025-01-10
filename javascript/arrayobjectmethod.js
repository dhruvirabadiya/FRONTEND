/* Javascript Array */
// {
//     let array = [undefined]
//     console.log(array);

//     array.push('item-1')
//     array.push('item-2')
//     console.log(array);
//     console.log(array.length);
//     console.log(typeof array);
//     array.length = 10
//     console.log(array);
//     array.push('item-3')
//     console.log(array);
//     array[5] = 'item-5'
//     console.log(array);
//     array[4] = 'item-4'
//     console.log(array);
//     array[3] = 'item-3'
//     console.log(array);

// }

{
    // let array1 = []
    // console.log(array1);
    // let array2 = new Array(10, 20)
    // console.log(array2);
    // array2.push(30)
    // console.log(array2);
}

{
    // Array.from()

    // Array.from(arrayLike)
    // Array.from(arrayLike, mapFn)
    // Array.from(arrayLike, mapFn, thisArg)
    // let array = [1, 2, 3, 4, 5]
    // console.log(array);
    // let demo = Array.from(array, (item) => item * item)

    // console.log(demo);
    // console.log(array);
    // let copArray = [...array, 6]
    // console.log(copArray);
    // copArray.push(7)
    // console.log(copArray);
    // console.log(array);

    // let demo1 = []
    // console.log(Array.isArray(demo1));
}

{
    // Array.of()

    // Array.of()
    // Array.of(element1)
    // Array.of(element1, element2)
    // Array.of(element1, element2, /* …, */ elementN)

    // let array = Array.of(1, 2, 3, 4, 5, 6)
    // console.log(array);
}

{
    // Array.prototype.at()
    // at(index)

    // let array = ['🌺', '🌻', '🌼', '🌷', '🥀', '☘', '🌴', '🌹', '💐', '🌸']
    //   0     1      2     3      4     5     6     7      8     9
    // console.log(array);
    // console.log(array.at(5));

}

{
    // Array.prototype.concat()
    // concat()
    // concat(value1)
    // concat(value1, value2)
    // concat(value1, value2, /* …, */ valueN)

    // let array = [1, 2, 3]
    // let array1 = [4, 5, 6]
    // let array2 = [7, 8, 9]
    // console.log(array.concat(array1, array2));
}

{
    // Array.prototype.copyWithin()
    // copyWithin(target, start)
    // copyWithin(target, start, end)

    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // console.log(array);
    // console.log(array.copyWithin(3));
    // console.log(array.copyWithin(2, 4));
    // console.log(array.copyWithin(4, 3, 7));
}

const element = 4
let secondelement = element
let firstelement = element - secondelement

for (let i = 0; i < element; i++) {
    console.log(`firstelement:${firstelement},secondelement:${secondelement}`);
    firstelement = secondelement
    secondelement = firstelement + element

}