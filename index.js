console.log('Hello World');
require('dotenv').config();
const express = require('express')
// import express from "express"
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/safal', (req,res) => {
  res.send('Author is Safal')
})

app.get('/login', (req,res) => {
  res.send('<h1> successful login </h1>')
})

app.get('/color', (req,res) => {
  res.send(' <h2> happy Colors Day , i.e. HappyHoli</h2> ')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
}) 