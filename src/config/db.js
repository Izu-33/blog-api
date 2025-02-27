const mongoose = require('mongoose');
require('dotenv/config');

let connectionString = `mongodb+srv://${process.env.DB_USER}:` + 
                        `${process.env.DB_PASSWORD}@cluster0.nt8hk.` + 
                        `mongodb.net/blog?retryWrites=true&w=majority` + 
                        `&appName=Cluster0`;

const connectToDB = async function() {
    try {
        await mongoose.connect(connectionString);
        console.log("DB Connected Successfully!");
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectToDB;