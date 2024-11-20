import mongoose from "mongoose";

export default async()=>{
    const config = useRuntimeConfig();
    const DB_OPTIONS = {
        dbName: config.dbName,
        user: config.user,
        pass: config.pass,
        authSource: config.authSource
    }

    const connectToDatabase = async () => {
        try{
            await mongoose.connect(config.dburl, DB_OPTIONS);
            console.log("MongoDB connected successfully...");
        } catch(err){
            console.error("MongoDB connection error: " + err);
        }
    };

    mongoose.connection.on("disconnected", () => {
        console.error("MongoDB disconnected. Trying to reconnect...");
        connectToDatabase();
    });

    await connectToDatabase();
};
