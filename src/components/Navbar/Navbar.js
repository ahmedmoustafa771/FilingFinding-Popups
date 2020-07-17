import React, { useState } from 'react';
import './Navbar.scss';
import { Navbar, Nav } from 'react-bootstrap';

import logo from '../../assets/redlogo.png';
import Login from '../Popups/Signin/Login';
import Contact from '../Popups/Contact/Contact';
import Joinus from '../Popups/Joinus/Joinus';

const navbar = props => {
    const [showPopups, setShowPopups] = useState({
        contact: false,
        joinus: false,
        signin: false
    });

    const onClickBackdrop = () => {
        const updatedShowPopups = {
            ...showPopups,
        };
        updatedShowPopups.contact = false;
        updatedShowPopups.joinus = false;
        updatedShowPopups.signin = false;
        setShowPopups(updatedShowPopups);
    };
    const onClickContact = () => {
        const updatedShowPopups = {...showPopups}; updatedShowPopups.contact = true; setShowPopups(updatedShowPopups);
    };
    const onClickJoinus = () => {
        const updatedShowPopups = {...showPopups}; updatedShowPopups.joinus = true; setShowPopups(updatedShowPopups);
    };
    const onClickSignIn = () => {
        const updatedShowPopups = {...showPopups}; updatedShowPopups.signin = true; setShowPopups(updatedShowPopups);
    };
    return (
        <React.Fragment>
            <div className="navbar">
                <Navbar>
                    <Navbar.Brand >
                        <img src={logo} alt="logo" className="logo"/>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link onClick={()=>onClickContact()}>Contact</Nav.Link>
                    <Nav.Link onClick={()=>onClickJoinus()}>Join US</Nav.Link>
                    <Nav.Link onClick={()=>onClickSignIn()}>Sign In</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <Login close={()=>onClickBackdrop()} showLogin={showPopups.signin}/>
            <Contact close={()=>onClickBackdrop()} showContact={showPopups.contact}/>
            <Joinus close={()=>onClickBackdrop()} showContact={showPopups.joinus}/>
        </React.Fragment>
    );
};

export default navbar;