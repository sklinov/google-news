const express = require('express')
const googleNews = require('./googlenews')

const app = express()
const port = process.env.port || 5000

app.get('/', (req, res) => {
    googleNews()
    .then((news) => res.send(news))    
})



// Show error message 
const error = 'Please check your route'
app.get('*', (req, res) => res.send(error))

app.listen(port, () => console.log(`Google News App is listening on port ${port}!`))