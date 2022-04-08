// json dosyası sayesinde projenin install kısmının manifesti vardır ve bu bildirim sayesinde tüm paketlerle yollanmasına gerekliliğini ortadan kaldırılmış ve işlem kolaylığı sağlanmıştır. 
//package json sayesinde bu gerçekleşiyor.

//framework:standart fonksiyonların hazır olarak sunulduğu ancak programcı tarafından bu fonksiyonlardan arzu edilen kısımların ek kodlarla istenildiği şekilde güncellenebildiği sistemlerdir.
//expresste bir npm framework örneğidir.

const express = require('express');

const app = express(); //expressin tüm özelliklerini inherit etmiş gibi olarak app içerisine atıldı.

app.get("/",(req,res)=>{  //req ve res express canlandırmalı akılda ilk olarak. Requese olarak gelen istekleri fonksiyon içerisine yapılan işlemler ile response ile geri döndürülür.
    res.send("Hello-hii"); // önceden res.end ile gönderilirken bu frameworkte özelliştirilerek send diye metot oluşturulmuş ve kullanıcıya gönderilebilme olarak metodu yüklemiştir.
    res.sendFile('./views/index.html',{root:__dirname}); // verilen url içerisindeki html sayfasının okunması.  //{root:__dirname} //ana dosya dizinimizi verdiğimiz anlamına gelir

});
app.get('/users/:id',(req,res)=>{
    res.send(`<h1>Users ID:${req.params.id}</h1>`); //req kısımı kullanıcının sayfaya yaptığı isteğin dinamik olarak verilen html içerisine aktarılmasına yarar.//params ile kullanıcının girdiği id alınır.
}); 
app.listen(3000,()=>console.log("Server running ")); //öncelikle port numarası verilir. // portu verilen browser dinlenilmeli.Ek olarak ip adresi vs verilebilir.
//status 200 başarılı çalıştırılma anlamına geliyor 200lü bütün kodlar network kısmında başarılı anlamına geliyor. 
//-404-505 farklı çeşitteki hataları ifade ediyor. 404 sayfa  içerisindeki hatayı 
//505 kendi dışındaki hatayı 304 ise yer değiştirme hatasını ifade etmektedir.

app.use(express.json()); // dataları json formatında oluşturulmasını sağlayan katman oluşturuldu.
const lessons = [
    {id:1, name:'fizik'},
    {id:1, name:'kimya'},   //APP.USE kullanılıyorsa ara katman vardır.
    {id:1, name:'mat'}
]
app.get('/api/lessons',(req,res)=>{   //lessons isteği bulunulduğunda urlde oluşturmuş olduğm-umuz json lessons datasını sayfaya response olarak gönder demektir.
   res.send(lessons);
});
app.post('/api/lessons',(req,res)=>{
    const lesson = {
        id:lessons.length + 1,   //kendi objemin içerisinde id sayısını bilmediğimi varsayaraktan id sayısının otomatik olarak +1 artarak atanması için bu kod yazıldı 

        name: req.body.name // verilen name direk buranın içerisine aktarılır. İdsı verilmeyen nameler atanıldığında idleri de ona göre gelir.
    }
    lessons.push(lesson); //oluşturduğumuz lessons nesnenisini lesson içerisine atabilmek için pushladık.
    res.send(lesson); //eklenmiş son nesneyi geri dönmesi için send işlemi istedik.

})
