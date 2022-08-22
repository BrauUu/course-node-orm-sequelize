import 'dotenv/config';
import express from "express";

export default app => {
    app.use(express.json());

    app.get('/people', (req, res) => {
        res.status(200).send({msg: "Hi mom!"})
    });
    
};
