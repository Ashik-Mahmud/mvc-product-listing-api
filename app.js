const express = require('express');
const cors = require('cors');
const app = express();

/* 
init middle wares for express
*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Putting all the routes here */


/* Testing API */
app.get("/", (req, res) => {
    res.send({success: true, message: "Welcome to the API"});
})



module.exports = app;