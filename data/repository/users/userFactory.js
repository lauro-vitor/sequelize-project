const user = require('../../models/user');
const {sequelize, DataTypes} = require('../sequelizeFactory');
module.exports = user(sequelize, DataTypes);