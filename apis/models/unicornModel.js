const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let unicornSchema = new Schema({
    magic: String,
    name: String    
});

const Unicorns = mongoose.model('unicorn', unicornSchema)

module.exports = Unicorns;