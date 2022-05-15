const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./router/authRouter')
const port = process.env.PORT || 3000
const hostname = '127.0.0.1'

app=express()
app.use(express.json)
mongoose.connect('mongodb://127.0.0.1/token_db',{
    useNewUrlParser: true,      //hataları önlemek için kullanılır.
    useUnifiedTopology: true,
   

})







app.listen(port,hostname,()=>{
    console.log(`Server çalışıyor  http://${hostname}:${port}/`)
})
