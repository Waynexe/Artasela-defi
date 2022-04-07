import React from 'react';
import axios from 'axios';
import './contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            civility: '',
            fname: '',
            lname: '',
            email: '',
            address: '',
            postal: '',
            city: '',
            country: '',
            job: '',
            message: ''
        }
    }

    handleCivilityChange = (event) => {
        this.setState({[event.target.civility]: event.target.value});
		}

		handleFnameChange = (event) => {
        this.setState({[event.target.fname]: event.target.value});
		}

		handleLnameChange = (event) => {
        this.setState({[event.target.lname]: event.target.value});
		}

		handleEmailChange = (event) => {
        this.setState({[event.target.email]: event.target.value});
		}

		handleAddressChange = (event) => {
        this.setState({[event.target.address]: event.target.value});
		}

		handlePostalChange = (event) => {
        this.setState({[event.target.postal]: event.target.value});
		}

		handleCityChange = (event) => {
        this.setState({[event.target.city]: event.target.value});
		}

		handleCountryChange = (event) => {
        this.setState({[event.target.country]: event.target.value});
		}

		handleJobChange = (event) => {
        this.setState({[event.target.job]: event.target.value});
		}

		handleMessageChange = (event) => {
        this.setState({[event.target.message]: event.target.value});        
    }

    handleSubmit = (event) => {
        alert('Votre formulaire a été envoyé: ' + this.state);
				
        fetch('http://localhost:3000/send', {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });

        event.preventDefault();
    }

    resetForm() {
        this.setState({civility: '', fname: '', lname: '', email: '', address: '', postal: '', city: '', country: '', job: '', message: ''})
    }

    render() {
        return (
            <div className='contact'>
                <h1 className='contact-header'>Contact</h1>
                <form id='contact-form' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Civilité</label>
                        <input type="text" value={this.state.value} name='civility' onChange={this.handleCivilityChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Prénom</label>
                        <input type="text" value={this.state.value} name='fname' onChange={this.handleFnameChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Nom</label>
                        <input type="text" value={this.state.value} name='lname' onChange={this.handleLnameChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Adresse mail</label>
                        <input type="email" value={this.state.value} name='email' onChange={this.handleEmailChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Adresse</label>
                        <input type="text" value={this.state.value} name='address' onChange={this.handleAddressChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Code Postal</label>
                        <input type="number" value={this.state.value} name='postal' onChange={this.handlePostalChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Ville</label>
                        <input type="text" value={this.state.value} name='city' onChange={this.handleCityChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Pays</label>
                        <input type="text" value={this.state.value} name='country' onChange={this.handleCountryChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Profession</label>
                        <input type="text" value={this.state.value} name='job' onChange={this.handleJobChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea name='message' value={this.state.value} onChange={this.handleMessageChange} 
												required/>
                    </div>
                    <div className='form-group'>
                        <button type='submit' value= 'Submit' className='btn'>Envoyer</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact
