'use strict';
var dateFormat = require('dateformat');

module.exports = (sequelize, DataTypes) => {

  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.TEXT
  });

  // Class Methods
  Article.associate = function(models) {
    // associations can be defined here
  };

  // Instance Methods
  Article.prototype.publishedAt = function() {
    return dateFormat(this.createdAt, "dddd, mmmm dS, yyyy, h:MM TT");
  };
  
  Article.prototype.shortDescription = function() {
    return this.body.length > 30 ? this.body.substr(0, 30) + "..." : this.body;
  };

  return Article;
};
