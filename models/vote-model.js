 "use strict";

 module.exports = function(sequelize, DataTypes){
 	var Vote = sequelize.define("Vote", {
 		voteUp: {
 			type: DataTypes.INTEGER,
 			default: 0
 		},
    voteDown: {
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
