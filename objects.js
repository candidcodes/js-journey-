//data objects
// let person = {
//     name : 'john',
//     age : 12,
//     'address info' : {
//         city : 'kathmandu',
//         country : 'nepal'
//     }           //multiword ma '' include garnu parxa
// }
// console.log(person.name)
// console.log(person['address info'].city)




//objects ma for-in loop matra lagxa

// let person = {
//     name : 'john',
//     age : 12,
//     'address info' : {
//         city : 'kathmandu',
//         country : 'nepal'
//     } 
// }
// for(let k in person){
//     console.log(k, person[k])
// }

// let person = {
//     name : 'john',
//     age : 12,
//     address : 'nepal'
// }
// if ('name' in person) {
//     console.log('yes')
// } else {
//     console.log('no')   
// }

// let person = {
//     name : 'john',
//     age : 12,
//     address : 'nepal'
// }
// let key = Object.keys(person)
// let values = Object.values(person)

// console.log(key)
// console.log(values)


let person = {
    name : 'john',
    age : 12,
    address : 'nepal'
}
let students = {
    ...person,  //spread operators
    faculty : 'csit',
    subjects : ['IIt', 'c', 'physics', 'dl']
}
//destructring
let {name, subjects, ...remaining} = students //... is rest operator here 

console.log(name)
console.log(subjects)
console.log(remaining)