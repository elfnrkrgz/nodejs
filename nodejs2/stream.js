const fs = require("fs");  //fs komutunun oluşabilmesi için require ettik
const path = require("path");

// fs.readFile(path.resolve(__dirname, "testdata.txt"), (err,data) => {
//     if(err){
//         throw err                        //__dirname file dosyanın uzatısını bulmasını,bulduğu dosyanın içerisine
                                        //bulduktan sonra testdata.txt uzantılı txt açmasını istiyoruz. ve eğer hata ile karşılaşırsak :
                                        //hatayı göstermesi için callback fonk oluşturup throw ile hatayı yakalıyoruz.
                                        //hata yoksada console.log ile testdata.text içerisindeki datanın ekrana basılmasını sağlıyoruz.
//     }
//     console.log(data);
// })


//stream dediğimiz şey yayın yani çok yüksek boyutlu dosyaları okumak istediğimiz zaman bunlardan yararlanırız.
//streamda yüksek boyutlu data chunklara bölünerek buffer(tampon bellek=geçici bellek) içerisinde saklanır ve parça parça onu okuyabilmemizi sağlar.

const stream = fs.createReadStream(path.resolve(__dirname, "testdata.txt"), "utf-8")
stream.on('open', (chunk) => {  //stream on kısmı event listenner kısmı gibi streami dinliyor 
                               //ve gelen chunkları bufferdan alarak UTF-8 formatına çevirerek testdata.txt içerisine yazıyor
    console.log("start")
})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', (chunk) => {
    console.log("end")
})
