const express = require("express");

const path = require("path");
const ejs = require("ejs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));