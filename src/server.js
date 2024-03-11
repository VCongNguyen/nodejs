const { render } = require('ejs')
const express = require('express')
const path = require('path');
require('dotenv').config()
const app = express();

const port = process.env.PORT
const hostname = process.env.HOST_NAME


//config teamplat engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//khai báo route
app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
})

app.get('/abc', (req, res) => {
    res.send('Hello World! abc')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})