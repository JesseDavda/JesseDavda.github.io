import React, { Component } from 'react';

import styles from './AboutMe.style';

import Jesse from './img/jesse.jpg';

class AboutMe extends Component {
    render() {
        return(
            <div style={styles.aboutMeContainer}>
                <div style={styles.imageTextContainer} className={"about-me-container"}>
                    <img style={styles.personalPhoto} src={Jesse} alt={"photo"} />
                    <p style={{...styles.aboutMeTopParagraph, ...styles.noTopMargin}}>
                        My name is Jesse and I am a full-stack web developer, I'm competent in ReactJS and VueJS on the front-extend
                        and NodeJS, Express and MongoDB on the back-end.
                        <br />
                        <br />
                        From an early age I have been fascinated by computers
                        There was something about them that just clicked with me and I dived
                        right in!
                        <br />
                        <br />
                        I attended Young Rewired State, a worldwide community of digital makers and technically
                        gifted people aged under 18 and was chosen to attend Haifa teen Tech, an international 48 hour hackathon hosted at the Israel
                        Institute of Technology. These were extremely inspiring times that gave me an insight to the possibilities of this exciting world.
                        <br />
                        <br />
                        With the skills I acquired I went straight into the workplace as a junior developer at
                        Disciple Media.
                        At 18 and fresh out of school this was a fantastic learning experience for me, not only did I
                        get to use my knowledge in real life situations in an amazing start up company in London
                        but I also got to problem solve with a team on a large scale, that really mattered.
                        <br />
                        <br />
                        Through this experience I have discovered a true passion for problem solving, both independently and as a member of a team, project
                        managing and taking initative.
                        I feel inspired and excited about what the tech world has in store for me next
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;