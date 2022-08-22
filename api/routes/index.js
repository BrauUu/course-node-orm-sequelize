require('dotenv/config');
const express = require("express");

module.exports = app => {
    app.use(express.json());

    app.get('/people', (req, res) => {
        res.status(200).send({msg: "Hi mom!"})
    });
    
};
