import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/pro-light-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import contactImage from './img/contact_photo.jpg';

import styles from './ContactMe.style';

class ContactMe extends Component {
    mailTo() {
        const address = "mailto:jessedavda@gmail.com";

        window.location.href = address;
    }

    github() {
        window.location.href = "https://github.com/JesseDavda";
    }

    render() {
        return(
            <div style={styles.contactMeContainer} className={"contact-me-container"}>
                <div style={styles.contentContainer}>
                    <img src={contactImage} style={styles.contactImage} />
                    <p style={styles.contactMeText}>I'm always open to discussing collaborations and job opportunities.<br/><br/> You can contact me here:</p>
                    <div style={styles.contactMethod}>
                        <div style={styles.iconContainer}>
                            <FontAwesomeIcon className={"cursor-pointer"} icon={faPaperPlane} style={styles.contactIcon} size={"1x"} onClick={() => this.mailTo()} />
                        </div>
                        <h3 className={"cursor-pointer"} style={styles.emailAddress} onClick={() => this.mailTo()} >jessedavda@gmail.com</h3>
                    </div>
                    <div style={styles.contactMethod}>
                        <div style={styles.iconContainer}>
                            <FontAwesomeIcon className={"cursor-pointer"} icon={faGithub} style={styles.contactIcon} size={"1x"} onClick={() => this.github()} />
                        </div>
                        <h3 className={"cursor-pointer"} style={styles.emailAddress} onClick={() => this.github()} >Jesse Davda</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe;