const randomNum = new Promise((resolve, reject) => {
    let num = Math.random();
    if(num > 0.5){
        console.log('greater than 0.5');
        resolve(num); // Resolve with the generated number
    }else {
        console.log('smaller than 0.5');
        reject(num); // Reject with the generated number
    }
});


    try {
        const number = await randomNum;
        console.log('done!'+ number);
    } catch(num) {
        console.log(num + 1);
    }




