const { User } = require('../models');

const userData = [
    {
        username: "test",
        email: "test@yahoo.com",
        password: "12345"
    },    
{
    username: "ceegeezy",
    email: "ncohearnt@yahoo.com",
    password: "asdf1234"
},]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
