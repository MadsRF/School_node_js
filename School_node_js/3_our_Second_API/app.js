var express = require("express")
var app = express()

app.get("/", (req, res) => {
    const response = {
        message: "hello there"
    }
    res.send(response)

})

app.listen(4000)


