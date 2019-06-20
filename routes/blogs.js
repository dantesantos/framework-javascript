const router = require('express').Router();

const BlogsController = require('../controllers/blogsController');

//Begin routes
//this user wants to do this...
router.get('/', BlogsController.index);
router.get('/new', BlogsController.new);
router.get('/:id', BlogsController.show);
router.get('/:id/edit', BlogsController.edit);
router.post('/', BlogsController.create);
router.post('/update', BlogsController.update);
router.post('/destroy', BlogsController.destroy);

//End routes
module.exports = router;