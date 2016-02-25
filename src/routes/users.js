import express from 'express';
import userController from  '../controllers/userController.js'

let router = express.Router();

/*
 * GET
 */
router.get('/users/search', function(req, res) {
    userController.search(req, res);
});

/*
 * GET
 */
router.get('/users', function(req, res) {
    userController.list(req, res);
});

/*
 * GET
 */
router.get('/users/:id', function(req, res) {
    userController.show(req, res);
});

/*
 * POST
 */
router.post('/users', function(req, res) {
    userController.create(req, res);
});

/*
 * POST
 */
router.post('/users/:id', function(req, res) {
    userController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/users/:id', function(req, res) {
    userController.remove(req, res);
});



module.exports = router;