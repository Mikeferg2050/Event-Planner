const sequelize = require('../config/connection');
const { User, Sounds } = require('../models');

const userData = require('./userData.json');
const soundsData = require('./soundsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const sound of soundsData) {
    await Sounds.create(sound)
  }

  process.exit(0);
};

seedDatabase();
