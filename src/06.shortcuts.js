const myPromise = Promise.resolve('PROMISE WAS RESOLVED')
const myRejectedPromise = Promise.reject(new Error('PROMISE WAS REJECTED'))

myPromise.then(console.log)
myRejectedPromise.catch(error => console.log(error.message))