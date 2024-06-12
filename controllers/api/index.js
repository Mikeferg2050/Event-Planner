const router = require('express').Router();
const userRoutes = require('./userRoutes');
const soundRoutes = require('./soundRoutes');

router.use('/users', userRoutes);
router.use('/sounds', soundRoutes);

module.exports = router;
