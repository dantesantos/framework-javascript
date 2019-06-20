const router = require('express').Router();

// router.get('/', (req, res) =>{
//     res.send(`Welcome to our very plain site.`);
// });

// router.get('/about', (req, res) =>{
//     res.send(`It a cold dark rainy day in Pizzaville.`);
// });


//controllers
const PagesController = require('../controllers/pagesController');

//routes
router.get('/', PagesController.show);
router.get('/about', PagesController.show);
router.get('/contact', PagesController.show);

module.exports = router;