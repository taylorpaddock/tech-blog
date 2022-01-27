const { User } = require('../models');

const userData = [
    {
        username: 'Oliver',
        password: 'olliebean'

    },
    {
        username: 'Teddy',
        password: 'teddybear'
    },
    {
        username: 'Glassy',
        password: 'babybaby'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;