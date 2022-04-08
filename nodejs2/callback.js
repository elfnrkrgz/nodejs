const { callbackify } = require("util")


const sample = (callback) => { //arrow function tanımlandı
    console.log("file start create")
    const file = "file created"
    callback(file)

}
let some = (file) => {
console.log("callback", file)
}

sample(some)
