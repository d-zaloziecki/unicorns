const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const Unicorns = require('./models/unicornModel');
const router = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/unicornsDB')

router.get('', (req,res)=>{
    Unicorns.find({}, (err, data)=>{
        if (err) console.log(err)

        res.send(data)
    })
})

router.post('', (req,res)=>{
    let unicorn = new Unicorns({
        name: req.body.name,
        magic: req.body.magic
    })

    unicorn.save().then(()=>{
        Unicorns.find({}, (err, data)=>{
            if (err) console.log(err)
    
            res.send(data)
        })
    })
})

router.delete('/:id', (req,res)=>{
    Unicorns.findByIdAndRemove(req.params.id, ()=>{
        Unicorns.find({}, (err, data)=>{
            if (err) console.log(err)
    
            res.send(data)
        })
    })
})

module.exports = router