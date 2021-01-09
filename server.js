const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");


const PORT = process.env.PORT || 3000;
// instance of express
const app = express();
// middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// requiring routes that I have created
app.use(apiRoutes);
app.use(htmlRoutes);

// connecting mongoose to our mongoDB database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true });

// listening for the .env specific port or the assigned one that I have given
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});