const fs = require("fs");
const path = require("path");
const fsPromises = require("fs/promises");


const logger = async (message,logName)=>{
    const currentDate= new Date().toUTCString(); //log oluşturuldu.
    const logMessage = `${currentDate}\t${message}`; //gelinen mesaja geldiğinde log bunları basabilmesi için bunları yazıyoruz.
    //birden fazla kişinin aynı mesaja farklı loglar ile ulaşılacağı göz önünde bulundurulduğu zaman yapının asenkron olarak oluşturulması gerektiğini düşünmeliyiz ki bekleme kuyrukları oluşmasın.
    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){ // '..' dirname olduğumuz yeri veriyor .. nokta kullanıldığı zaman bir üst seviyeye çıkmamızı sağlıyor.path join ile bunu yapabiliyoruz onun bir özelliğidir.
            await fsPromises.mkdir(path.join(__dirname,'..','logs'));
        }
        
        await fsPromises.appendFile(path.join(__dirname,'..','logs',logName),logMessage);
          

    } catch (error){
       console.log("error")
    }
}

module.exports=logger;
//tek bir log file açılıyor ve her log isminin değiştirilmesiyle tekrar tekrar kullanılabilir hale geliyor.