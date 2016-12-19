var express = require('express');
var bodyParser = require('body-parser');
var apiroutes = require('./routes/api-routes');


// Sets up the Express App and connect to server or local host whatever is available
// =============================================================
var app = express();
var PORT = process.env.PORT || 9080;

// this is the confirm from body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use('/', express.static('views'));
app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

apiroutes(app);

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})