// require mongoose
const mongoose = require ("mongoose");

//connect DB
const connectDB = async() => {
    try{
            //step1
            await mongoose.connect(process.env.DB_URI);
            //step2
            console.log("Database connected ..");
    } catch (error) {
        console.log("Database is not connected", error);

    }
};

module.exports = connectDB;