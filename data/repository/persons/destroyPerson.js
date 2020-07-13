const Person = require('./personFactory');
const {sequelize} = require('../sequelizeFactory');
const destroyPerson = async id => {
    const t = await sequelize.transaction();
    
}