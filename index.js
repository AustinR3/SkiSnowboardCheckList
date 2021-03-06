const express = require("express");
const ejs = require("ejs");

// Create express app
const app = express();



// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// // routes
// app.get("/", (req, res) => {
//   res.render("index");
// });
app.get("/feedback.ejs", function (req, res) {
  res.render("feedback", {});
});

app.get("/index.ejs", function (req, res) {
  res.render("index", {});
});

app.get("/Gearlist.ejs", function (req, res) {
  res.render("Gearlist", {});
});

app.get("/tricklist.ejs", function (req, res) {
  res.render("tricklist", {});
});

app.get("/", function (req, res) {
  res.render("index", {});
});


// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));