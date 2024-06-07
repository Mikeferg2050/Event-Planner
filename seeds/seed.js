const sequelize = require('../config/connection');
const { User, Sound } = require('../models');

const userData = require('./userData.json');
const soundsData = require('./soundsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const sound of soundsData) {
    await Sound.create({
      ...sound,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
