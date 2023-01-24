const qio = require("q-io/http")

// qio.read("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(res => console.log(JSON.parse(res)))

qio.read("http://localhost:1337")
    .then(JSON.parse)
    .then(console.log)