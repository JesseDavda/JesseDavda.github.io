import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';

import styles from './Modal.style';

import MyWork from '../MyWork';
import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';

class Modal extends Component {
    render() {
        return(
            <div style={styles.modalContainer}>
                <div className={"modal-background"} style={styles.modalBackground} onClick={this.props.onClick} ></div>
                <div className={"modal-content"} style={styles.modalContent}>
                    <div style={styles.modalExitContainer}>
                        <h1 style={styles.modalTitle}>{this.props.modalTitle}</h1>
                        <FontAwesomeIcon onClick={this.props.onClick} className={"exit-icon"} icon={faTimes} style={styles.exitIcon} size={"3x"}/>
                    </div>
                    {this.props.modalSelection === 1 ? <AboutMe /> : ""}
                    {this.props.modalSelection === 2 ? <MyWork /> : ""}
                    {this.props.modalSelection === 3 ? <ContactMe /> : ""}
                </div>
            </div>
        )
    }
}

export default Modal