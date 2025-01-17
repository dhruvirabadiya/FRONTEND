/* Javascript Array */
// Array.from()
// Array.of()
// Array.prototype.at()
// Array.prototype.concat()

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

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(array);
    console.log(array.copyWithin(3));
    console.log(array.copyWithin(2, 4));
    console.log(array.copyWithin(4, 3, 7));
}

// Array.prototype.find()
let array = [1, 2, 3, 4, 15, 20, 35, 20, 60]
let findarray = array.find((element) => element > 20)
console.log(findarray);

// Array.prototype.findIndex()
let array1 = [1, 12, 18, 22, 45, 98]
let findeindexarray = array1.findIndex((element) => element > 10)
console.log(findeindexarray);

// Array.prototype.findLast()
let array2 = [4, 8, 35, 8, 40, 20]
let findlast = array2.findLast((element) => element > 20)
console.log(findlast);

// Array.prototype.findLastIndex()
let array3 = [8, 20, 10, 50, 6, 40]
let findlastindex = array3.findLastIndex((element) => element > 6)
console.log(findlastindex);

// Array.prototype.join()
const element = ['abc', 'def', 'hij', 'klm', 'opq']
console.log(element.join('-'));

// Array.prototype.lastIndexOf()
let animal = ['tiger', 'penguin', 'beer', 'dear', 'lion']
console.log(animal.lastIndexOf('abc'));

// Array.prototype.pop()
let color = ['white', 'red', 'green', 'yellow']
console.log(color.pop());
console.log(color);

// Array.prototype.push()
let number = [10, 20, 30, 40, 50]
console.log(number.push(80));
console.log(number);

// Array.prototype.reverse()
let array5 = [10, 20, 30, 40, 50, 60]
console.log(array5.reverse());

// Array.prototype.shift()
let array6 = ['abc', 'def', 'efg', 'hij']
let shift = array6.shift()
console.log(array6);
console.log(shift);

// Array.prototype.unshift()
let array10 = [1, 2, 3, 4, 5]
let unshift = array10.unshift(6, 7)
console.log(array10);

// Array.prototype.includes()
let array7 = [1, 2, 3, 4, 5]
console.log(array7.includes(2));

// Array.prototype.splice()
let array8 = ['jan', 'feb', 'april', 'jun']
// console.log(array8.splice(1));
console.log(array8.splice(1, 1, 'july', 'augst'));
console.log(array8);

// Array.prototype.entries()
let array9 = ['a', 'b', 'c', 'd']
let entries = array9.entries()
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

// Array.prototype.values()
let array11 = ['a', 'b', 'c']
let values = array11.values()

for (const value of values) {
    console.log(value);
}

// * Array.every */

// every(callbackFn)
// every(callbackFn, thisArg)
{
    // let num = [10, 20, 40, 50, 80]
    let num = [110, 210, 140, 510, 180]
    let every = num.every((num) => num > 50)
    console.log(every);
}

// * Array.some */

// some(callbackFn)
// some(callbackFn, thisArg)
{
    //    let num = [10, 20, 40, 50, 80]
    let num = [110, 210, 140, 510, 180]
    let some = num.some((num) => num < 50)
    console.log(some);
}

// Array.fill

// fill(value)
// fill(value, start)
// fill(value, start, end)
{
    let num = [10, 45, 20, 30, 80, 50]
    let fill = num.fill(10, 0, 4)
    console.log(fill);
}

// Array.flat()

// flat()
// flat(depth)
{

    let array = [10, 20, 30, [40, 50, 60, [70, 80, 90]]]
    console.log(array);
    let flat = array.flat(2)
    console.log(flat);

    flat.map((item) => console.log(item))
    console.log(array);

}
// Array.flatMap()
// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)

{
    let array = [1, 2, 3, 4, 5]
    let flatmap = array.flatMap((item) => item >= 2 ? [2, 1] : item)
    console.log(flatmap);
    console.log(array);
}

// Array.reduce()
// reduce(callbackFn)
// reduce(callbackFn, initialValue)
{
    let num = [10, 20, 30, 40, 50]
    let reduce = num.reduce((prev, next) => prev + next)
    console.log(reduce);
}

//Array.reduceRight()
// reduceRight(callbackFn)
// reduceRight(callbackFn, initialValue)
{
    let num = [10, 20, 30, 40, 50]
    let reduce = num.reduceRight((prev, next) => prev + next)
    console.log(reduce);
}

// Array.short()
{
    let language = ['html', 'css', 'bootstrap', 'tailwand-css', 'javascript', 'reactjs', 'angularjs', 'jquery', 'mongodb', 'mysql']
    let sort = language.sort()
    console.log(sort);
}

//Array.with()
{
    const arraylike = {
        length: 3,
        unrelated: "foo",
        0: 5,
        2: 4,
        3: 3,
    };
    console.log(arraylike);
    console.log(Array.prototype.copyWithin.call(arraylike, 2, 4));
}


// let products =  [
//     {
//       id: 1,
//       title: "Essence Mascara Lash Princess",
//       description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//       category: "beauty",
//       price: 9.99,
//       discountPercentage: 7.17,
//       rating: 4.94,
//       stock: 5,
//       tags: [
//         "beauty",
//         "mascara"
//       ],
//       brand: "Essence",
//       sku: "RCH45Q1A",
//       weight: 2,
//       dimensions: {
//         width: 23.17,
//         height: 14.43,
//         depth: 28.01
//       },
//       warrantyInformation: "1 month warranty",
//       shippingInformation: "Ships in 1 month",
//       availabilityStatus: "Low Stock",
//       reviews: [
//         {
//           rating: 2,
//           comment: "Very unhappy with my purchase!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "John Doe",
//           reviewerEmail: "john.doe@x.dummyjson.com"
//         },
//         {
//           rating: 2,
//           comment: "Not as described!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "Nolan Gonzalez",
//           reviewerEmail: "nolan.gonzalez@x.dummyjson.com"
//         },
//         {
//           rating: 5,
//           comment: "Very satisfied!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "Scarlett Wright",
//           reviewerEmail: "scarlett.wright@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "30 days return policy",
//       minimumOrderQuantity: 24,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.618Z",
//         updatedAt: "2024-05-23T08:56:21.618Z",
//         barcode: "9164035109868",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
//     },
//     {
//       id: 2,
//       title: "Eyeshadow Palette with Mirror",
//       description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
//       category: "beauty",
//       price: 19.99,
//       discountPercentage: 5.5,
//       rating: 3.28,
//       stock: 44,
//       tags: [
//         "beauty",
//         "eyeshadow"
//       ],
//       brand: "Glamour Beauty",
//       sku: "MVCFH27F",
//       weight: 3,
//       dimensions: {
//         width: 12.42,
//         height: 8.63,
//         depth: 29.13
//       },
//       warrantyInformation: "1 year warranty",
//       shippingInformation: "Ships in 2 weeks",
//       availabilityStatus: "In Stock",
//       reviews: [
//         {
//           rating: 4,
//           comment: "Very satisfied!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "Liam Garcia",
//           reviewerEmail: "liam.garcia@x.dummyjson.com"
//         },
//         {
//           rating: 1,
//           comment: "Very disappointed!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "Nora Russell",
//           reviewerEmail: "nora.russell@x.dummyjson.com"
//         },
//         {
//           rating: 5,
//           comment: "Highly impressed!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "Elena Baker",
//           reviewerEmail: "elena.baker@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "30 days return policy",
//       minimumOrderQuantity: 32,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.618Z",
//         updatedAt: "2024-05-23T08:56:21.618Z",
//         barcode: "2817839095220",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
//     },
//     {
//       id: 3,
//       title: "Powder Canister",
//       description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
//       category: "beauty",
//       price: 14.99,
//       discountPercentage: 18.14,
//       rating: 3.82,
//       stock: 59,
//       tags: [
//         "beauty",
//         "face powder"
//       ],
//       brand: "Velvet Touch",
//       sku: "9EN8WLT2",
//       weight: 8,
//       dimensions: {
//         width: 24.16,
//         height: 10.7,
//         depth: 11.07
//       },
//       warrantyInformation: "2 year warranty",
//       shippingInformation: "Ships in 1-2 business days",
//       availabilityStatus: "In Stock",
//       reviews: [
//         {
//           rating: 5,
//           comment: "Very happy with my purchase!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "Ethan Thompson",
//           reviewerEmail: "ethan.thompson@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Great value for money!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "Levi Hicks",
//           reviewerEmail: "levi.hicks@x.dummyjson.com"
//         },
//         {
//           rating: 5,
//           comment: "Highly impressed!",
//           date: "2024-05-23T08:56:21.618Z",
//           reviewerName: "Hazel Gardner",
//           reviewerEmail: "hazel.gardner@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "60 days return policy",
//       minimumOrderQuantity: 25,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.618Z",
//         updatedAt: "2024-05-23T08:56:21.618Z",
//         barcode: "0516267971277",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
//     },
//     {
//       id: 4,
//       title: "Red Lipstick",
//       description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
//       category: "beauty",
//       price: 12.99,
//       discountPercentage: 19.03,
//       rating: 2.51,
//       stock: 68,
//       tags: [
//         "beauty",
//         "lipstick"
//       ],
//       brand: "Chic Cosmetics",
//       sku: "O5IF1NTA",
//       weight: 5,
//       dimensions: {
//         width: 14.37,
//         height: 13.94,
//         depth: 14.6
//       },
//       warrantyInformation: "Lifetime warranty",
//       shippingInformation: "Ships in 2 weeks",
//       availabilityStatus: "In Stock",
//       reviews: [
//         {
//           rating: 5,
//           comment: "Great product!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Leo Rivera",
//           reviewerEmail: "leo.rivera@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Very pleased!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Oscar Powers",
//           reviewerEmail: "oscar.powers@x.dummyjson.com"
//         },
//         {
//           rating: 5,
//           comment: "Very pleased!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Carter Rivera",
//           reviewerEmail: "carter.rivera@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "90 days return policy",
//       minimumOrderQuantity: 6,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.619Z",
//         updatedAt: "2024-05-23T08:56:21.619Z",
//         barcode: "9444582199406",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
//     },
//     {
//       id: 5,
//       title: "Red Nail Polish",
//       description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
//       category: "beauty",
//       price: 8.99,
//       discountPercentage: 2.46,
//       rating: 3.91,
//       stock: 71,
//       tags: [
//         "beauty",
//         "nail polish"
//       ],
//       brand: "Nail Couture",
//       sku: "YUIIIP4W",
//       weight: 9,
//       dimensions: {
//         width: 8.11,
//         height: 10.89,
//         depth: 29.06
//       },
//       warrantyInformation: "1 year warranty",
//       shippingInformation: "Ships in 1 week",
//       availabilityStatus: "In Stock",
//       reviews: [
//         {
//           rating: 5,
//           comment: "Very pleased!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Leo Rivera",
//           reviewerEmail: "leo.rivera@x.dummyjson.com"
//         },
//         {
//           rating: 5,
//           comment: "Great product!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Evan Reed",
//           reviewerEmail: "evan.reed@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Highly recommended!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Evelyn Sanchez",
//           reviewerEmail: "evelyn.sanchez@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "No return policy",
//       minimumOrderQuantity: 46,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.619Z",
//         updatedAt: "2024-05-23T08:56:21.619Z",
//         barcode: "3212847902461",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
//     },
//     {
//       id: 6,
//       title: "Calvin Klein CK One",
//       description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
//       category: "fragrances",
//       price: 49.99,
//       discountPercentage: 0.32,
//       rating: 4.85,
//       stock: 17,
//       tags: [
//         "fragrances",
//         "perfumes"
//       ],
//       brand: "Calvin Klein",
//       sku: "DZM2JQZE",
//       weight: 5,
//       dimensions: {
//         width: 11.53,
//         height: 14.44,
//         depth: 6.81
//       },
//       warrantyInformation: "5 year warranty",
//       shippingInformation: "Ships overnight",
//       availabilityStatus: "In Stock",
//       reviews: [
//         {
//           rating: 5,
//           comment: "Great value for money!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Sophia Brown",
//           reviewerEmail: "sophia.brown@x.dummyjson.com"
//         },
//         {
//           rating: 3,
//           comment: "Very disappointed!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Madison Collins",
//           reviewerEmail: "madison.collins@x.dummyjson.com"
//         },
//         {
//           rating: 1,
//           comment: "Poor quality!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Maya Reed",
//           reviewerEmail: "maya.reed@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "No return policy",
//       minimumOrderQuantity: 20,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.619Z",
//         updatedAt: "2024-05-23T08:56:21.619Z",
//         barcode: "2210136215089",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
//     },
//     {
//       id: 7,
//       title: "Chanel Coco Noir Eau De",
//       description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
//       category: "fragrances",
//       price: 129.99,
//       discountPercentage: 18.64,
//       rating: 2.76,
//       stock: 41,
//       tags: [
//         "fragrances",
//         "perfumes"
//       ],
//       brand: "Chanel",
//       sku: "K71HBCGS",
//       weight: 4,
//       dimensions: {
//         width: 21.27,
//         height: 28,
//         depth: 11.89
//       },
//       warrantyInformation: "1 week warranty",
//       shippingInformation: "Ships in 1 month",
//       availabilityStatus: "In Stock",
//       reviews: [
//         {
//           rating: 1,
//           comment: "Disappointing product!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Lincoln Kelly",
//           reviewerEmail: "lincoln.kelly@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Great product!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Lincoln Kelly",
//           reviewerEmail: "lincoln.kelly@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Excellent quality!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Lucas Allen",
//           reviewerEmail: "lucas.allen@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "60 days return policy",
//       minimumOrderQuantity: 5,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.619Z",
//         updatedAt: "2024-05-23T08:56:21.619Z",
//         barcode: "1435582999795",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
//     },
//     {
//       id: 8,
//       title: "Dior J'adore",
//       description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
//       category: "fragrances",
//       price: 89.99,
//       discountPercentage: 17.44,
//       rating: 3.31,
//       stock: 91,
//       tags: [
//         "fragrances",
//         "perfumes"
//       ],
//       brand: "Dior",
//       sku: "E70NB03B",
//       weight: 10,
//       dimensions: {
//         width: 21.51,
//         height: 7,
//         depth: 26.51
//       },
//       warrantyInformation: "Lifetime warranty",
//       shippingInformation: "Ships in 2 weeks",
//       availabilityStatus: "In Stock",
//       reviews: [
//         {
//           rating: 5,
//           comment: "Fast shipping!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Zoe Nicholson",
//           reviewerEmail: "zoe.nicholson@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Excellent quality!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Addison Wright",
//           reviewerEmail: "addison.wright@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Would buy again!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Clara Berry",
//           reviewerEmail: "clara.berry@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "7 days return policy",
//       minimumOrderQuantity: 8,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.619Z",
//         updatedAt: "2024-05-23T08:56:21.619Z",
//         barcode: "0887083199279",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
//     },
//     {
//       id: 9,
//       title: "Dolce Shine Eau de",
//       description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
//       category: "fragrances",
//       price: 69.99,
//       discountPercentage: 11.47,
//       rating: 2.68,
//       stock: 3,
//       tags: [
//         "fragrances",
//         "perfumes"
//       ],
//       brand: "Dolce & Gabbana",
//       sku: "1NBFK980",
//       weight: 5,
//       dimensions: {
//         width: 17,
//         height: 24.57,
//         depth: 13.3
//       },
//       warrantyInformation: "5 year warranty",
//       shippingInformation: "Ships in 1-2 business days",
//       availabilityStatus: "Low Stock",
//       reviews: [
//         {
//           rating: 4,
//           comment: "Very satisfied!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Xavier Wright",
//           reviewerEmail: "xavier.wright@x.dummyjson.com"
//         },
//         {
//           rating: 1,
//           comment: "Poor quality!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Mila Hernandez",
//           reviewerEmail: "mila.hernandez@x.dummyjson.com"
//         },
//         {
//           rating: 5,
//           comment: "Very happy with my purchase!",
//           date: "2024-05-23T08:56:21.619Z",
//           reviewerName: "Sophia Brown",
//           reviewerEmail: "sophia.brown@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "30 days return policy",
//       minimumOrderQuantity: 9,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.619Z",
//         updatedAt: "2024-05-23T08:56:21.619Z",
//         barcode: "1939383392674",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png"
//     },
//     {
//       id: 10,
//       title: "Gucci Bloom Eau de",
//       description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
//       category: "fragrances",
//       price: 79.99,
//       discountPercentage: 8.9,
//       rating: 2.69,
//       stock: 93,
//       tags: [
//         "fragrances",
//         "perfumes"
//       ],
//       brand: "Gucci",
//       sku: "FFKZ6HOF",
//       weight: 10,
//       dimensions: {
//         width: 22.28,
//         height: 17.81,
//         depth: 27.18
//       },
//       warrantyInformation: "No warranty",
//       shippingInformation: "Ships in 2 weeks",
//       availabilityStatus: "In Stock",
//       reviews: [
//         {
//           rating: 5,
//           comment: "Great value for money!",
//           date: "2024-05-23T08:56:21.620Z",
//           reviewerName: "Aria Parker",
//           reviewerEmail: "aria.parker@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Excellent quality!",
//           date: "2024-05-23T08:56:21.620Z",
//           reviewerName: "Natalie Harris",
//           reviewerEmail: "natalie.harris@x.dummyjson.com"
//         },
//         {
//           rating: 4,
//           comment: "Fast shipping!",
//           date: "2024-05-23T08:56:21.620Z",
//           reviewerName: "Ava Harris",
//           reviewerEmail: "ava.harris@x.dummyjson.com"
//         }
//       ],
//       returnPolicy: "No return policy",
//       minimumOrderQuantity: 10,
//       meta: {
//         createdAt: "2024-05-23T08:56:21.620Z",
//         updatedAt: "2024-05-23T08:56:21.620Z",
//         barcode: "8232190382069",
//         qrCode: "https://assets.dummyjson.com/public/qr-code.png"
//       },
//       images: [
//         "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
//         "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
//       ],
//       thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
//     },

//   ]

//   let arrays = [
//     {
//         name: 'option-1',
//         age: 10
//     },
//     {
//         name: 'option-2',
//         age: 20
//     },
//     {
//         name: 'option-3',
//         age: 30
//     },
//     {
//         name: 'option-4',
//         age: 40
//     },
//     {
//         name: 'option-5',
//         age: 50
//     },
//     {
//         name: 'option-6',
//         age: 60
//     },
//     {
//         name: 'option-7',
//         age: 70
//     },
//     {
//         name: 'option-8',
//         age: 80
//     },
//     {
//         name: 'option-9',
//         age: 90
//     },
//     {
//         name: 'option-10',
//         age: 100
//     },
//     {
//         name: 'option-11',
//         age: 110
//     },
//     {
//         name: 'option-12',
//         age: 120
//     }

// ]



// React Logic

// let [number  , setNumber]  = useState(1)

// let numberNext = 1
// let numberPrev = 1

// function handleNext() {
//     const pageperitem = 4

//     let lastindex = pageperitem * numberNext

//     let firstindex = lastindex - pageperitem

//     console.log(`firstindex:${firstindex}`);
//     console.log(`lastindex:${lastindex}`);

//     document.getElementById('demo-1').innerHTML = arrays.slice(firstindex, lastindex).map((item) => `${item.name}`)

//     numberNext++
//     if (numberNext > 3) {
//         numberNext = 1
//     }
// }

// function handlePrev() {

//     const pageperitem = 4

//     let lastindex = pageperitem * numberPrev

//     let firstindex = lastindex - pageperitem

//     console.log(`firstindex:${firstindex}`);
//     console.log(`lastindex:${lastindex}`);

//     document.getElementById('demo-1').innerHTML = arrays.slice(firstindex, lastindex).map((item) => `${item.name}`)

//     numberPrev--

//     if (numberPrev < 1) {
//         numberPrev = 3
//     }
// }

// function print(){
//     setTimeout(() => {
//         console.log(number)
//     } , 4000)
// }

// console.log(arrays.slice(0, 4));
// console.log(arrays.slice(4, 8));
// console.log(arrays.slice(8, 12));
// console.log(arrays.slice(12, 16));

// arrays.map((item) => console.log(item.age))

// let filterItem = products.filter((item) => item.price <= 50)
// let filterItem1 = products.filter((item) => item.price > 50)

// console.log(filterItem);
// console.log(filterItem1);



