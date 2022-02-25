
console.log(process.pid);
console.log(process.env);
console.log(process.env.PORT);
//Path.join// hangi makinada çalıştığını anlayıp makinayı ona göre ayarlamaktadır.
//extname dosya uzantılarını getirir.
const writeFileAsync = async (path,data) => {
    return new Promise((resolve,reject) => fs.writeFile(path,data,(err)=>{
        if(err){
             return reject (err.message)
        }
        resolve()
    }))
}

