
var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user');


// a simple test url to check that all of our files are communicating correctly.
router.get('/get', user_controller.test);


router.post('/createUser', user_controller.create_user);

router.get('/getUserById/:id', user_controller.get_user);

router.put('/updateUser/:id', user_controller.update_user);

router.delete('/deleteUser/:id', user_controller.delete_user);


module.exports = router;