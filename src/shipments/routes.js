const { Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getShipments);
router.post('/', controller.addStudents);
router.get('/:id', controller.getShipmentsById);

module.exports = router;