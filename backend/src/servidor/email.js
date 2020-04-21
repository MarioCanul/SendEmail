const nodemailer = require("nodemailer");
class Email{
    constructor(oConfig){
this.createTransport = nodemailer.createTransport(oConfig); // Creacion del tranportador necesita Configuracion pasada de email.controller Oemail
    }
    enviarCorreo(oEmail){//funcion que nevia el mensaje. une al transporter con la configuracion y mensaje
        try{
            this.createTransport.sendMail(oEmail,function (error,info){
                if(error){
                    console.log("Error al enviar el email "+ info);
                }else{
                    console.log("Correo enviado correctamente "+ info);
                }
                this.createTransport.close();
            });
        }catch(x){
            console.log("Email.enviarCorreo --- Error --"+ x);
        }
    }
}
module.exports=Email;