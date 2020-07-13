const {
    destroyUser,
    updateUser, 
    createUser, 
    getAllUsers,
    getUserById } = require('./data/repository/users/userProvider');
const {createPerson} = require('./data/repository/persons/personProvider');

const main =  async () => {
  let person = {
      name: 'fulano',
      isBetaMember: true,
      userId: 1
  }
  console.log(await createPerson(person));
}

main();

 /* teste de user
     let user = {
    firstName: 'testandoNovoUsuario',
    lastName: 'testandoNovoUsuario',
    email: 'testandoNovoUsuario@exemplo.com'
  }
  console.log(await getUserById(19));
  //console.log(await getAllUsers());
  //console.log(await createUser(user));
  //console.log((await updateUser(user, 50)));
  //console.log(await destroyUser(15));
  */