const mongoose = require('mongoose');
const Role = new mongoose.Schema({
    value:       {type:String,required:true,unique:true}
    
    
})

module.exports = mongoose.model('role',Role)