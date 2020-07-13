const User = require('./userFactory');
const {sequelize} = require('../sequelizeFactory');
const getUserById = require('./getUserById');

const updateUser = async (user, id) => {
    const t =  await sequelize.transaction();
    let result = []; 
    try {
        result = await User.update(user, {
            where:{
                id,
            },
            transaction: t,
        });
        await t.commit();
        if(result[0] == 1) {
            return await getUserById(id);
        }
        return null;
    }catch(error) {
        await t.rollback();
        return null;
    }
 }
 module.exports = updateUser;

/*      //let userUpdated = null;
        userToUpdate = await getUserById(id);
         userToUpdate.firstName = user.firstName;
         userToUpdate.lastName = user.lastName;
         userToUpdate.email = user.email;
         userUpdated = await userToUpdate.save({transaction: t});
         await t.commit();
         return userUpdated;*/