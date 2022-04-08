//EventEmitter sınıfı sayesinde özel olaylar tanımlayarak, tanımladığınız bu olayları istediğiniz zaman tetikleyebilirsiniz.
//EmitterEmitter sınıfından oluşturulan nesne bir hata ile karşı karşıya kaldığında “error (hata)” olayını çağırır. 
//Yeni bir dinleme eklendiğinde, “newListener”   olayı tetiklenir. Dinleme silindiğinde ise “removeListener” olayı tetiklenir. 
//EventEmitter “on” ve “emit” gibi çoklu özelliği sağlar.
// “on” özelliği bir fonksiyonu olaya bağlamak için kullanılırken “emit” özelliği bir olayı tetiklemek için kullanılır.


const Emitter = require("events");
const emitter = new Emitter ();  //emitter nesnesini oluşturuyoruz.

emitter.on('message',(data,second)=>{  //programın içerisinde message arar ve eğer bulursa callback fonk'unu çalıştırır. EMİTİ DİNLER.
    console.log(data);
    console.log(second);
})
const MSG = "mesaj"
emitter.emit ('message',MSG,222)  //emit: olayın gerçekleştirildiğinin sinyalini vermek anlamına gelmektedir.
 //eğer emitter.emit demezsek terminalde herhangi bir çıktı almayız çünkü message çalışır halde olmamış olur.

//çalışır hale getirebilmek için emitter.emit yapmalıyız. data dediğimiz MSG oluyor second dediğimiz 222 yi alıyor ve terminala yanyana yazıyor.


//not : Asenkron olmasına rağmen emitler nodejs içerisinde senkron olarak ilerler o yüzden emitlerin yapıldığı sıra önemli.