const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.get('/', PeopleController.findAll)
router.get('/:id', PeopleController.findOne)
router.post('/', PeopleController.create)
router.put('/:id', PeopleController.update)
router.delete('/:id', PeopleController.delete)

module.exports = router;

