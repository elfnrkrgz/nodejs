const fs = require("fs")
const path = require("path")


const writeFileAsync = async(path,data) => {
    return new Promise ((resolve,reject)=> fs.writeFile(path,data,(err)=>{
        if(err){
            return reject (err.message)
        }
        resolve()
    }))
}
const appendFileAsync =async(path,data) => {
    return new Promise ((resolve,reject)=> fs.appendFile(path,data,(err)=>{
        if(err){
            return reject (err.message)
        }
        resolve()
    }))
}

 writeFileAsync(path.resolve(__dirname,"text.txt"),"BIL 4 2 5 ")
    .then(()=> console.log("skfksdk"))
    //  appendFileAsync(path.resolve(__dirname,"text.txt"), "asdf"))

console.log(__dirname, "");
    

