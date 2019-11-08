
var express = require('express');
var router = express.Router();

var category_controller = require('../controllers/category');



router.get('/getAll', category_controller.getAll)

router.post('/createCategory', category_controller.create_category);

router.get('/getCategoryById/:id', category_controller.get_category);

router.put('/updateCategory/:id', category_controller.update_category);

router.delete('/deleteCategory/:id', category_controller.delete_category);


module.exports = router;