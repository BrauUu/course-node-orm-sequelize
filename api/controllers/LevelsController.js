const database = require('../models');
class LevelsController {

    static async findAll(req, res) {
        try {

            const levels = await database.Levels.findAll();
            return res.status(200).json(levels);

        } catch (err) {
            return res.status(500).json(err.message);
        }

    }

    static async findOne(req, res) {
        try {

            const { id } = req.params
            
            const level = await database.Levels.findOne( {where : {id: Number(id)}} )
            
            if(!level) 
                return res.status(404).json({"message": "id not found"})
            
            return res.status(200).json(level);

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async create(req, res) {
        try {
            const body = req.body

            const level = await database.Levels.create(body)

            return res.status(201).json(level)

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
    
    static async update(req,res) {
        try {

            const { id } = req.params
            const body = req.body
            
            const status = await database.Levels.update(body, { where: { id: id }})

            if(status == 0){
                return res.status(400).json()
            }

            const level = await database.Levels.findOne( {where : {id: Number(id)}} )

            return res.status(200).json(level)

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async delete(req,res) {
        try {

            const { id } = req.params
            
            const status = await database.Levels.destroy({ where: { id: id }})

            if(status == 0){
                return res.status(400).json()
            }

            return res.status(204).json()

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }


}
module.exports = LevelsController;