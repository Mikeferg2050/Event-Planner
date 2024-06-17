const router = require('express').Router();
const { Sounds, User } = require('../models');
const withAuth = require('../utils/auth');

// load homepage
router.get('/', async (req, res) => {
  try {

    const soundData = await Sounds.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const sounds = soundData.map((sound) => sound.get({ plain: true }));

    res.render('homepage', { 
      sounds, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//load profile page
router.get('/profile', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Sounds }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
