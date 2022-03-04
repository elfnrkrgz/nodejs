const fs = require("fs")
const path = require("path")


// const writeFileAsync = async(path,data) => {
//     return new Promise ((resolve,reject)=> fs.writeFile(path,data,(err)=>{
//         if(err){
//             return reject (err.message)
//         }
//         resolve()
//     }))
// }
// const appendFileAsync =async(path,data) => {
//     return new Promise ((resolve,reject)=> fs.appendFile(path,data,(err)=>{
//         if(err){
//             return reject (err.message)
//         }
//         resolve()
//     }))
// }

//  writeFileAsync(path.resolve(__dirname,"text.txt"),"BIL 4 2 5 ")
//     // .then(()=> readFileAsync(path.resolve(__dirname,"text.txt"))
//     // .then(data=> data.split('').lenght)
//     // .then(()=> writeFileAsync(path.resolve(__dirname,"count.txt"))

//     //  appendFileAsync(path.resolve(__dirname,"text.txt"), "asdf"))

// console.log(__dirname, "");
    
const fileRead=async () => {
    try{
        await fsPromis.writeFile(path.resolve(_dirname,"text.txt"))
    }
    catch(error){

    }
} 
// promisin aslında arka planda çalışmasını sadece gelişen halinin asenkron olarak çalışan hazır kod halidir yukarıda verilen.

