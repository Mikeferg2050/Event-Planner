const User = require('./users');
const Sounds = require('./Sound');

User.hasMany(Sound, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Sounds.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Sounds };
