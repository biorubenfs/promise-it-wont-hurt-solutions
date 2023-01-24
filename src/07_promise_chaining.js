function onFulfilled(value) {
    console.log(value)
}

const firstPromise = first()

const secondPromise = firstPromise.then((val) => second(val)).then(onFulfilled)

// short way
// first().then(second).then(onFulfilled)

// try to implement first and second functions