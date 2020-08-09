// database adapter service class
const { Service } = require('feathers-nedb');
//need this to create the MD5 hash


exports.Users = class Users extends Service {
  create (data, params) {
    // This is the information we want from the user signup data
    const { email, password, name } = data;
    // The complete user
    const userData = {
      email,
      password,
      name
    };

    // Call the original `create` method with existing `params` and new data
    return super.create(userData, params);
  }
};
