module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      civility: {
        type: Sequelize.STRING
      },
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      postal: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      }
    });
    return User;
  };