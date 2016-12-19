 "use strict";

 module.exports = function(sequelize, DataTypes){
 	var Vote = sequelize.define("Vote", {
 		vote: {
 			type: DataTypes.INTEGER,
 			default: 0
 		}
 	}, {
 		classMethods: {
 			associate: function(models){
 				Vote.belongsTo(models.Post)
 			}
 		}
 	})
 	return Vote;
 }