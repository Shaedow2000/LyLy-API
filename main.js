import express from "express";
import "dotenv/config";

import connect from "./src/config/db.js";

const app = express();

const PORT = process.env.PORT;

app.listen( PORT, () => {
    console.log( `=> Listening on PORT:${ PORT }` );
    connect(); 
} );
