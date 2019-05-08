var Profile = require('./profile.model');

// Create endpoint /api/profile for POST
exports.postProfile = function(req, res) {
    var profile = new Profile({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        place: req.body.place,
        imageUrl: req.body.imageUrl,
        school: req.body.school,
        interest: req.body.interest,
        kalym: req.body.kalym,
        user: req.body.user,
    });

    profile.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'New beer drinker added to the locker room!' });
    });
};

// Create endpoint /api/profile for GET
exports.getProfile = function(req, res) {
    Profile.find(function(err, profile) {
        if (err)
            res.send(err);

        res.json(profile);
    });
};
//Delete api/profile/id


exports.findOne = (req, res) => {
    Profile.findById(req.params.profile_id)
    .then(user => {
        console.log("here",req)
        if(!user) {
            return res.status(404).send({
                message: "User not found with id wsgsew " + req.params.profile_id
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id sdf" + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};