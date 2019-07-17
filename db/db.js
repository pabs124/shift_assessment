const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/shift");

const Question = db.define("question", {
  number: {
    type: Sequelize.INTEGER
  },
  answer: {
    type: Sequelize.STRING
  }
});

const User = db.define("user", {
  email: {
    type: Sequelize.STRING
  }
});

Question.belongsTo(User);
User.hasMany(Question);

module.exports = {
  db,
  User,
  Question
};
