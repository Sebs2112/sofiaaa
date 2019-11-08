
var express = require('express');
var router = express.Router();

var skill_controller = require('../controllers/skill');


router.get('/getAll', skill_controller.getAll)


router.post('/createSkill', skill_controller.create_skill);

router.get('/getskillById/:id', skill_controller.get_skill);

router.put('/updateSkill/:id', skill_controller.update_skill);

router.delete('/deleteSkill/:id', skill_controller.delete_skill);


module.exports = router;