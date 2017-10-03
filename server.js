/*var express = require('express'),
    path = require('path'),
    http = require('http'),
    wine = require('./routes/ag-cerise');*/
var express = require('express'),
    path = require('path'),
    http = require('http');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  // 'default', 'short', 'tiny', 'dev' 
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

/*
app.get('/ag-cerise', wine.findAll);
app.get('/ag-cerise/:id', wine.findById);
app.post('/ag-cerise', wine.addWine);
app.put('/ag-cerise/:id', wine.updateWine);
app.delete('/ag-cerise/:id', wine.deleteWine);
*/
/*
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});*/
