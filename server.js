const express = require('express')
const bodyParser = require('body-parser');
const app = express()
require('dotenv').config()
const port = process.env.PORT


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/* 
    dotenv : process.env
    require (ES5) commonjs = import(ES6) js modules
*/

// GET /api/v1/duong dan mong muon
// req client gui len => express 
// res server tra ve phia client => express 
// req.header = chrome
// next middleware phần mềm trung gian => express => next là 1 function => 

app.get('/dssds', (req, res,next) => {
    // check jwt authorization

        if(true) {
            next()
        }else{
            Promise.reject()
        }
    
}, (req, res,next) => {})

// 200 | 304

const data = [
    {
        name: 'typeScript',
        color:'#fff'
    },
    {
        name: 'typeScript 1',
        color:'#ccc'
    }
]

// data

/* 
    req : query : {
        search: typeScript
    }

    : body: {
       rong 
    }
    => req.query.search
*/

//


app.get('/api/v1/list-address',(req, res, next) => {
    // 
    
    // res.status(401).json('o co quyen')
    req.file = 'sdsfdsfsdsddsfd'
    
    next()
} , (req, res, next) =>  {

    const search = req.query.search

    // const dataSearch = data.find(search)

    res.status(200).json({
        errCode :0,
        msg: 'ok',
        data : [],
        body: req.body,
        query: req.query,
        file: req.file
    })
})


app.get('/api/v1/list-address',  (req, res, next) =>  {

    const search = req.query.search

    // const dataSearch = data.find(search)

    res.status(200).json({
        errCode :0,
        msg: 'ok',
        data : [],
        body: req.body
    })
})

/* 
    req: body: {
        "image-upload": fileUpload,
        id:sdfsd
    }

    query: {
        isUpload: true
    }
*/
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

// put tuong tu post

/* 
    query: {

    }


    params: {
        slug
    }
*/

// delete 
app.delete('/api/v1/test-api/:id', (req, res, next) => {
    res.status(200).json({
        params: req.params
    })
})

/* 

    get , post , put, delete : req.query, req.params, req.body => no la object

    khac: get lam gi co req.body = obj rong => co tinh truyen no van rong
    giong: post , put, delete: req.query, req.params, req.body => khong bi rong 

    next() => chuyen sang 1 cai khac 

    app.get('/api/v1/list-address',(req, res, next) => {}, (req, res, next) => {
        req.headers 
    })

    req giong nhau no la 1 obj => no khong phai cua chrome va header cua chrome gui len no dc set vao 1 key ten la header trong bien req (req.headers)
    
*/


// ES5 => không hỗ trợ body

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})