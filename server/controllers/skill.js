var skill = require('../models/skill');


exports.getAll = function(req, res) {
    skill.find({}, function(err, skills) {
    //   var skillMap = {};
  
    //   skills.forEach(function(skill) {
    //     skillMap[skill._id] = skill;
    //   });
  
      res.send(skills);  
    });
  };

exports.create_skill = function (req, res) {
    console.log(req.body)
    var skill = new skill(
        {
            skillName: req.body.skillName,
            skillLevels: req.body.skillLevels
        }
    );

    skill.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('skill Created')
    })
};



exports.get_skill = function (req, res) {
    skill.findById(req.params.id, function (err, skill) {
        if (err) return next(err);
        res.send(skill);
    })
};

exports.update_skill = function (req, res) {
    skill.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, skill) {
        if (err) return next(err);
        res.send('skill Updated.');
    });
};

exports.delete_skill = function (req, res) {
    skill.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('skill Deleted');
    })
};