import React, { useState, useEffect } from "react";
import ContactDataService from "../services/ContactService";
import { Link } from "react-router-dom";
const Forms = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchLname, setSearchLname] = useState("");
  useEffect(() => {
    retrieveUsers();
  }, []);
  const onChangeSearchLname = e => {
    const searchLname = e.target.value;
    setSearchLname(searchLname);
  };
  const retrieveUsers = () => {
    ContactDataService.getAll()
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveUsers();
    setCurrentUser(null);
    setCurrentIndex(-1);
  };
  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  };
  const removeAllUsers = () => {
    ContactDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
  const findByLname = () => {
    ContactDataService.findByLname(searchLname)
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchLname}
            onChange={onChangeSearchLname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByLname}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Listes des Formulaires</h4>
        <ul className="list-group">
          {users &&
            users.map((user, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveUser(user, index)}
                key={index}
              >
                {user.lname}
              </li>
            ))}
        </ul>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllUsers}
        >
          Tout Effacer
        </button>
      </div>
      <div className="col-md-6">
        {currentUser ? (
          <div>
            <h4>User</h4>
            <div>
              <label>
                <strong>Civilité:</strong>
              </label>{" "}
              {currentUser.civility}
            </div>
            <div>
              <label>
                <strong>Prénom:</strong>
              </label>{" "}
              {currentUser.lname}
            </div>
            <div>
              <label>
                <strong>Nom:</strong>
              </label>{" "}
              {currentUser.lname}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentUser.email}
            </div>
            <div>
              <label>
                <strong>Adresse:</strong>
              </label>{" "}
              {currentUser.address}
            </div>
            <div>
              <label>
                <strong>Code Postal:</strong>
              </label>{" "}
              {currentUser.postal}
            </div>
            <div>
              <label>
                <strong>Ville:</strong>
              </label>{" "}
              {currentUser.city}
            </div>
            <div>
              <label>
                <strong>Pays:</strong>
              </label>{" "}
              {currentUser.country}
            </div>
            <div>
              <label>
                <strong>Profession:</strong>
              </label>{" "}
              {currentUser.job}
            </div>
            <div>
              <label>
                <strong>Message:</strong>
              </label>{" "}
              {currentUser.message}
            </div>
            <Link
              to={"/users/" + currentUser.id}
              className="badge badge-warning"
            >
              Modifier
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Cliquez sur un Formulaire...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Forms;