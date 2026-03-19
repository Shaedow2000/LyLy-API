import * as mongoose from "mongoose";
import 'dotenv/config';

const URI = process.env.URI;

export default async function connect() {
    await mongoose.connect( URI );

    console.log( '=> Connected to DataBase.' );
}
