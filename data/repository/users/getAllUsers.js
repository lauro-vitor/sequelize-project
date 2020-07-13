const User =  require('./userFactory');

const getAllUsers = async () => {
    try {
        return JSON.stringify(await User.findAll(), null, 2);
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = getAllUsers;

//daqui em diante são outras funções de consultas

const getAllWithAttributes = async attributes => {
    //getAllWithAttributes(['firstName','email']
    try {
        return (
            JSON.stringify( await User.findAll({attributes,}), null, 2)
        );
    } catch(error) {
        console.log(error);
    }
}

//usando operadores lógicos para consultas personalizadas
//os prinicipais para mais informações olhar na documentação

//  AND
const selectAnd =  async () => {
    return await User.findAll({
        where: {
            [Op.and]:[
                {firstName: 'teste'},
                {lastName: 'teste'},
            ]
        }
    });
}
// OR
const selectOr = async () => {
    return await User.findAll({
        where:{
            [Op.or]:[
                {firstName:'teste'},
                {email:'alterado@exemplo.com'}
            ]
        },
    })
}
// EQ equals
const selectEq  = async () => {
    return await User.findAll({
        where: {
           email: {
               [Op.eq] : 'alterado@exemplo.com'
           }
        }
    });
}
//ne !=
const selectNotEquals = async () => {
    return await User.findAll({
        where: {
            firstName: {
                [Op.ne] : 'alterado'
            }
        }
    })
}

//number comparisons
//between 
const selectBetween = async () => {
    return await User.findAll({
        where:{
            id:{
                [Op.between]: [3,6]
            }
        }
    });
}

//like
const selectLike = async () => {
    return await User.findAll({
        where: {
            firstName:{
                [Op.substring]: 'exemplo'
            }
        }
    });
}
//order by
const selectOrderBy = async () => {
    return await User.findAll({
        order:[
            ['firstName','ASC'],
        ]
    });
}
//query: função que retorna um array de resultados e um objeto contendo os metadados(affeted rows ... etc)
//raw-queries: consultas brutas ex: SELECT * FROM ... JOIN ... ON ... WHERE ...
const userQuery = async query => {
    //presica do objeto sequelize
    return await sequelize.query(query);
}
