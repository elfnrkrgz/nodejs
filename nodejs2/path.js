const path = require("path")   //path:yol parametresini işlemek ve dönüştürmek için kullanılır.

// console.log(path.join('first', 'second'));          //Parametre olarak aldığı değerleri birleştirir.

// console.log(path.join(__dirname,'first', 'second'));  //Bulduğu klasör içerisindeki ilk Parametre ve ikinci parametre olarak aldığı değerleri birleştirir

// console.log(path.join(__filename,'first', 'second'));   //Bulduğu klasör içerisindeki ilk Parametre ve ikinci parametre olarak aldığı değerleri birleştirir

// console.log(path.resolve('first', 'second'));  //Parametre ile verilen yolun kök dizinden itibaren mutlak yolunu verir.

// const FullPath = path.resolve("first.jpeg");
// console.log(path.basename(FullPath))   //Dosya veya klasörün yolunun son bölümünü verir. örn:'C:/Windows/system32'
// console.log(path.extname(FullPath))  //dosyanın uzantısını verir.

const pageURL ="http://localhost:9001/user?id=400"
const url = new URL(pageURL);                        //url nesnesini oluşturduk.
console.log(url)