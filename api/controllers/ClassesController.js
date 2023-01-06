const database = require('../models');
class ClassesController {

    static async findAll(req, res) {
        try {

            const classes = await database.Classes.findAll();
            return res.status(200).json(classes);

        } catch (err) {
            return res.status(500).json(err.message);
        }

    }

    static async findOne(req, res) {
        try {

            const { id } = req.params
            
            const class_ = await database.Classes.findOne( {where : {id: Number(id)}} )
            
            if(!class_) 
                return res.status(404).json({"message": "id not found"})
            
            return res.status(200).json(class_);

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async create(req, res) {
        try {
            const body = req.body

            const class_ = await database.Classes.create(body)

            return res.status(201).json(class_)

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
    
    static async update(req,res) {
        try {

            const { id } = req.params
            const body = req.body
            
            const status = await database.Classes.update(body, { where: { id: id }})

            if(status == 0){
                return res.status(400).json()
            }

            const class_ = await database.Classes.findOne( {where : {id: Number(id)}} )

            return res.status(200).json(class_)

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async delete(req,res) {
        try {

            const { id } = req.params
            
            const status = await database.Classes.destroy({ where: { id: id }})

            if(status == 0){
                return res.status(400).json()
            }

            return res.status(204).json()

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }


}
module.exports = ClassesController;