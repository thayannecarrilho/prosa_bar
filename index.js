const express = require('express');
const pool = require('./model/database');

const home = require('./routes/homeRoute')



const app = express();


app.use(express.static('public'));


app.set('view engine', 'ejs');

app.use(
    express.urlencoded({
        extended: false,
    }),
);


app.use(express.json());


app.use('/', home)


///
const port = 3000;
app.listen(port,()=>{
    console.log('servidor rodando')
})