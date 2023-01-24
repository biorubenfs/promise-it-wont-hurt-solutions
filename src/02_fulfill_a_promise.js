'use strict';

var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => fulfill('FULFILLED!'), 300)
});

// promise.then(console.log)


// Although there is only one promise, you can use several then methods
promise.then(console.log)
// promise.then(value => `value: ${value}`).then(console.log)



