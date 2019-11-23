var express = require('express');
var router = express.Router();

var responsibility_controller = require('../controllers/responsibility');


router.get('/getAll', responsibility_controller.getAll)


router.post('/createResponsibility', responsibility_controller.create_responsibility);

router.get('/getResponsibilityById/:id', responsibility_controller.get_responsibility);

router.put('/updateResponsibility/:id', responsibility_controller.update_responsibility);

router.delete('/deleteResponsibility/:id', responsibility_controller.delete_responsibility);


module.exports = router;