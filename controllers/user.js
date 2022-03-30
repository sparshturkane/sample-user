const User = require('../models/user')

exports.list = (req, res, next) => {
    User.find()
        .then(data => res.send(data))
        .catch(err => res.send(err));
}

exports.details = (req, res, next) => {
    const user = new User({
        basic: req.body.basic,
        detail: req.body.detail,
        experience: req.body.experience
    });

    user.save()
        .then(data => {

            res.send({
                status: true,
                msg: "User added successfully"
            });
        })
        .catch(err => {
            res.send({
                status: false,
                error: err,
                msg: "User adding failed"
            })
        })

}