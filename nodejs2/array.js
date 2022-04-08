

const sample_arr = (arr) => {
    return `array ${arr.length}`  //test.js içerisinde tanımlamış olduğumuz sample_arr arrayini kullanmak için callback fonk
                                 // oluşturuyoruz ve parametresine arr atıyoruz. arr.lenght diyerek sample_arr 'in uzunluğunu alıyoruz
}

//sample_arr[1,2,3]
const value = 20      

module.exports = {
    sample_arr,            //sample_arr 'in array.js içerisinde kullanılabilmesi için import edilmesi gerekmektedir.
                           //exports yapılmazsa boş nesne döner {} şu şekilde.
                           //exports temel olarak tek tek import etmeyi ifade eder array olarak aldığımızı array olarak alır ve bize import sağlar
                           //modele.exports dediğimizde birden fazla import'u aynı anda nesne değişkeni olarak almamızı sağlar.
                           // dizi: sample_arr diye de tanımlama yapabilirdik 
                           //ama bu sefer test.js içerisinde console.log içerisinde de abc.sample_arr değil abc.dizi diye çağırmamız gerekirdi.
    value
}