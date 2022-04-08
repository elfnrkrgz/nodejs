const {MongoClient} = require("mongodb")

const client =  new MongoClient('mongodb+srv://elfnrkrgz:elifnur123E-@cluster0.iwukr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const start = async () => {  //asenkron method oluşturduk için database içerisinde işlem yapılıyor.
    try{
        await client.connect(); //await diyerek bağlanıyoruz.
        console.log("DB connected.")
        await client.db().createCollection("users");
        const users = client.db().collection('users');
        await users.insertOne({name:"elif",age:22});
    }
    catch(error){
        console.log("error")
    }
} 

start()

//promise döndürüyorsa await ile bekleniliyor olmalı mimari. 
//Geriye dönen değer var. asenkron çünkü senkron olursa birden fazla veri kuyrukta bekler bu yüzden asenkron olarak saklıyoruz.