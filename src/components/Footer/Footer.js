import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.style';

class Footer extends Component {
    render() {
        return(
            <div style={styles.footerContainer}>
                <div style={styles.socialMediaIconsContainer}>
                    <a className={"icon-link"} href="https://www.instagram.com/jessedavda" ><FontAwesomeIcon className={"social-icon"} icon={faInstagram} size={"lg"} /></a>
                    <a className={"icon-link"} href="https://www.github.com/JesseDavda" ><FontAwesomeIcon className={"social-icon"} icon={faGithub} size={"lg"} /></a>
                </div>
                <p style={styles.divider}>|</p>
                <div style={styles.emailContainer}>
                    <p style={styles.email}>jessedavda@gmail.com</p>
                </div>
            </div>
        );
    }
}

export default Footer;