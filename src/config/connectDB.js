const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        await mongoose.connect('mongodb://localhost:27017/node-js-blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })

        console.log("Connect DB Successfully");
    } catch (error) {
        console.log("Connect Db Failed", error);
    }
}

module.exports = connectDB