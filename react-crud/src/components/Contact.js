import React, { useState } from "react";
import ContactDataService from "../services/ContactService";
const AddUser = () => {
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
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const saveUser = () => {
    var data = {
      civility: user.civility,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      address: user.address,
      postal: user.postal,
      city: user.city,
      country: user.country,
      job: user.job,
      message: user.message,
    };
    ContactDataService.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          civility: response.data.civility,
          fname: response.data.fname,
          lname: response.data.lname,
          email: response.data.email,
          address: response.data.address,
          postal: response.data.postal,
          city: response.data.city,
          country: response.data.country,
          job: response.data.job,
          message: response.data.message,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newUser}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="civility">Civilité</label>
            <input
              type="text"
              className="form-control"
              id="civility"
              required
              value={user.civility}
              onChange={handleInputChange}
              name="civility"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fname">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              required
              value={user.fname}
              onChange={handleInputChange}
              name="fname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Nom</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              required
              value={user.lname}
              onChange={handleInputChange}
              name="lname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={user.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={user.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="postal">Code Postal</label>
            <input
              type="number"
              className="form-control"
              id="postal"
              required
              value={user.postal}
              onChange={handleInputChange}
              name="postal"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              className="form-control"
              id="city"
              required
              value={user.city}
              onChange={handleInputChange}
              name="city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Pays</label>
            <input
              type="text"
              className="form-control"
              id="country"
              required
              value={user.country}
              onChange={handleInputChange}
              name="country"
            />
          </div>
          <div className="form-group">
            <label htmlFor="job">Profession</label>
            <input
              type="text"
              className="form-control"
              id="job"
              required
              value={user.job}
              onChange={handleInputChange}
              name="job"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              className="form-control"
              id="message"
              required
              value={user.message}
              onChange={handleInputChange}
              name="message"
            />
          </div>
          <button onClick={saveUser} className="btn btn-success">
            Envoyer
          </button>
        </div>
      )}
    </div>
  );
};
export default AddUser;