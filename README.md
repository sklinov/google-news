# Google news titles server
This express.js-powered app gets current news from Google News RSS channel (`https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en`) and returns news' titles as a JSON object
```
[
    {
        unique_id_of_the_news_item_as_a_string: title_as_a_string
    },
    ...
]
```
## Main commands
### Install main dependencies:
```
yarn
```
or 
```
npm install
```
### Run dev server with `nodemon`
```
yarn server
```
or
```
npm run server
```
The app should be accessible @ http://localhost:5000