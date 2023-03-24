const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/offering"

connectToMongo = () => {
    if(mongoose.connect(mongoURI)){
        console.log("Connected To Mongo")
    }
}

module.exports = connectToMongo;
