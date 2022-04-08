// middleware olabilmesi için kesinlikle next() olmalı.Bir sonraki fonksiyona geçmesini sağlamak için next olmalıdır.
const express = require('express');
const fs = require("fs");
const path = require("path");
const fsPromises = require("fs/promises");
app = express();
// const errorhandler = require("./middle/errorhandler")

const auth = require('./middle/auth');
const logger = require('./middle/logger');
app.use(auth);
// authentication kimlik doğrulama işlemi,kullanıcının doğruluğunu sağlayan kısımdır.
//authorization kullanıcının yetkilendirme kısmıdır.

// app.use((req,res,next)=>{
//     console.log("middleware");
//     // res.send("middleware");
//     next();
// });

app.use((req,res,next)=>{
    //logger benden parametre ister ve vermeden çalışmaz dolasıyla request içerisinde logger aramalıyız.
    logger(`${req.method}\t${req.url}`,'log.txt'); //gelen isteğin hangi metodla geldiğini hangi urlye istek yapıldığını alıyoruz ve bunların log kayıtşlarını tutuyoruz.
    next();
})

app.get('/',(req,res)=>{
    res.send("page is rendering"); //çağırılan kod parçası burası aslında bunu da çağırabilmek için
    //middleare katmanı var mı diye bakıyor yukarıdaki use alanına giriyor ve çalıştırıp kodu okuyor.
});
// app.get('/users', auth,(req,res)=>{
//     res.send("page is rendering"); //çağırılan kod parçası burası aslında bunu da çağırabilmek için
//     //middleare katmanı var mı diye bakıyor yukarıdaki use alanına giriyor ve çalıştırıp kodu okuyor.
// });


//ERRORHANDLER

//errorhandler yazılacağı zaman bestpratice olarak listenden hemen önce yazılmalıdır.

// const errorhandler = (err,req,res,next)=>{      //parametrelerin yazılış sıralaması önemli!!!!!
//     console.log(err);
    //    res.status(500).send(err.errMessage); 
// }


// kullanım şekli:
// app.use(errorhandler);

app.listen(5000,()=> console.log("server runnig..."));


// app.use(express.static("public")); //klasörler normalde direkt olarak oradan oraya geçemez bu yüzden onların static olarak tanıtılması gerekmektedir.
// app.use(express.urlencoded({extended:false}));
// app.use(express.json());




//CORS
// localhost a farklı browser üzerinden 
// ulaşılmaya başlanıldığında güvenlik nedeniyle farklı browserdan ulaşılamaz 
// fakat cors ile belirli alan packageler ile belirli izinler verilerek hata alınması önlenir.

// const cors = require("cors")
// app.use(cors()); paketin içerisinde hangi şekilde örn get vb neye izin verileceği belirtilebilir.

//api tasarlanırken özellikle cors yazılmalı kendi localimizde çalışırken sonra post edildiğinde çalışmamasının ilk muhtemlen sebebi cors kullanmmaktır.
