const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const initialRouterApp = require("./Router/appRouter");
const connectDB = require("./configApp/connectDB");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

// connect DB
connectDB();

// Defined Router
initialRouterApp(app);

// ES5 => không hỗ trợ body

// view engine configuration

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
