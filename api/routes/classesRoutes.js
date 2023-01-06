const { Router } = require('express');
const ClassesController = require('../controllers/ClassesController.js');

const router = Router();

router.get('/', ClassesController.findAll)
router.get('/:id', ClassesController.findOne)
router.post('/', ClassesController.create)
router.put('/:id', ClassesController.update)
router.delete('/:id', ClassesController.delete)

module.exports = router;

