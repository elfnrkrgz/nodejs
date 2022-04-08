const fs = require("fs");
const path = require("path");


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}
const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}



writeFileAsync(path.resolve(__dirname, "text.txt", 'data'))
    .then(() => writeFileAsync(path.resolve(__dirname, "text.txt")))
    .then(() => appendFileAsync(path.resolve(__dirname, "text.txt")))
    .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
    .catch(err => console.log(err))



// let yapildi = true

// const fonksiyonn = new Promise((resolve, reject) => {
//   if (yapildi) {
//     const oldu = 'dogru'
//     resolve(oldu)
//   } else {
//     const olmadi = 'yanlis'
//     reject(olmadi)
//   }
// })