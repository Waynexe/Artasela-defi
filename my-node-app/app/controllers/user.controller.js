const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.fname) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

    const user = {
    civility: req.body.civility,
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    address: req.body.address,
    postal: req.body.postal,
    city: req.body.city,
    country: req.body.country,
    job: req.body.job,
    message: req.body.message,
};

User.create(user)
.then(data => {
    res.send(data);
})
    .catch(err => {
        res.status(500).send({
        message:
        err.message || "Problème."
        });
    });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const fname = req.query.fname;
    var condition = fname ? { fname: { [Op.like]: `%${fname}%` } } : null;
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
const id = req.params.id;
User.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({message: "Problème avec id=${id}"
        });
    }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error"
        });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};