const fs = require("fs");
const path = require("path");


// fs.mkdirSync(path.resolve(__dirname, "dir"));  dir klasörü oluşturdu.

// fs.writeFile(path.resolve(__dirname, "text.txt"), 'ali veli 1 2 3', (err) => {

//     if(err){
//     console.log(err)
//     }
// })

// promises

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject)=> fs.writerfile(path, data, (err) =>{
        if (err){
            return reject(err.message)
        }
        resolve()
    }))
}