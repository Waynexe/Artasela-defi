import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ContactDataService from "../services/ContactService";
const User = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialUserState = {
    id: null,
    civility: "",
    fname: "",
    lname: "",
    email: "",
    address: "",
    postal: "",
    city: "",
    country: "",
    job: "",
    message: ""
  };
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const [message, setMessage] = useState("");
  const getUser = id => {
    ContactDataService.get(id)
      .then(response => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getUser(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updateUser = () => {
    ContactDataService.update(currentUser.id, currentUser)
      .then(response => {
        console.log(response.data);
        setMessage("The User was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteUser = () => {
    ContactDataService.remove(currentUser.id)
      .then(response => {
        console.log(response.data);
        navigate("/users");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div>
    {currentUser ? (
      <div className="edit-form">
        <h4>Utilisateur</h4>
        <form>
          <div className="form-group">
            <label htmlFor="civility">Civilité</label>
            <input
              type="text"
              className="form-control"
              id="civility"
              name="civility"
              value={currentUser.civility}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fname">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              value={currentUser.fname}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Nom</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              value={currentUser.lname}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={currentUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={currentUser.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postal">Code Postal</label>
            <input
              type="number"
              className="form-control"
              id="postal"
              name="postal"
              value={currentUser.postal}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={currentUser.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Pays</label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={currentUser.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="job">Profession</label>
            <input
              type="text"
              className="form-control"
              id="job"
              name="job"
              value={currentUser.job}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              className="form-control"
              id="message"
              name="message"
              value={currentUser.message}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button className="badge badge-danger mr-2" onClick={deleteUser}>
          Supprimer
        </button>
        <button
          type="submit"
          className="badge badge-success"
          onClick={updateUser}
        >
          Modifier
        </button>
        <p>{message}</p>
      </div>
    ) : (
      <div>
        <br />
        <p>Cliquez sur un Formulaire...</p>
      </div>
    )}
  </div>
  );
};
export default User;