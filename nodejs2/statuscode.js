// status code lar sayfamızın network açısından ne durumda olduğunu bize ifade ederler.
//res.statuscode = 200 olarak tanımlanır ise eğer herhangi bir sorunun olmadığını ifade eder
//res.Statuscode=404 olarak tanımlanır ise not found page hatasını almış olduğumuz anlamına gelmektedir.
//res.Statuscode = 301 sayfanın başka sayfaya yönlendirdiğini ifade eder.
// yapılışı  res.Statuscode = 301
//           res.SetHeader('konumu','/yönlendirmek istediğimiz yer')


//2xx: Başarıyı ifade eder
//3xx: Yönlendirmeyi ifade eder. (304 Not Modified)
//4xx: Tarayıcı Hatasını ifade eder.
//5xx: Sucunu Hatasını ifade eder.








//nodemon : bizim her seferinde güncellememizi değil otomatik olarak güncellenmesini sağlar.
// npm i nodemon -g  global yüklendi çünkü herhangi projede kullanılabilir.
//uninstall ile paketler silinir.
//npm init -y  dediğimiz 3.part paketleri projemize dahil edeceğimizi söylüyoruz. proje adını versionunu filan soruyor hepsine yes diyoruz.
// npm i express indirdiğimiz varsayalım
//package.json dosyası gelecek ve burada dependencies kısmında yüklediğimiz bu express 'i versionu ile beraber görebiliyor olacağız.
//dependencies kısmı bize bu projenin ayağa kalktığında dahi projenin çalışması için gerekli bir paket olduğu anlamına gelmektedir.
//devdependencies : sadece geliştirme ortamında ihtiyaç duyduğumuz paketlerin bulunduğu kısımdır. npm instal bla bla-dev olarak indirilir.
//ürüne çevirildiğinde buna ihtiyacımız yok
//npm i --prodouction denildiğinde yazılanlar ürüne çevirilir ve dependencies kısmı iner ve ayağa kalkar.

