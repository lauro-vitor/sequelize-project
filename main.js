const {
    destroyUser,
    updateUser, 
    createUser, 
    getAllUsers,
    getUserById } = require('./data/repository/users/userProvider');

const {
  createPerson, 
  getPersonById,
  updatePerson} = require('./data/repository/persons/personProvider');

const main =  async () => {
  let time1 = Date.now();
  //console.log(await getPersonById(1));
  let user = {
    firstName:'teste3',
    lastName: 'teste3',
    email: 'teste3',
  }

 
  //console.log( await updateUser(user,3));
  try{
    console.log(await getAllUsers());
  }catch(error){
    console.log(error);
  }
  
  let time2 =  Date.now();
  console.log(time2 - time1);
}

main();

  /*let user = {
    firstName:'1exemplo',
    lastName: '1exemplo',
    email: '1exemplo',
  }
  //console.log(user);
  console.log(await updateUser(user, 1));*/

 /* teste de user
     
  console.log(await getUserById(19));
  //console.log(await getAllUsers());
  //console.log(await createUser(user));
  //console.log((await updateUser(user, 50)));
  //console.log(await destroyUser(15));
  */