//callback AND promise api 
var ticket
const getTicket = (callback) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            ticket = true;
            console.log('got ticket')
        }else{
            ticket = false;
            console.log('housefull')
        }

        callback();
    }, 2000);
}

// const enterCinema = () => {
//     if (ticket){
//         console.log('welcome: ')
//     } else {
//         console.log('no entry')
//     }
//     console.log('movie ended')
// }

getTicket(() => {
    if (ticket){
        console.log('welcome: ')
    } else {
        console.log('no entry')
    }
    console.log('movie ended')
});
