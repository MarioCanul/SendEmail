import React,{Component}  from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
 class contacto extends Component{
   constructor(props){
     super(props)
     this.State={
      
     }
   }
 
     Submit=(e)=>{
       e.preventDefault()
       //var f = e.target.files; //el archivo
       //let nombre=document.getElementById("nombre").value;
       var form = document.getElementById("uploadform")
       var formdata = new FormData(form);
       
      //formdata.append("image",f) //creacion del form data(nombre, y contenido)
      //formdata.append("nombre",nombre) //creacion del form data(nombre, y contenido)
      console.log(formdata);
     
      if(formdata){
       Axios.post('http://localhost:4000/api/Emails/',formdata,{//envio con post
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        
        
      })
       .then(function(response){
              console.log(response);
       }).catch(function(error){
          console.log(error);
       });
      }
      console.log(formdata);
   }

    render(){
        return(
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                
                <Typography variant="h4">
                 Contacto
                </Typography>
              <form className="form" id="uploadform" autoComplete="off" encType="multipart/form-data">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="nombre"
                  label="nombre"
                  name="nombre"
                />
               <input type="file" name="input" id="inputFileServer"  />
              
                <Button
                   onClick={this.Submit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit"
                     
                >
                  Regristrarse
                </Button>
              </form>
            </div>
          </Container>

        )
    }
}
export default contacto ;
