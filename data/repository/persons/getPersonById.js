const Person = require('./personFactory');

const getPersonById = async id => {
    let person = null;
    try{
        person = await Person.findByPk(id);
        if(person) {
            return (person).toJSON();
        }
        return null;
    }catch(error){
        console.log(error);
        return null;
    }
}
module.exports = getPersonById;