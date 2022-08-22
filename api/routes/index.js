require('dotenv/config');
const express = require("express");
const peopleRoutes = require('./peopleRouter')

export default app => {
    app.use(express.json());
    app.use(peopleRoutes)
    
};
