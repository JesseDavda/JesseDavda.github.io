import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrowser } from '@fortawesome/pro-light-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import snapshot from './img/snapshot.png';
import checklist from './img/checklist.png';
import taxi from './img/taxi.png';
import TwitterAnalyser from './img/TwitterAnalyser.png';
import SmartPlay from './img/Storm.png';
import EightHours from './img/EightHours.png';

import styles from './MyWork.style';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0
        }

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({width: window.innerWidth});
    }

    render() {
        return(
            <div style={styles.projectContainer} className={"project-container"}>
                {this.state.width <= 1125 ? (<h2 style={styles.projectTitle} className={"mobile-project-title"}>{this.props.projectTitle}</h2>) : ""}
                <div style={styles.imageContainer} className={"project-image-container"}><img style={styles.projectImage} src={this.props.projectImage} alt={"Project"} /></div>
                <div style={styles.textContainer} className={"project-text-container"}>
                    {this.state.width >= 1125 ? (<h2 style={styles.projectTitle}>{this.props.projectTitle}</h2>) : ""}
                    <p style={styles.projectDescription}>{this.props.projectDescription}</p>
                    {this.props.website
                     ? ( <div style={styles.projLinkContainer}>
                            <FontAwesomeIcon icon={faBrowser}/>
                            <a href={this.props.projectLink} 
                                style={styles.projLinkA}
                                className={"project-link"}>
                                <p style={styles.projLink}>Website</p>
                            </a>
                        </div> )
                     : "" }
                    {this.props.repoLink !== ""
                    ? ( <div style={styles.projLinkContainer}>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href={this.props.repoLink} 
                            style={styles.projLinkA}
                            className={"project-link"}>
                            <p style={styles.projLink} >Repository</p>
                            </a>
                        </div> )
                    : "" }
                </div>
            </div>
        )
    }
}

class MyWork extends Component {
    render() {
        return(
            <div className={"projects-container"}>
                <Project
                    projectImage={snapshot}
                    projectTitle={"Snapshot"}
                    projectDescription={"Snapshot is a finance management website built with ReactJS and NodeJS. " +
                                        "The site analyses the users bank transactions and shows account analytics as well as " +
                                        "showing them places that they've spent a significant amount of money so that the users " +
                                        "can see where they can save money."}
                    projectLink={"https://snapshot-live.herokuapp.com"}
                    repoLink={"https://github.com/JesseDavda/Finance-Tracker"}
                    website={true}
                />
                <Project
                    projectImage={checklist}
                    projectTitle={"Checklist"}
                    projectDescription={"Checklist is a web-app built with VueJS and NodeJS that gives users the ability " +
                                        "to create multiple use checklists (routines) that the user can reset and schedule."}
                    projectLink={"https://routine-server.herokuapp.com"}
                    repoLink={"https://github.com/JesseDavda/Checklist"}
                    website={true}
                />
                <Project
                    projectImage={TwitterAnalyser}
                    projectTitle={"Twitter Analyser"}
                    projectDescription={"Twitter analyser was a project that used the Twitter API " + 
                                        "to collect data about peoples opinions on a particular topic. " +
                                        "The data was used pitch a documentary about the Rocky Horror Show to Netflix and " + 
                                        "other streaming services."}
                    website={false}
                    repoLink={"https://github.com/JesseDavda/TwitterAnalysis"}
                />
                <Project
                    projectImage={taxi}
                    projectTitle={"TAXI"}
                    projectDescription={"TAXI was my A-Level computer science project that I " +
                                        "built using NodeJS and rendering templates. TAXI showed " +
                                        "users how much a specified journey should cost and how long it should " +
                                        "take so that the user can avoid being scammed when taking taxi journeys in unfamiliar places."}
                    website={false}
                    repoLink={""}
                />
                <Project
                    projectImage={EightHours}
                    projectTitle={"8 Hours"}
                    projectDescription={"8 Hours was an online programming competition in which groups of programmers" +
                                        "have 8 hours to plan and build something based on a brief given to them " +
                                        "when the competition begins. The entries are judged and a winner is picked " + 
                                        "after the 8 hours are up."}
                    website={false}
                    repoLink={""}
                />
                <Project
                    projectImage={SmartPlay}
                    projectTitle={"Smart Play"}
                    projectDescription={"Smart Play was a smart playlist generator that generated playlists based on " +
                                        "entries like artists, colours and moods using the LastFM API to find tracks " +
                                        "based on the users entries. Smart Play was built as an entry to the 2015 Young Rewired State " +
                                        "hackathon. The project was renamed as 'Storm' after the competition."}
                    website={false}
                    repoLink={"https://github.com/montyanderson/SmartPlay"}
                />
                <div style={styles.viewMore}>
                    <h4 style={styles.viewMoreText}>Visit my <a href="https://github.com/JesseDavda" className={"github-link"}><h4>github</h4></a> to see my other projects</h4>
                </div>
            </div>
        )
    }
}

export default MyWork;