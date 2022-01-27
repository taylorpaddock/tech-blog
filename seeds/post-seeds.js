const { Post } = require('../models');

const postData = [{
        title: 'tech blogs rock',
        content: 'find everything you need on this awesome tech blog.',
        user_id: 1

    },
    {
        title: 'explore the universe',
        content: 'lets use tech to explore the universe.',
        user_id: 2
    },
    {
        title: 'jump rope',
        content: 'I am trying to get this tech jump rope off the ground ;)',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;