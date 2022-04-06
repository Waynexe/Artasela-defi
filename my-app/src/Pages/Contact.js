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

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success') {
                alert("Votre requête est bien envoyée.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Votre requête n'a pas pu être envoyée.")
            }
        })
    }

    resetForm() {
        this.setState({civility: '', fname: '', lname: '', email: '', address: '', postal: '', city: '', country: '', job: '', message: ''})
    }

    render() {
        return (
            <div className='contact'>
                <h1 className='contact-header'>Contact</h1>
                <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className='form-group'>
                        <label>Civilité</label>
                        <input type="text" name='civility' required/>
                    </div>
                    <div className='form-group'>
                        <label>Prénom</label>
                        <input type="text" name='fname' required/>
                    </div>
                    <div className='form-group'>
                        <label>Nom</label>
                        <input type="text" name='lname' required/>
                    </div>
                    <div className='form-group'>
                        <label>Adresse mail</label>
                        <input type="email" name='email' required/>
                    </div>
                    <div className='form-group'>
                        <label>Adresse</label>
                        <input type="text" name='address' required/>
                    </div>
                    <div className='form-group'>
                        <label>Code Postal</label>
                        <input type="text" name='postal' required/>
                    </div>
                    <div className='form-group'>
                        <label>Ville</label>
                        <input type="text" name='city' required/>
                    </div>
                    <div className='form-group'>
                        <label>Pays</label>
                        <input type="text" name='country' required/>
                    </div>
                    <div className='form-group'>
                        <label>Profession</label>
                        <input type="text" name='job' required/>
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea name='message' required/>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn'>Envoyer</button>
                    </div>
                </form>
            </div>
        );
    }

    onCivilityChange(event) {
        this.setState({civility: event.target.value})
    }

    onFnameChange(event) {
        this.setState({fname: event.target.value})
    }
    
    onLnameChange(event) {
        this.setState({lname: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onAddressChange(event) {
        this.setState({address: event.target.value})
    }

    onPostalChange(event) {
        this.setState({postal: event.target.value})
    }

    onCityChange(event) {
        this.setState({city: event.target.value})
    }

    onCountryChange(event) {
        this.setState({country: event.target.value})
    }

    onJobChange(event) {
        this.setState({job: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default Contact
