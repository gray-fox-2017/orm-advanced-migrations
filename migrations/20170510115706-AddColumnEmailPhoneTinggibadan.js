'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return[
      queryInterface.addColumn(
       'students',
       'email',
       {
         type: Sequelize.STRING
       }
     ),
     queryInterface.addColumn(
       'students',
       'phone',
       {
         type : Sequelize.STRING
       }
     ),
     queryInterface.addColumn(
       'student',
       'tinggibadan',
       {
         type : Sequelize.INTERGER
       }
     )
   ]
  },

  down: function (queryInterface, Sequelize) {
    return[
      queryInterface.removeColumn('student','email'),
      queryInterface.removeColumn('student','phone'),
      queryInterface.removeColumn('student','tinggibadan')
    ]
  }
};
