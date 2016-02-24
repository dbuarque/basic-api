import Users from '../models/users';

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    /**
     * userController.list()
     */
    list: function(req, res) {
        Users.find(function(err, users){
            if(err) {
                return res.json(500, {
                    message: 'Error getting user.'
                });
            }
            return res.json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        Users.findOne({_id: id}, function(err, user){
            if(err) {
                return res.json(500, {
                    message: 'Error getting user.'
                });
            }
            if(!user) {
                return res.json(404, {
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },

    /**
     * userController.create()
     */
    create: function(req, res) {
        var user = new Users({
			email : req.body.email
        });

        user.save(function(err, user){
            if(err) {
                return res.json(500, {
                    message: 'Error saving user',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: user._id
            });
        });
    },

    /**
     * userController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        Users.findOne({_id: id}, function(err, user){
            if(err) {
                return res.json(500, {
                    message: 'Error saving user',
                    error: err
                });
            }
            if(!user) {
                return res.json(404, {
                    message: 'No such user'
                });
            }

            user.email =  req.body.email ? req.body.email : user.email;
			
            user.save(function(err, user){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting user.'
                    });
                }
                if(!user) {
                    return res.json(404, {
                        message: 'No such user'
                    });
                }
                return res.json(user);
            });
        });
    },

    /**
     * userController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        Users.findByIdAndRemove(id, function(err, user){
            if(err) {
                return res.json(500, {
                    message: 'Error getting user.'
                });
            }
            return res.json(user);
        });
    }
};