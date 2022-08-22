const database = require('../models');
class PessoaController {

    static async findAll(req, res) {
        try {

            const people = await database.people.findAll();
            return res.status(200).json(people);

        } catch (err) {
            return res.status(500).json(err.message);
        }

    }
}