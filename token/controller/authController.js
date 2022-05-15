const {validationResult} = require ("express-validator")


class authController {
    async register(req,res){
      try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message:'Errors',errors})
        }
        
      }catch(error){


      }
    }
    
}

module.exports =authController