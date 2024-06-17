//promise api
//here we are creating a promise 
const getTicket = () => new Promise((resolve, reject) => {
     setTimeout(() => {
        if(Math.random() > 0.5){
            console.log("got ticket")
            resolve(true)
        }else{
            console.log("housefull")
            reject(false)
        }
     }, 2000);
})

const enterCinema = (ticket) => {
    if(ticket){
        console.log('watching movie')
    } else {
        console.log('no entry')
    }
    
}



// let ticket = getTicket()
// console.log(ticket)
let ticket

try{
    ticket =  getTicket()
    console.log(ticket)
} catch(error){
    ticket = error
    console.log(ticket);
}

enterCinema(ticket)
console.log('movie ended')


