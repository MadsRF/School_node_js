const express = require("express");
const app = express();


app.use(express.static("public"));


app.get(("/script.js"), (req, res) => {
    console.log("script.js");
    return res.sendFile(__dirname + "/public/script.js");
});
app.get(("/css.css"), (req, res) => {
    console.log("css");
    return res.sendFile(__dirname + "/public/css.css");
});


app.get(("/"), (req, res) => {
    console.log("index");
    return res.sendFile(__dirname + "/public/pages/main_menu_page.html");
});
app.get(("/cmd_page"), (req, res) => {
    console.log("cmd_page");
    return res.sendFile(__dirname + "/public/pages/cmd_page.html");
});
app.get(("/functions_page"), (req, res) => {
    console.log("functions_page");
    return res.sendFile(__dirname + "/public/pages/functions_page.html");
});
app.get(("/node_page"), (req, res) => {
    console.log("node_page");
    return res.sendFile(__dirname + "/public/pages/node_page.html");
});
app.get(("/rest_api_page"), (req, res) => {
    console.log("rest_api_page");
    return res.sendFile(__dirname + "/public/pages/rest_api_page.html");
});
app.get(("/jquery_page"), (req, res) => {
    console.log("jquery_page");
    return res.sendFile(__dirname + "/public/pages/jquery_page.html");
});
app.get(("/js_page"), (req, res) => {
    console.log("js_page");
    return res.sendFile(__dirname + "/public/pages/js_page.html");
});
app.get(("/json_page"), (req, res) => {
    console.log("json_page");
    return res.sendFile(__dirname + "/public/pages/json_page.html");
});


console.log(process.env.PORT);
const PORT = process.env.PORT ? process.env.PORT : 8000;
const server = app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting server");
    };
    console.log("this server is running", server.address().port);
});