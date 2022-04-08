//yapılan isteğe göre geriye html sayfası göndermek

const http = require("http");
const fs = require("fs");
const path = require("path");
const { isAbsolute } = require("path");

const server = http.createServer((req, res) =>{
    console.log(req.url,res.method); //urlden gelen req alınır ve method olarak res verilir.

    res.setHeader('Content-Type','text/html')
    let path='./nodejs/'  //yapılan istek doğrultusunda sayfaya yönlendirme.
    switch(req.url){  //urle gelen istek alındı.
        case '/':
            path += 'about.html'
            break
        default:
            console.log("404 not found")

    }
    fs.readFile(path.resolve(__dirname, "about.html"),(err,data)=>{
        if(err){
            console.log(err);  //eğer htmlden alınan istek doğrultusunda bir hata ile karşılaşılırsa console yaz
            res.end()             

        }
        else{
            res.write(data)    //eğer hata yoksa datayı yaz.
            res.end
        }

    })
    server.listen(PORT, () => {
        console.log(`server running $(PORT)`);  //url üzerinden gelen isteği dinliyor olmamız gerekiyor. o yüzden server.listen kullanılıyor
        //ilk parametre port
    })
})