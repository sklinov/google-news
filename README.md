# Google news titles server
This express.js-powered app gets current news from Google News RSS channel (https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en) and returns news' titles as a JSON object
```
[
    {
        unique_id_of_the_news_item_as_a_string : title_as_a_string
    },
    ...
]
```
Example:
```
[
    {
        "52780364378252": "Hurricane Dorian Updates: Category 3 Storm Rakes the Carolinas - The New York Times"
    },
    {
        "CAIiENdEqg_vhEACzcgqQjomAA0qGAgEKg8IACoHCAowhK-LAjD4ySww69W0BQ": "Feds grill captain of doomed California boat Conception - New York Post "
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
### Test
Run available unit tests with `Jest`
```
yarn test
```
or
```
npm run test
```