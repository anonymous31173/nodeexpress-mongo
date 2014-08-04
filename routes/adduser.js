/*
 * 
 * A simple CRUD application using Node Express & MongoDB in Enide
 * Developed by: Tinniam V Ganesh
 * Date: 04 Aug 2014
 * File: Add User
 */
var mongodb = require('mongodb');
/* POST to Add User Service */
exports.list = function(req, res) {
   
    // Set our internal DB variable
    var MongoClient = mongodb.MongoClient;
	var db= MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	  if(err) {
	    console.log("Failed to connect to the database");
	  } else {
	    console.log("Connected to database");
	  }
    // Get our form values. These rely on the "name" attributes
    var FirstName = req.body.firstname;
    var LastName = req.body.lastname;
    var Mobile = req.body.mobile;

    // Set our collection
    var collection = db.collection('phonebook');

    // Insert the record into the DB
    collection.insert({
        "FirstName" : FirstName,
        "LastName" : LastName,
        "Mobile" : Mobile
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, redirect to userlist - Display users
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
   });
};
