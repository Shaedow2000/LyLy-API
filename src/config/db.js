import * as mongoose from "mongoose";
import 'dotenv/config';

const URI = process.env.URI;

export default connect = () => {
    mongoose.connect( URI ).then( () => {
        console.log( '=> Connected to DataBase.' );
    } );
}
