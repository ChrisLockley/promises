b = 2 + 4
c = 7 - 3

const exampleVar = new Promise((resolve, reject) => {
    console.log('Making Request to location');
    if (b == 7) {
        resolve('SUCCESS: request was successful');
    } else {
        resolve('ERROR: request was uncuccessful');
    };
});

const processVar = new Promise ((resolve, reject) => {
    console.log ('Process response from application');
    if (c === 4) {
        resolve('Response processed!');
    } else {
        reject('issue with response');
    };
});

Promise.all([
    exampleVar, 
    processVar
]).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log('There is an error with the request or response');
});