const { METHODS } = require("http");
const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());

// node os yapıldığında bilgisayarın kendisine ait bilgiler gelir terminale
// Bir uygulamanın çok yük getirdiği noktada cpu nun eşit parçada bölünmesini ve üzerindeki çekirdeklerin hangisinin nelere nereye ayırabileceğine karar vermeye yarayan METHOD CPUS tur.

for(let i = 0 ; i < os.cpus().length-2 ; i++){
    //  cpu nun içerisindeki 8 çekirdekten sadece 6 tanesini kullanacağımızı belirten bir kod parçacığıdır burası.
}
// event fırlatmak : bir fonksiyonun geri değer döndürmesinden farksız değildir.

