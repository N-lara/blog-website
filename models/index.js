const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey:'author'
})
Post.belongsTo(User, {
    foreignKey:'author'

})

Post.hasMany(Comment,{
    foreignKey:'post_id'
})
Comment.belongsTo(Post, {
    foreignKey:'post_id'
})

User.hasMany(Comment,{
    foreignKey:'author'
})
Comment.belongsTo(User, {
    foreignKey:'author'
})

module.exports = { User, Post , Comment };
