function parsePromised(jsonObject) {
    return new Promise((resolve, reject) => {
        try {
            JSON.parse(jsonObject)
            resolve('OK')
        } catch (error) {
            reject(error.message)
        }
    })
}

parsePromised(process.argv[2]).then(console.log, console.log)
parsePromised('{ "foo": "foo" }').then(console.log, error => console.log({ error_message: error }))
