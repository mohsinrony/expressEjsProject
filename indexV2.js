'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');  // set the view engine to ejs
app.set('views', path.join(__dirname, 'pageTemplates')); // set the views directory

const {port, host} = require('./config');

app.use(express.static(path.join(__dirname, 'public'))); // set the public folder

app.use(express.urlencoded({extended:false})); // parse application/x-www-form-urlencoded

const homePath = path.join(__dirname, 'home.html');

const users = {
  'jdoe': 'password',
  'jane': '1234',
  'bob': 'asdf'
};



app.get('/', (req, res) => {res.sendFile(homePath);});

app.post('/login', (req, res) => {
  const {username, password} = req.body;

if(Object.keys(users).includes(username) && users[username] === password){

  res.render('result',{
    title: 'Your Data',
    header:'You Submitted',
    data: username, password}); 
  }
 else {
  res.render('errorPage',{username});
}
});

app.get('/users', (req, res) => {
  res.render('users', {
    title: 'Users',
    header: 'Names',
    usernames: Object.keys(users)
  });
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});