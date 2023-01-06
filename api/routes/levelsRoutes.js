const { Router } = require('express');
const LevelsController = require('../controllers/LevelsController.js');

const router = Router();

router.get('/', LevelsController.findAll)
router.get('/:id', LevelsController.findOne)
router.post('/', LevelsController.create)
router.put('/:id', LevelsController.update)
router.delete('/:id', LevelsController.delete)

module.exports = router;

