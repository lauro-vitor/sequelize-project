const User = require('./userFactory');

const getUserById = async (id) => {
    try{
        return  (await User.findByPk(id)).toJSON();
    }catch(error){
        console.log(error);
        return null;
    }
}

module.exports = getUserById;
