// Modules
const express = require("express");
const app = express();

// makes public folder static   
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

// data to send 
//let setCoffee = docRef.set({ title: "test fra node" });

// 
app.get("/", (req, res) => {
    console.log("frontpage");

    db.collection('coffee').get().then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data().title);
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });



    return res.sendFile(__dirname + "/public/frontpage.html");
});

app.listen(9000);



