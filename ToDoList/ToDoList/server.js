const path = require('path');
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'))
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname + "/ToDoList.html"));
});
app.listen(1337);