const express = require('express')
const googleNews = require('./googlenews')

const app = express()

app.get('/', (req, res) => {
    googleNews()
    .then((news) => res.send(news))    
})

// Show error message 
const error = 'Please check your route'
app.get('*', (req, res) => res.send(error))

module.exports = { app, error } 