const EmailCtrl ={};
//var fs  = require('fs');
const email = require ("../servidor/email");

const oEmail=new email({
    "host":"smtp.gmail.com",
    "port":"587",
    "secure":false,
    "auth":{
        "type":"login",
        "user":process.env.USER,
        "pass":process.env.PASS,
    }
})
EmailCtrl.createEmail = async(req, res) =>{ 
  var Image = req.file;
  nombre=req.body.nombre;
  console.log(Image.path);
  
     let email={
         
         to:"snknargacuga@gmail.com",
         subject:"nuevo mensaje de ususario",
         attachments: [{   // utf-8 string as an attachment
             filename: `${Image.originalname}`,
             path:`${Image.path}`}],
         html:`<div>
         <p>Nombre:${nombre}</p>
         <p>Archivo: Archivo</p>
         </div>`
     };
     oEmail.enviarCorreo(email);//envio del mensaje ..
     res.json("mensaje enviado");
 
}

module.exports = EmailCtrl;