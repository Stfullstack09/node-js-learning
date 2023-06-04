const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const initialRouterApp = require('./Router/appRouter');
const connectDB = require('./config/connectDB');
const app = express()
require('dotenv').config()
const port = process.env.PORT


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

// connect DB
connectDB()

// Defined Router
initialRouterApp(app)

// ES5 => không hỗ trợ body

// view engine configuration

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


