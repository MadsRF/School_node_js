// Modules
const express = require("express");
const app = express();

// Makes public folder static, so it's always is accessable    
app.use(express.static("public"));

// Firebase Connection
const admin = require('firebase-admin');
let serviceAccount = require(__dirname + '/test-3ad87-bc8cc74b3d08.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

// Firebase Collection
let docRef = db.collection('coffee').doc();

// sends data to the firebase database  
//let setCoffee = docRef.set({ title: "test fra node" });

// http get request
app.get("/title", (req, res) => {
  // For loop goes thorugh our collection list and displays them in log. 
  db.collection('coffee').get().then((snapshot) => {
    snapshot.forEach((doc) => {
      let test = doc.data()
      return res.send(test); 
      //console.log(doc.id, '=>', doc.data().title);
    });
  })
  // Error handling for not being able to get data
  .catch((err) => {
    console.log('Error getting documents', err);
  });
   
});


// http get request
app.get("/", (req, res) => {
    console.log("frontpage");

    // Returns frontpage.html when accessing localhost:9000/
    return res.sendFile(__dirname + "/public/frontpage.html");
});

// listening for incoming trafic on port 9000
app.listen(9000);



