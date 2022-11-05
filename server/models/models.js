const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://Emily_Paine:W47nGSrIxOLcpVcJ@cluster0.lofufqp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'travelAppDb'
})
.then(() => console.log('Connected to MongoDB.'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

module.exports = {

};


