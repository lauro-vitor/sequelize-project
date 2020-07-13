const User = require('./userFactory');
const {sequelize} = require('../sequelizeFactory');

const createUser = async user => {
    const t = await sequelize.transaction();
    let newUser = null;
    try {
       newUser = await User.create(user,{transaction: t});
       await t.commit();
       return  newUser.toJSON();
    }catch(error){
        await t.rollback();
        return null;
    }
}

module.exports = createUser;

