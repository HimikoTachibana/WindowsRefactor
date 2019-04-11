// Porting Windows code for the Linux OS.
const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

// Get a list of ninjas

router.get('/ninjas',function(req,res){
	res.send({type:'GET'});
});

// add a new ninja to the db
router.post('/ninjas',function(req,res){
	//res.set('Content-type','application/json');
	//console.log("request body goes as follows");
	//console.log(req.body);
	//let ninja= new Ninja(req.body);
	//ninja.save();
	//n
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
	});
        //res.send({type:'POST',body: req.body,name:req.body.name, rank:req.body.rank});
	//res.send({type:'POST',name: req.body.name,rank:req.body.rank});
});


//update a ninja in the db
router.put('/ninjas/:id',function(req,res){
        res.send({type:'PUT'});
});

//delete a ninja from the db
router.delete('/ninjas/:id',function(req,res){
        res.send({type:'DELETE'});
});

module.exports = router;


