import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();
export async function connectionMongo() {
    try {
        const uri = `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@cluster0.2f7rqil.mongodb.net/${process.env.atlasDb}`;
        const options = {
            userNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } catch (error) {
        return { status: 500, message: error };
    }
}