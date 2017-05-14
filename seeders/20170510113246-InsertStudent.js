'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('students', [{
      first_name : "Antoni",
      last_name  : "Angga",
      gender     : "Male",
      birthdate  : new Date("1995-04-15"),
      createdAt  : new Date(),
      updatedAt  : new Date(),
      email      : "antoniangga14@gmail.com",
      phone      : "081294373359",
      tinggibadan : 180
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('students', null, {});
  }
};
