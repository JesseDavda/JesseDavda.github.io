import React, { Component } from 'react';

import styles from './Home.styles';

import Title from '../../components/Title';
import SmallBlock from '../../components/SmallBlock';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

class Home extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            modal: false,
            modalTitle: "",
            modalSelection: 0
        }
    }

    toggleModal(selection) {
        this.setState({modal: !this.state.modal});

        if(selection === 1) {
            this.setState({modalSelection: selection, modalTitle: "ABOUT ME"});
        } else if(selection === 2) {
            this.setState({modalSelection: selection, modalTitle: "MY WORK"});
        } else {
            this.setState({modalSelection: selection, modalTitle: "CONTACT ME"});
        }
    }

    render() {
        return(
            <div style={styles.container}>
                {this.state.modal ? <Modal onClick={() => this.toggleModal()} modalSelection={this.state.modalSelection} modalTitle={this.state.modalTitle} /> : ""}
                <div style={styles.contentContainer} className={"home-content-container"}>
                    <Title title={"JESSE DAVDA"} />
                    {/* <p style={styles.paragraph}>I'm Jesse, a fullstack web developer specialising in React/Vue and NodeJS. I like to solve problems and learn new things! <br />
                    I've worked for <a style={styles.paragraphLink} href="https://disciplemedia.com/">Disciple Media</a> for the last year. <br />
                    I'm really interesting in the possibilities of Machine Learning combined with Big Data</p> */}
                    <div style={styles.blockContainer} className={"menu-container"}>
                        <SmallBlock title={"About Me"} onClick={() => this.toggleModal(1)}/>
                        <SmallBlock title={"My Work"} onClick={() => this.toggleModal(2)} />
                        <SmallBlock title={"Contact Me"} onClick={() => this.toggleModal(3)} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;