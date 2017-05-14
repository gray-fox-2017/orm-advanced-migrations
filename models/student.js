'use strict';
module.exports = function(sequelize, DataTypes) {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    tinggibadan: {
      type : DataTypes.INTERGER,
      validate : {
        isNumeric : true,
        min :{
          args : 150,
          msg : "Tinggi harus lebih dari 150"
        }
      }
    }
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback){
        student.findAll()
        .then(students =>{
          callback(students);
        })
      }
    },

    instanceMethods:{
      getFullName: function(){
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function(){
        let Today = new Date()
        let TodayYear = Today.getFullYear();
        let UserYear = new Date(this.birthday).getFullYear();
        return TodayYear - UserYear;
      }
    }
  });
  return student;
};
