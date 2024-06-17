// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']
// for (let i=0; i<colors.length; i++){
//     console.log('index', i, '=', colors[i])
// }

//index is a numerical key which represents a items



//for-in
// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']

// for(let i in colors){
//     console.log(colors[i])
// }
// forin le array ko index tanera i ma store garxa

//for-off
// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']
// for (let v of colors){
//     console.log(v)
// }
// for of le array ko data tanxaa (directly value print garnu paryo)



// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']

// let newArr = colors.map((value, i) => `color at ${i} is ${value}`)

// console.log(colors)
// console.log(newArr)

// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']

// let newArr = colors.map( function(color){
//     if(color == 'red'){
//         return 'apple'
//     } else if(color == 'yellow'){
//         return 'banana'
//     } else if(color == 'pink'){
//         return 'guava'
//     } else if(color == 'black'){
//         return 'kalo angur'
//     } else if(color == 'white'){
//         return 'white mango'
//     }
//     else if(color == 'orange'){
//         return 'orange fruit'
//     }
// });
 
// console.log(colors)
// console.log(newArr)

// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']

// // colors.push('blue', 'beige');
// // push adds the items to the array


// let removed = colors.pop()

// console.log(colors)
// console.log (removed)


// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']

// console.log(colors)

// colors.unshift('blue', 'beige') //adds the items to the front

// let removed = colors.shift() //

// console.log(colors)
// console.log('removed item is =', removed)

// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']
// console.log(colors)

// delete colors[1]

// console.log(colors)

// colors[1] = 'purple'

// console.log(colors)


// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange']
// console.log(colors)

// let removedArray = colors.splice(1, 2, 'brown') // 1 is inex and 2 is number of items to be removed
//                                        // from third argument we can add the another items

// console.log(colors)
// console.log(removedArray)


// let colors = ['red', 'yellow', 'pink', 'black', 'white', 'orange', 'brown']
// console.log(colors)

// // let filteredArr = colors.filter(item => item != 'white')

// let filteredArr = colors.filter(item => item.includes('r'))


// console.log(filteredArr)


