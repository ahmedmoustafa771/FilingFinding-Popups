import React from 'react';

import  './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    let classes= "modal";
    if (props.joinus) {
        classes ="modal__joinus";
    } else {
        classes= "modal";
    }
        return (
            <React.Fragment>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                    <div 
                        className={classes}
                        style={{
                        animation: props.show ? 'popup 0.3s' : 'none',
                        opacity: props.show ? '1' : '0',
                        zIndex:  props.show ? '1000': '1'
                        }}>
                        {props.children}
                    </div>
            </React.Fragment>
        );
}

export default modal;