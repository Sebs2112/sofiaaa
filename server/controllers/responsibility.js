var Responsibility = require('../models/responsibility');


exports.getAll = function(req, res) {
    Responsibility.find({}, function(err, responsibilities) {
    //   var responsibilityMap = {};
  
    //   responsibilitys.forEach(function(responsibility) {
    //     responsibilityMap[responsibility._id] = responsibility;
    //   });
  
      res.send(responsibilities);  
    });
  };

exports.create_responsibility = function (req, res) {
    console.log(req.body)
    var responsibility = new Responsibility(
        {
            responsibiltyLevel: req.body.responsibiltyLevel,
            competencies: req.body.competencies
        }
    );
    console.log("Object crated")
    responsibility.save(function (err) {
        console.log(err)
        if (err) {
            return next(err);
        }

        res.send('responsibility Created')
    })
};



exports.get_responsibility = function (req, res) {
    Responsibility.findById(req.params.id, function (err, responsibility) {
        if (err) return next(err);
        res.send(responsibility);
    })
};

exports.update_responsibility = function (req, res) {
    Responsibility.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, responsibility) {
        if (err) return next(err);
        res.send('responsibility Updated.');
    });
};

exports.delete_responsibility = function (req, res) {
    Responsibility.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('responsibility Deleted');
    })
};