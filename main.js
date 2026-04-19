import express from "express";
import "dotenv/config";

import connect from "./src/config/db.js";
import router from "./src/routes/protected.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import publicRouter from "./src/routes/public.js";

const app = express();

// Middlewares
app.use("/api", router);
app.use("/auth", publicRouter);
app.use(errorHandler);

// Start server
async function start() {
  const PORT = process.env.PORT;

  try {
    app.listen(PORT, () => {
      console.log(`=> Listening on PORT:${PORT}`);
    });

    await connect();
  } catch (err) {
    console.log(`!> Error connecting to Data Base: ${err.message}`);
  }
}

start();
