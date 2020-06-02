const express = require('express');
const router = express.Router();

const controller = require('../controllers/loginController.js')

router.get('/', controller.index);


validar: function(email, pass){
    retur db.Usuario.findOne({
   where:{ email:email,},
   })
   .then(results =>{
      if(results != null){
        let chequeo = bcrypt.compareSync(pass,results.password);
        if(chequeo){ 
        return results;
        } else{
            return undefined;
               }
      }else { return undefined }
    })
}
 

module.exports = router;