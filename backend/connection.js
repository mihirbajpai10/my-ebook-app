const mongoose = require('mongoose');

const url = "mongodb+srv://mihirbajpai10:1234@cluster0.xj9gikf.mongodb.net/novelebooks?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;