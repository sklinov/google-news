const fetch = require('node-fetch')
const getTitles = require('./getTitles')
var parseString = require('xml2js').parseString

var googleNews = function() {
    return new Promise((resolve) => {
        try {
            const url = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en';
            fetch(url,{
                method: 'GET'
            })
            .then((res) => res.text())
            .then((xml) => {
              parseString(xml, function (err, result) {
                  var news = result
                  const titles = getTitles(news)
                  resolve(titles)
              });
            })
          } catch (err) {
            console.log(err)
          } 
    }) 
    
  }
  
  module.exports = googleNews;