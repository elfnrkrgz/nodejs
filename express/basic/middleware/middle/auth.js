const auth = (req,res,next)=>{
    console.log(`authenticaiton: ${new Date().toUTCString()}`);
}
module.exports=auth; // app.js ,içerisinde kullanılabilmek için import etmemizi sağlıyor export