'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');  // set the view engine to ejs
app.set('views', path.join(__dirname, 'pageTemplates')); // set the views directory

const {port, host} = require('./config');

app.use(express.static(path.join(__dirname, 'public'))); // set the public folder

const homePath = path.join(__dirname, 'home.html');