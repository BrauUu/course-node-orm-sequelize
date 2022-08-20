require('dotenv/config');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})

app.get('/test', (req, res) => {
    res.status(200).send({msg: "Hi mom!"})
})

module.exports = app;




