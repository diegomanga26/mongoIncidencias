import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config("../");

async function connectionMongo() {
    try {
        const uri = `mongodb+srv://diegoalexandermanga:diegomanga990726@cluster0.2f7rqil.mongodb.net/${process.env.atlasDb}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } catch (error) {
        return { status: 500, message: error };
    }
};

export const collGenerator = async (coleccion) => {
    const db = await connectionMongo();
    const newCollection = await db.collection(coleccion);
    return newCollection;
};