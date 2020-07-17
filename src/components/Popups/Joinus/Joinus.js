import React from 'react';
import './Joinus.scss';
import { Container, Row, Col } from 'react-bootstrap';

import Modal from '../../UI/Modal/Modal';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const joinus = props => {
    const applications = [
        {app: "Development"},
        {app: "Client Support"},
        {app: "Data Specialist"},
        {app: "Design"},
        {app: "Strategy"},
        {app: "Management"},
    ];
    return (
        <Modal show={props.showContact} modalClosed={props.close} joinus={true}>
            <div className="joinus">
                <h2>FillingFindings is revolutionizing the way investors read SEC Filings. Join the team creating it.</h2>
                <Container fluid="true">
                    <Row noGutters>
                        {applications.map(el => {
                            return (
                                <Col md={4}>
                                    <div className="joinus__card">
                                        <ChatBubbleIcon className="joinus__icon"/>
                                        <p>4</p>
                                        {el.app}
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </Modal>
    );
};

export default joinus;