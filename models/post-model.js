"use strict";

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {

        Post.belongsToMany(models.Comment, { through: 'Post_Comment' });
        Post.belongsToMany(models.Vote, { though: 'Post_Vote' });

      }
    }
  });

  return Post;
};
