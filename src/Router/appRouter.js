const express = require('express')
const Router = express.Router()
const AppController = require('../Controller/AppController')

/* 
app.post('/api/v1/address/:id', (req, res, next) =>  {


    const file = req?.body

    console.log(file)

    // handle upload
    
    res.status(200).json({
        errCode :0,
        msg: 'ok',
        data : file,
        query: req.query
    })
})
*/

const initialRouterApp = (app) => {

    // Methods
    Router.get('/home/:id', AppController.WelcomeHome)
    Router.get('/test-ejs' , AppController.TestEjs)

    app.use('/api/v1/app', Router)
}

module.exports = initialRouterApp /*  module.exports === export default */


/* 
loc:8080/api/v1/app/home

*/