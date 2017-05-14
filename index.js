const db = require("./models");

let all = () => { db.student.getAllData(function(student){
    student.forEach(function(student){
      console.log("Student ID : "+ student.id);
      console.log(student.first_name);
      console.log(student.last_name);
      console.log(student.getFullName());
    })
  })
}


all();

function add(){
  db.student.create({
    first_name : "James",
    last_name  : "Raun",
    birthdate  : new Date("1990-12-12"),
    gender     : "M",
    email      : "james@gmail.com",
    phone      : "08121212123",
    tinggibadan: 180
  })
  .then(students => {
    console.log("Berhasil di tambahkan !");
  })
  .catch(err => {
    console.log(err.message);
  })
}

add();
