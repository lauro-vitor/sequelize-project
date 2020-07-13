const Person = require('./personFactory');
const {sequelize} = require('../sequelizeFactory');

const createPerson = async person => {
    const t = sequelize.transaction();
    let newPerson = null;
    try {
        newPerson = await Person.create(person, {transaction: t});
        await t.commit();
        return newPerson.toJSON();
    } catch(error) {
        (await t).rollback();
        console.log(error);
        return null;
    }
}
module.exports = createPerson;