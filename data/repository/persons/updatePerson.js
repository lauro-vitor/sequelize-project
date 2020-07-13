const Person = require('./personFactory');
const {sequelize} = require('../sequelizeFactory');
const getPersonById = require('./getPersonById');

const updatePerson = async (person, id) => {
    const t = await sequelize.transaction();
    let result = [];
    try {
        result = await Person.update(person,{
            where:{
                id,
            },
        });
        await t.commit();
        if(result[0] == 1) {
            return getPersonById(id);
        }
        return null;
    }catch(error){
        await t.rollback();
        return null;
    }
}
module.exports = updatePerson;