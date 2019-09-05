const App = require('./app')

const { app } = App

const port = process.env.port || 5000

app.listen(port, () => console.log(`Google News App is listening on port ${port}!`))