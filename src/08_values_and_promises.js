const attachTitle = (name) => {
    return `DR. ${name}`
}

const myPromise = new Promise((resolve, reject) => {
    return resolve('MANHATTAN')
})

myPromise
    .then(attachTitle)
    .then(console.log)


/* Another way to do this */
// Promise.resolve('MANHATTAN')
//     .then(attachTitle)
//     .then(console.log)
