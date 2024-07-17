const express = require("express");
const { notFoundError, errorHandler } = require("./utils/error-handling.js");
const { AllRouters } = require("./router/index.routes.js");
const { default: mongoose } = require("mongoose");
const app = express();
mongoose
  .connect(
    "mongodb+srv://Bahar:6PEfxjCNRZ6C4toS@cluster0.qeeqggd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(() => {
    console.log("connected to Mongodb");
  })
  .catch((err) => console.log(err.message));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AllRouters);
app.use(notFoundError);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server Run http://localhost:3000");
});
