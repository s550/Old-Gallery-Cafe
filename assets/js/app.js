const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Home Route
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, '../../', '/index.html'));
});





app.listen(port);