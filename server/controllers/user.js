var User = require('../models/user');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.create_user = function (req, res) {
    var user = new User(
        {
            name: req.body.name,
            price: req.body.email
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created')
    })
};



exports.get_user = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.update_user = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User Updated.');
    });
};

exports.delete_user = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('User Deleted');
    })
};