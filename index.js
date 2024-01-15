'use strict';

const path = require('path');
const express = require('express');
const app = express();

const {port, host} = require('./config');
/* const { title } = require('process'); */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pageTemplates'));

const homePath = path.join(__dirname, 'home.html');

app.get('/', (req, res) => {res.sendFile(homePath);});
app.post('/login', express.urlencoded({extended:false}),(req, res) => {res.render('result',{
title: 'Your Data',
header:'You Submitted',
data: req.body});});
 // express.urlenconded() creates the body object

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
})