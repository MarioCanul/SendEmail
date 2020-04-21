const { Router } = require('express');
const router = Router();
const multer = require('multer')
const uploda = multer({dest:'/images'})
const { createEmail, getEmails } = require('../controllers/email.controllers');
router.route('/')
    
    .post(createEmail)

module.exports = router;