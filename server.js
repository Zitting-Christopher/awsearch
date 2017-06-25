const express = require('express')
const app = express()
var http = require("http")
, url  = require('url');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('', __dirname + '/');
app.set('view engine', 'ejs');

app.use(bodyParser.json());


app.listen(3000, function () {})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/search', function (req, res) {
	var queryData = url.parse(req.url, true).query;
	var keywords = queryData.keywords;
  var params = {keywords: keywords};
  res.render('search', params);
})

app.use(express.static('w10'))


function walmart(search){
	
    console.log(search)
	return search
    
}
