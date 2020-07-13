const person = require('../../models/person');
const {sequelize, DataTypes} = require('../sequelizeFactory');
module.exports = person(sequelize, DataTypes);