import React from 'react';
import './Login.scss';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import Modal from '../../UI/Modal/Modal';

const login = props => {
    return (
        <Modal show={props.showLogin} modalClosed={props.close} joinus={false}>
            <div className="login">
                <h2>member login</h2>
                <div className="input">
                    <div className="input__icon">
                        <PersonIcon className="input__icon--1" />
                    </div>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="input">
                    <div className="input__icon">
                        <LockIcon className="input__icon--1" />
                    </div>
                    <input type="text" placeholder="Password"/>
                </div>
                <button>Log In</button>
                <p>Forget Password? <span>Click Here</span></p>
                <hr />
                <button>Register</button>
            </div>
        </Modal>
    );
};

export default login;