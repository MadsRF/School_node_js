const express = require("express");
app = express();

app.use(express.json());


app.post("/signup",  (req, res) => {
    return res.send({response: req.body });
});


const PORT = 9000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    else{
        console.log("server is running on: ", PORT);
    };
});