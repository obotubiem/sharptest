const express = require('express');

const app = express();
const cors = require('cors')
const serverError = require('./middlerware/serverError');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res)=> {
    res.json('hello')
})









app.use(serverError);
module.exports = app;