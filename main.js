import express from "express";
import "dotenv/config";

import connect from "./src/config/db.js";
import router from "./src/routes/protected.js";

const app = express();

// Middlewares
app.use( '/api', router );

// Start server
const PORT = process.env.PORT;

app.listen( PORT, () => {
    console.log( `=> Listening on PORT:${ PORT }` );
    connect(); 
} );
