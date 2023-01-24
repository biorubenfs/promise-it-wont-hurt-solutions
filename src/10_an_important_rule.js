function alwaysThrows() {
    throw new Error('OH NOES')
}

function iterate(number) {
    console.log(number)
    return ++number
}

Promise.resolve(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(error => console.log(error.message))
