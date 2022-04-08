//npm express paketinin basic kullanımı

const express=require('express')
const app = express() //appi başlatabimek için express fonk çağırıldı.
app.listen(3000) //verilen 300 portunu dinliyor ve port altına gelen isteklerin çalıştırılmasını sağlıyor.
app.get('/',(req,res)=>{
    res.send('<h1>anasayfa</h1>')  //normalde res.write res.end diyorduk ama express altında sadece send desek yeterli oluyor.
}) // hangi sayfaya req geldiğini anlamamızı sağlıyor.
//express sayesinde content type utf-8 formatı gibi fortmalarını belirlememize gerek kalmıyor express bunu bizim gönderdiğimiz formata göre kendisi yapıyor.
//{root:__dirname} //ana dosya dizinimizi verdiğimiz anlamına gelir