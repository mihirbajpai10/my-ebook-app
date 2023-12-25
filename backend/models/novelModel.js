const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    image : String,
    author: String,
    year: String,
    publisher: String,
    genre: String,
    file: String,
});

module.exports = model('novels', myschema);