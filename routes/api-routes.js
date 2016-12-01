// var connection = require('../config/connection.js');
var path = require('path');

module.exports = function(app) {


/* A get request for displaying form so that the user can post history*/
	app.get('/form', function(req, res) {
		res.sendFile(path.join(__dirname, '../views/form.html'));
	})


// a post request to the mysql server after receiving user inputs from the form. Values for post request are coming from script.js
	app.post('/form/new', function(req, res) {
		console.log('req', req.body);
		var addHistory = req.body;

		var query = 'INSERT INTO history (history_date, content) VALUES (?,?)'
		connection.query(query, [addHistory.history_date, addHistory.content], function(err, result) {
			if(err)throw err;
		});
	})

	// this is a get request for the history page.
		app.get('/history', function(req, res) {
		res.sendFile(path.join(__dirname, '../views/history.html'));
		var query = 'SELECT * FROM history '
	})

}