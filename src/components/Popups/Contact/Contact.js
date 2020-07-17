import React from 'react';
import './Contact.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Modal from '../../UI/Modal/Modal';

const contact = props => {
    const contactReason = [
        {reason: "Investor Services"},
        {reason: "Trader Services"},
        {reason: "Technical Support"},
        {reason: "Account Support"},
        {reason: "Data Licensing"},
        {reason: "Advertising Sales"},
        {reason: "Corrections"},
        {reason: "Testimonial"},
        {reason: "Suggestions"},
        {reason: "Press/Media Request"},
        {reason: "Employment"},
        {reason: "Other"}
    ];
    return (
        <Modal show={props.showContact} modalClosed={props.close} joinus={false}>
            <div className="contact">
                <Autocomplete
                    options={contactReason}
                    getOptionLabel={(option) => option.reason}
                    className="contact__search"
                    renderInput={(params) => <TextField {...params} label="Reason for contacing us" variant="outlined" />}
                />
                <TextareaAutosize aria-label="minimum height" rowsMin={10} className="contact__text" />
                <div className="contact__input1">
                <div className="input">
                    <div className="input__icon">
                        <PersonIcon className="input__icon--1" />
                    </div>
                    <input type="text" placeholder="First Name"/>
                </div>
                <div className="input">
                    <div className="input__icon">
                        <PersonIcon className="input__icon--1" />
                    </div>
                    <input type="text" placeholder="Last Name"/>
                </div>
                </div>
                <div className="contact__input2">
                <div className="input">
                    <div className="input__icon">
                        <EmailIcon className="input__icon--1" />
                    </div>
                    <input type="text" placeholder="Email Address"/>
                </div>
                <div className="input">
                    <div className="input__icon">
                        <PhoneIcon className="input__icon--1" />
                    </div>
                    <input type="text" placeholder="Daytime Phone"/>
                </div>
                </div>
                <button className="contact__btn">Send</button>
            </div>
        </Modal>
    );
};

export default contact;