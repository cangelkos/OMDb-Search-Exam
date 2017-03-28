let express = require('express')
let path = require('path')

const app = express()

const NODEPORT = process.env.PORT || 3000;

//Serving the static files, index.html and redirecting 404s to index.
app.use(express.static(path.join(__dirname, '../client/public')))
app.use('/*', express.static(path.join(__dirname, '/../client/public/index.html')));

app.listen(NODEPORT, () => {
  console.log('Server is Running on port ', NODEPORT)
})