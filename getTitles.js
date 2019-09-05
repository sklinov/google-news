var getTitles = function(news) {
    var titles
    titles = news.rss.channel[0].item.map(item => {
        var title = {};
        var key = item.guid[0]['_']
        title[key] = item.title[0]
        return title;
    })
    titles = JSON.stringify(titles); 
    return titles
}

module.exports = getTitles