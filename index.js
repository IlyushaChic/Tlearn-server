require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./db");
const router = require("./router/index");
const fileUpoad=require('express-fileupload')
const errorMiddleware = require("./middleware/error-middleware");

const PORT = process.env.PORT || 5000;
const app = express();

//прописывать хост фронтенда
app.use(
  cors(
    {
    credentials:true,
    origin: process.env.CLIENT_URL,
  //  "http://localhost:3000"
  }
  )
);
app.use(express.json());
app.use(fileUpoad({}))
app.use(cookieParser());
app.use("/api", router);




app.use(errorMiddleware);
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
