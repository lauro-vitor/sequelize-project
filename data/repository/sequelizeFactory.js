const {Sequelize,DataTypes, Op} = require('sequelize');

const sequelize = new Sequelize('sequelize','user', 'user', {
    dialect:'mysql',
    host:'localhost'
});

module.exports ={sequelize, DataTypes, Op};