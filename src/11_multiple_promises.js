function all(firstPromise, secondPromise) {

    let counter = 0
    let results = []

    return new Promise((resolve, reject) => {
        firstPromise.then(value => {
            counter++
            results[0] = value // results.push(value) is not valid because we need a specific order
            if (counter === 2) {
                resolve(results)
            }
        })

        secondPromise.then(value => {
            counter++
            results[1] = value // results.push(value) is not valid because we need a specific order
            if (counter === 2) {
                resolve(results)
            }
        })
    })
}

all(getPromise1(), getPromise2()).then(console.log)

// function all(firstPromise, secondPromise) {

//     let counter = 0
//     let results = []

//     return new Promise((resolve, reject) => {

//         firstPromise.then(value => {
//             counter++
//             results.push(value)
//             secondPromise.then(value => {
//                 counter++
//                 results.push(value)
//                 resolve(results)
//             })
//         })

//     })
// }

// all(getPromise1(), getPromise2()).then(console.log)
