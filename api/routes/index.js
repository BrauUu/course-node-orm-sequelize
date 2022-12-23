require('dotenv/config');
const express = require("express");
const peopleRoutes = require('./peopleRouter')

module.exports = app => {
    app.use(express.json());
    app.use('/people', peopleRoutes)
};
