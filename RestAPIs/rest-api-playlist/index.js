const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// Note we add useNewurlParser so we can get rid of deprecated promise 
// warnings
mongoose.connect('mongodb://localhost/ninjago',{ useNewUrlParser: true } );
mongoose.Promise = global.Promise;
//app.use(bodyParser.json());

var body=bodyParser.json();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//console.log(body)
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

//initialize routes 
app.use('/api',routes);




//Listening to HTTP requests


// the '/' means route 
/*app.get('/api',function(req,res){
	//Browser at this point is still spinning because the request is still being handled
	console.log('GET reqeust');
	res.send({name: 'Yoshi'});
});*/


// Listen for requests at a specific port

app.listen(process.env.port||4000,function(){
	console.log("Hello world: ");
	console.log(body);
	console.log(`now listening for requests`);
});



