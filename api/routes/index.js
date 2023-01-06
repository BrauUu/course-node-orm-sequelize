require('dotenv/config');
const express = require("express");
const peopleRoutes = require('./peopleRoutes')
const levelsRoutes = require('./levelsRoutes')
const classesRoutes = require('./classesRoutes')

module.exports = app => {
    app.use(express.json());
    app.use('/people', peopleRoutes)
    app.use('/levels', levelsRoutes)
    app.use('/classes', classesRoutes)
};
