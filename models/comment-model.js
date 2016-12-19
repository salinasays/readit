 "use strict";

 module.exports = function(sequelize, DataTypes){
 	var Comment = sequelize.define("Comment", {
 		comment: {
 			type: DataTypes.STRING,
 			allowNull: false
 		}
 	}, {
 		classMethods: {
 			associate: function(models){
 				Comment.belongsTo(models.Post)
 			}
 		}
 	})
 	return Comment;
 }