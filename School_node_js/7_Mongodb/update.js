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

    cats.updateOne({species: "pig"}, {$set: {species: "piglion", age: 28}}, (error, updatedCats) =>{
        console.log(updatedCats);
        client.close();
    });

});