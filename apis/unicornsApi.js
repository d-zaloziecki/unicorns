const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const Unicorns = require('./models/unicornsModel');
const router = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/unicornsDB')

router.get('', (req,res)=>{

})

router.post('', (req,res)=>{
    
})

module.exports = router