var myPromise = new Promise(function (resolve, reject) {
    resolve('I FIRED')
    reject(new Error('I DID NOT FIRE'))
})

// Study this case in which we use setTimeout when promise is resolved
// var myPromiseWithSetTimeOut = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve('I FIRED'), 300)
//     reject(new Error('I DID NOT FIRE'))
// })

function onReject(error) {
    console.log(error.message)
}

myPromise.then(console.log, (error) => onReject(error))
//myPromiseWithSetTimeOut.then((value) => console.log(value), (error) => onReject(error))