const fs = require("fs");
const path = require("path");

const fsPromises = require(`fs`.promises);  //asenkronda olduğumuz için sırasıyla kodlar çalışmıyor fakat ven fs.promise dediğimde
//bu kod bitene kadar başka kod araya girmesin demek istiyorum.
const fileRead = async() => {
    try{
        await fsPromises.writerfile(path.resolve(__dirname, "text.txt")) //text dosyasının içerisindekileri dosyaya yazmasını bekle
    } catch (error){ //hatayla karşılaşırsan yakala.

    }

}


// const fs = require("fs");
// const data=fs.readFileSync(__dirname+'/data.txt','utf-8');
// console.log(data);

// const data2=fs.readFile(__dirname+'/data.txt','utf-8',(err,data)=>{
//     console.log(data);

// });

// javascript senkron bir dildir nodejs ise asenkron bu yüzden sync diyoruz ki senkronmuş gibi çalışmasını sağlamak yukarıdaki iki kodun birbirinden tek farkı budur.
//asenkron çalışması programı hızlandıran bir şeydir çünkü threadlerin beklememesini böylece trafik oluşmamasını sağlar.
//callback func önce dosya bulunur okunur veya yazılır,ondan sonra çalıştırılır ve ona göre ya hatayı tespit eder ya da hata yoksa datayı çıktı verir.
//not: readble okunabilir ve yazılabilir anlamına gelmektedir.