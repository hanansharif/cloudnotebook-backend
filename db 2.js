const mongoose = require('mongoose');

const mogoURI = "mongodb://localhost:27017/"

const connetToMongo = () => {
    mongoose.connect(mogoURI, () => {
        console.log('connected to mongo successfully');
    })
}