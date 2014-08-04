var mongodb = require('mongodb');


/* GET Phone users page. */
exports.list =  function(req, res) {
	 // var db = req.db;
	var MongoClient = mongodb.MongoClient;
	var db= MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	  if(err) {
	    console.log("Failed to connect to the database");
	  } else {
	    console.log("Connected to database");
	  }
 
	    var collection = db.collection('phonebook');
	    collection.find().toArray(function(err, items) {
	    	console.log(items);
	        res.render('userlist', {
	            "userlist" : items
	        });
	    });
    
	});
	 
}; 

