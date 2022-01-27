const { Comment } = require('../models');

const commentData = [{
        comment_text: "wow this looks really cool.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "i don't know if this will work but we will sure try.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "how cool is this!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;