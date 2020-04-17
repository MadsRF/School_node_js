// the mongo module we downloaded
const mongoClient = require("mongodb").MongoClient;

// URL our server is running on
const connectionUrl = "mongodb://localhost:27017";

// our database from mongo
const dbName = "bigcatszoo";

// callback function for connection to server (has no error handling) useUnifiedTopology: true removes some warning with depracted
mongoClient.connect(connectionUrl, { useUnifiedTopology: true}, (error, client) => {
    const bigCatsDB = client.db(dbName);
    
    const cats = bigCatsDB.collection("cats");
/*
    // callback function for reading data of database and then close connection to db.
    //find all the cats
    cats.find().toArray((error, foundCats) =>{
        console.log(foundCats);
        client.close();
    });

     // limits to 2 from array
    cats.find().limit(2).toArray((error, foundCats) =>{
        console.log(foundCats);
        client.close();
    });
*/
     // find all Tigers from array. uses projection to not include the id. 0 = false 
     cats.find({species: "Tiger"}, {projection: {_id: 0}}).toArray((error, foundCats) =>{
        console.log(foundCats);
        client.close();
    });


});

