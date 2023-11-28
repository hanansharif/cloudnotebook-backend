const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
    return mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
};

module.exports = connectToMongo;
