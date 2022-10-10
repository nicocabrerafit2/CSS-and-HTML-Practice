const express = require("express");
const app = express ();
const path = require('path');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/home.html')
)})

app.listen(3000, () =>{
    console.log('Esta corriendo por puerto',3000);
})

app.use(express.static('public'));


