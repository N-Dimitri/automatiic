import React, { Component } from 'react';
import axios from 'axios';

class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            sujet: '',
            message: '',
            success: false,
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange = e => {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value })
    }

    submitForm = event => {
        const { name, email, sujet, message } = this.state;
        const data = {
            name,
            email,
            sujet,
            message,
        }
        axios({
            method: 'post',
            url: 'http://localhost:1337/messages',
            data: data
        })
            .then(reponse => {
                this.successState();
                console.log('success');
            });
        event.preventDefault();
    }

    successState() {
        this.setState({ success: true, name: '', email: '', sujet: '', message: '' });
    }

    render() {
        const { success } = this.state;
        console.log(success);
        return (
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Informations</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Mobile:</span> <a href="tel:0667043046">06 67 04 30 46</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:contact@automatiic.io">contact@automatiic.tech</a></p>
                            </div>
                        </div>
                        <div className="contact_form col-lg-9">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Ecrire un message</h2>

                            {success ?
                                <div class="alert alert-success" role="alert">Nous vous remercions pour votre temps ! Nous vous contacterons aussi vite que possible.</div>
                                :
                                <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group text_box">
                                                <input type="text" id="name" name="name" placeholder="Votre nom / entreprise" onChange={this.handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group text_box">
                                                <input type="email" name="email" id="email" placeholder="Votre email" onChange={this.handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group text_box">
                                                <input type="text" id="sujet" name="sujet" placeholder="Sujet" onChange={this.handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group text_box">
                                                <textarea onChange={this.handleChange} name="message" id="message" cols="30" rows="10" placeholder="Votre message..." required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn_three">Envoyer</button>
                                </form>
                            }
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Contacts;