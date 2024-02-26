// Example promise that resolves after a delay
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            resolve(randomNumber); // Resolve the promise with a random number
        } else {
            reject(new Error('Random number too large')); // Reject the promise with an error
        }
    }, 1000); // Delay execution by 1 second
});

// Handling the promise using .then() and .catch()
myPromise.then(result => {
    console.log('Promise resolved with result:', result);
}).catch(error => {
    console.error('Promise rejected with error:', error.message);
});
