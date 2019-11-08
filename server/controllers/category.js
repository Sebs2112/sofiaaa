var Category = require('../models/category');


exports.getAll = function(req, res) {
    Category.find({}, function(err, categorys) {
    //   var categoryMap = {};
  
    //   categorys.forEach(function(category) {
    //     categoryMap[category._id] = category;
    //   });
  
      res.send(categorys);  
    });
  };

exports.create_category = function (req, res) {
    console.log(req.body)
    var category = new Category(
        {
            categoryName: req.body.categoryName,
            subCategories: req.body.subCategories
        }
    );

    category.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('category Created')
    })
};



exports.get_category = function (req, res) {
    Category.findById(req.params.id, function (err, category) {
        if (err) return next(err);
        res.send(category);
    })
};

exports.update_category = function (req, res) {
    category.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, category) {
        if (err) return next(err);
        res.send('category Updated.');
    });
};

exports.delete_category = function (req, res) {
    Category.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('category Deleted');
    })
};