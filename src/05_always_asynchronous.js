const myPromise = new Promise(function (resolve, reject) {
    resolve('PROMISE VALUE')
})

myPromise.then(console.log)

console.log('MAIN PROGRAM')