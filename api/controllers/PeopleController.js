const database = require('../models');
class PessoaController {

    //Enrrolment methods

    static async findRegistrationByPerson(req, res) {
        try {

            const { studentId, registrationId } = req.params

            const registration = await database.Enrollment.findOne({
                where: {
                    id: Number(registrationId),
                    studentId: Number(studentId)
                }
            })

            if (!registration)
                return res.status(404).json({ "message": "id not found" })

            return res.status(200).json(registration);

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async findAllEnnrollmentByPerson(req, res) {
        try {

            const { studentId } = req.params

            const registration = await database.Enrollment.findAll({
                where: {
                    studentId: Number(studentId)
                }
            })

            if (!registration)
                return res.status(404).json({ "message": "id not found" })

            return res.status(200).json(registration);

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async createEnrollment(req, res) {
        try {

            const { studentId } = req.params
            const { body } = req

            const registration = await database.Enrollment.create({...body, studentId : Number(studentId)})

            return res.status(201).json(registration)

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async updateEnrollment(req, res) {
        try {

            const { studentId, registrationId } = req.params
            const body = req.body

            const status = await database.Enrollment.update(body, { where: { studentId: Number(studentId), id: Number(registrationId)} })

            if (status == 0) {
                return res.status(400).json()
            }

            const registration = await database.Enrollment.findOne({ where: { studentId: Number(studentId), id: Number(registrationId)} })

            return res.status(200).json(registration)

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async deleteEnrollment(req, res) {
        try {

            const { studentId, registrationId } = req.params

            const status = await database.Enrollment.destroy({ where: { studentId: Number(studentId), id: Number(registrationId)} })

            if (status == 0) {
                return res.status(400).json()
            }

            return res.status(204).json()

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    //People methods

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

            const person = await database.People.findOne({ where: { id: Number(id) } })

            if (!person)
                return res.status(404).json({ "message": "id not found" })

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

    static async update(req, res) {
        try {

            const { id } = req.params
            const body = req.body

            const status = await database.People.update(body, { where: { id: id } })

            if (status == 0) {
                return res.status(400).json()
            }

            const person = await database.People.findOne({ where: { id: Number(id) } })

            return res.status(200).json(person)

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async delete(req, res) {
        try {

            const { id } = req.params

            const status = await database.People.destroy({ where: { id: id } })

            if (status == 0) {
                return res.status(400).json()
            }

            return res.status(204).json()

        } catch (err) {
            return res.status(500).json(err.message)
        }
    }


}
module.exports = PessoaController;