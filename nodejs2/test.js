const abc = require("./array")  //Array dosyası require ediyoruz.


console.log(abc.sample_arr([1,2,3,4]))
console.log(abc.value)                 //tanımlamış olduğumuz arrayı terminale yazdırıyoruz. fakat amacımız burada bastırmak değil
                                      //test.js içerisinde tanımlanmış olan bu diziyi array.js içerisinde kullanmak asıl amacımız 
                                      //bunun içinde yapmamız gereken burada tanımlanmış olan bu diziyi array.js içerisine import etmek.
                                      
//sample_arr()