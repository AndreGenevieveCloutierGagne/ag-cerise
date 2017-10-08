console.log('May Node be with you')
// npm install express --save
// npm install nodemon --save-dev    OUR ./node_modules/.bin/nodemon server.js
/// npm install body-parser --save
/// npm install mongodb --save
// npm install ejs --save

const express = require('express');
const bodyParser= require('body-parser')
const app = express();

const MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var dataBase;
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.listen(3003, function() {
  console.log('listening on 3003')
})

//app.get('/', function (request, response) {
app.get('/', (req, response) => {
	console.log("DEBUT app.get");
  // do something here
   //response.send('Hello World zz');
	///response.sendFile(__dirname +  '/public/index.html');  ///ac: ceci est bon
   
	var cursor = dataBase.collection('quotes').find();
    //console.log(cursor);
    dataBase.collection('quotes').find().toArray(function(err, results) {
		if (err) return console.log(err)
		console.log(results)
		// send HTML file populated with quotes here
		response.render('index.ejs', { quotes: results} );
		//response.render('index.ejs', "qui est render." );
	})
	console.log("FIN app.get");
})

/// npm install body-parser --save
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo! DEBUT app.post')
  console.log(req.body);
  //res.render(view, locals)
  dataBase.collection('quotes').save(req.body, (err, result)=> {
	  if( err ) return console.log(err);
	  
	  console.log('saved to database')
	  res.redirect('/');
  })
console.log( 'FIN app.post')
})

/// npm install mongodb --save
//MongoClient.connect('link-to-mongodb', (err, database) => {
/*MongoClient.connect('http://localhost:27017', (err, database) => {
  // ... start the server
})*/
//var mongoClient = new MongoClient(new Server("localhost", 27017), {native_parser: true});

var myCollection;
var db = MongoClient.connect('mongodb://127.0.0.1:27017/bd_ulaval', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    myCollection = db.collection('bd_ulaval');
	dataBase  = db;
	//app.listen(3004, () => {
    //console.log('listening on 3004')
  //})
});
/*mongoClient.open(function(err, mongoClient) {
	console.log('dedans   mongoclient.open!')
	var db1 = mongoClient.db("bd_ulaval");

    mongoClient.close();
});*/

/// MongoLAB  https://mongolab.com




console.log('May Node be with you SORTIE')