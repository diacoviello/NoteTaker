// import anything we need
const express = require("express");

// require routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// initialize app and create port
const app = express();
const PORT = process.env.PORT || 3000;

// setting up body aprsing for static and routing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// bring in routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// start my server
app.listen(PORT, () => {
  console.log(`My app is running on ${PORT}`);
});
