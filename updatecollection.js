//update collection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	
	var queryEntry = {genre: "Horror"};
	var newData = {genre: "Weeb Trash"};
	var update = {$set:newData};
	
	dbObj.collection("games").updateOne(queryEntry, update, function(err,res){
		if(err)throw err;
		console.log("Document updated");
		db.close();
	});
	
});