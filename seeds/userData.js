const { User } = require('../models');

const userData =[
  {
    "id": 1,
    "name": "admin",
    "email": "admin@admin.com",
    "password": "password"
  }
]

const seedUser = ()=> User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;