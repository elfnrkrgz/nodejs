const fs = require ("fs");
const path = require ("path");

// buffer ve chunks streama bağlıdır.

// fs.readFile(path.resolve(__dirname,"testdata.txt"),(err,data) => {
//     if (err){
//         throw err
//     }
//     console.log(data);
// })

// const stream = fs.createReadStream(path.resolve(__dirname,"testdata.txt"))
// stream.on('data',(chunk)=>{
//     console.log(chunk);

// })


// stream oluşturulduğunda aslında event oluşturuluyor.Datayı istiyoruz ve bize datayı veriyor yukarıdaki kod parçası chunk ile bölerek datayı bize veriyor boyutu yüksek olduğudan dolayı.

const writeStream = fs.createWriteStream(path.resolve(__dirname,"testdata2.txt"))
for (let i =0; i<10; i++){
    writeStream.write(i+'\n');
}

writeStream.end();
writeStream.close();
writeStream.destroy();

// partline ? 
