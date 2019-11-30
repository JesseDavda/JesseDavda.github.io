import React, { Component } from 'react';

import styles from './Title.style';

class Title extends Component {
    render() {
        return(
            <div style={styles.container}>
                <h1 style={styles.titleText}>{this.props.title}</h1>
            </div>
        );
    }
}

export default Title;