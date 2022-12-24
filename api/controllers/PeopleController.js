//const { where } = require('sequelize/types');
const database = require('../models');
class PessoaController {

    static async findAll(req, res) {
        try {

            const people = await database.People.findAll();
            return res.status(200).json(people);

        } catch (err) {
            return res.status(500).json(err.message);
        }

    }

    static async findOne(req, res) {
        try {

            const { id } = req.params
            
            const person = await database.People.findOne( {where : {id: Number(id)}} )
            
            if(!person) 
                return res.status(404).json({"message": "id not found"})
            
            return res.status(200).json(person);

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async create(req, res) {
        try {
            const body = req.body

            const person = await database.People.create(body)

            return res.status(201).json(person)

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
    
    static async update(req,res) {
        try {

            const { id } = req.params
            const body = req.body
            
            const status = await database.People.update(body, { where: { id: id }})

            if(status == 0){
                return res.status(400).json()
            }

            const person = await database.People.findOne( {where : {id: Number(id)}} )

            return res.status(200).json(person)

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async delete(req,res) {
        try {

            const { id } = req.params
            
            const status = await database.People.destroy({ where: { id: id }})

            if(status == 0){
                return res.status(400).json()
            }

            return res.status(204).json()

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }


}
module.exports = PessoaController;