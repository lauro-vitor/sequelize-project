const User = require('./userFactory');
const {sequelize} = require('../sequelizeFactory');

const destroyUser = async id => {
    const t = await sequelize.transaction();
    let rowsAffected = 0;
    try {
        rowsAffected  = await User.destroy({
            where:{
                id,
            },
            transaction: t
        });
        await t.commit();

        if(rowsAffected == 1){
            return true;
        }
        return false;
    }catch(erro) {
        await t.rollback();
        return false;
    }
}
module.exports = destroyUser;