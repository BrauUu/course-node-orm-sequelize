const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

//Enrollment routes

router.get('/:studentId/enrollment/:registrationId', PeopleController.findRegistrationByPerson)
router.get('/:studentId/enrollment', PeopleController.findAllEnnrollmentByPerson)
router.post('/:studentId/enrollment', PeopleController.createEnrollment)
router.put('/:studentId/enrollment/:registrationId', PeopleController.updateEnrollment)
router.delete('/:studentId/enrollment/:registrationId', PeopleController.deleteEnrollment)

//People routes

router.get('/', PeopleController.findAll)
router.get('/:id', PeopleController.findOne)
router.post('/', PeopleController.create)
router.put('/:id', PeopleController.update)
router.delete('/:id', PeopleController.delete)


module.exports = router;

