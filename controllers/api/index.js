const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');



router.use('/', homeRoutes);

router.use('/profile', profileRoutes);

module.exports = router;
