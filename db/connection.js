require("dotenv").config();
const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const main = async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@loginjwt.bbqlhfq.mongodb.net/?retryWrites=true&w=majority`);

        console.log("Conectado ao Banco!");

    } catch (error) {
        console.log(error);
    }
}

module.exports = main;