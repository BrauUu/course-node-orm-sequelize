import { Router } from 'express';
import PeopleController from '../controllers/PeopleController';

const router = Router();

router.get('/people', PeopleController.findAll)

module.exports = router;

