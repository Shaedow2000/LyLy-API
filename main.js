import express from "express";
import "dotenv/config";

import connect from "./src/config/db.js";
import router from "./src/routes/protected.js";
import errorHandler from "./src/middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use( '/api', router );
app.use( errorHandler );

// Start server
const PORT = process.env.PORT;

app.listen( PORT, () => {
    console.log( `=> Listening on PORT:${ PORT }` );
    connect(); 
} );
