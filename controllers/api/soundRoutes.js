/////////////////////////////////////////////////Not fully implemented//////////////////////////////////////////////

const router = require('express').Router();
const { Sounds } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSound = await Sounds.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSound);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const soundData = await Sounds.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!soundData) {
      res.status(404).json({ message: 'No sound found with this id!' });
      return;
    }

    res.status(200).json(soundData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
