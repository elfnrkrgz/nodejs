// En basit haliyle bir server ayağa kaldırmak aşağıdaki kodlar ile yapılıyor. Port numarası dışında localhost'unu İpsini her şeyini de tanımlayabiliriz.

const http = require("http");

const PORT = 3000;  //3000 portuna sahip bir server oluşturabilmek için http require edildi.

const server = http.createServer((req, res) => {  //server tanımını yapabilmek için bir tane server yaratıyoruz
                                                  // ve kullanıcı tarafından yapılacak olan request yani istek ilk parametre olarak verilir
                                                  //  ve server'ın cevabı olacak olan response ikinci parametre olarak verilir.

    // const url = req.url;  //urle gelen istekleri tutuyoruz.
    // res.end(url);     //response ile cevap sonlandırıyoruz.

    // res.statusCode = 200; //başaralı cevap döndüğü anlamına geliyor
    // res.setHeader('Content-Type', 'text/plain');       
    // res.write('Hellooo')
    // res.end('Hellooo')

    //res.setHeader('Content-Type', 'text/html');      html formatında h1 içerisine hellooo yazıldı.  
    // res.write('<h1>Hellooo<h1/>')
    //res.end()     //yazılan her şey end yapılmalı.!!!!!!!!

    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.)

    res.setHeader('Content-Type', 'application/json'); //cevabı döndürürken hangi tipte geri döneceğini belirlemek için yazılır.

    res.end(JSON.stringify({id:1, name: 'BIL425'}));  //json formatında olan bir data dönmesini istedik istediğimiz jsonun içerisinde {
                                                                                                                                       //id:1,
                           //Stringify fonksiyonu herhangi bir Javascript nesnesini alır ve onu string formatına çevirir.              //name:'bil245'
                                                                                                                                       //} var.
})

server.listen(PORT, () => {
    console.log(`server running $(PORT)`);  //url üzerinden gelen isteği dinliyor olmamız gerekiyor. o yüzden server.listen kullanılıyor
    //ilk parametre port
})