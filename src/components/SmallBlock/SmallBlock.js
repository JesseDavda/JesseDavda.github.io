import React, { Component } from 'react';

import styles from './SmallBlock.style';

class SmallBlock extends Component {
    render() {
        return(
            <div className={"project-block"} style={styles.container} onClick={this.props.onClick}>
                <div className={"inside-background"} ></div>
                <div style={styles.titleContainer} className={"block-title-container"}>
                    <h1 style={styles.titleText} className={"block-title"}>{this.props.title.toUpperCase()}</h1>
                </div>
            </div>
        );
    }
}

export default SmallBlock;