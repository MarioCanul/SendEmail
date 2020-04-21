const express = require('express');
const cors= require('cors');
const app = express();
const multer = require('multer')
const upload = multer({dest:'images/'})
//settings
app.set('port',process.env.PORT ||4000);
//midedlewares
app.use(cors());
app.use(express.json());
app.use(upload.single('input'));
//routes
app.use('/api/Emails',require('./routes/Correos'));
module.exports = app;
//http://localhost:4000/api/Emails/