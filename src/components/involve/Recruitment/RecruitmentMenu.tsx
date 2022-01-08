import React, {useState} from 'react';
import TeamInfo from './RecruitTeamInfo'
import RecruitPosition from './RecruitTeamPosition';
import ManagerInfo from './RecruitmentManagerInfo';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import styles from './RecruitmentMenu.module.css'
// import './RecruitmentMenu.css';

/**
 * @returns {React.Component}
 */
export default function RecruitmentMenu() {

    const [team, setTeam] = useState({ name: '', expanded: false});
    const recruitmentDescription = "Washington iGEM is recruiting for several positions in 2022 for our interdisciplinary, undergraduate-driven, synthetic biology research and entrepreneurship competition team! All skill levels, class standing, and major (intended or declared) are eligible. Our recruitment is from late Autumn quarter to Winter quarter. UW iGEM is a serious time commitment, requiring 10-15 hours/week in winter and spring quarter and 10-20 hours/week in the summer and fall. We expect all members to dedicate themselves to the team for the entire season. Subteams include teams performing biological labwork (wetlab), hardware + software development (drylab), fundraising, human practices, design, and website development." 
    const managerNote = "Note: we are recruiting manager roles and member (non-manager) roles. The managers are expected to be full-time roles, that is, little to no direct involvement in other subteams. Team members, however, are encouraged to participate in more than one subteam (we recommend two). ";
    const webdevNote = "UI/UX Deisgner and Web Developer candidates will receive an application in addition to the Washington iGEM Team application."

    const openingPositions = require('./openingPositions.json');

    const handleClick = (teamName) => {
        if (teamName === team.name) {
            setTeam({name: teamName, expanded: !team.expanded});
        } else {
            setTeam({name: teamName, expanded: true});
        }
    }

    const getPositions = (teamName) => {
        return openingPositions[teamName].positions;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Recruitment</h2>
            <div className={styles.infoSession}>
            Our next recruitment session is on 1/14/22 at 6pm (Zoom ID: 673 998 2327). Check out our previous recruitment session!
            Click the links to see the <a href="https://www.youtube.com/watch?v=aa1j4rEWhDM&feature=youtu.be">recording</a> and the <a href="https://docs.google.com/presentation/d/1bCkQujJGBAyKfE3P7g6NP8DPPTTflzFzg3rek41Q3vE/edit?usp=sharing">slides</a>!
            </div>
            <div className={styles.description}>
                <hr/>
                {recruitmentDescription}
                <br/>
                <br/>
                {managerNote}
                <br/>
                {webdevNote}
            </div>
            <div className={styles.applyLinkContainer}>
                <Button 
                    className={styles.applyLink} 
                    href="https://forms.gle/TyvKxe38qizpuy2u8"
                >
                    Apply Here
                </Button>
                <Alert variant='light' className={styles.menuLinkMore}>
                    Click on the team names below to learn more about the positions!
                </Alert>
            </div>
            <div className={styles.menuDiv}>
                { <div className={styles.menuCol}>
                    <h3 className={styles.menuColTitle}>Research</h3>
                    <div className={styles.menuColMain}>
                        <div className={styles.menuColSide}></div>
                        <div className={styles.menuColText}>
                            <TeamInfo 
                            teamName="Wetlab"
                            onClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Drylab"
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div> }
                <div className={styles.menuCol}>
                    <h3 className={styles.menuColTitle}>Society</h3>
                    <div className={styles.menuColMain}>
                        <div className={styles.menuColSide}></div>
                        <div className={styles.menuColText}>
                            <TeamInfo 
                                teamName="Fundraising"
                                onClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Human Practices"
                                onClick={handleClick}
                            />
                            {/* <TeamInfo 
                                teamName="Synbio for Everyone"
                                onClick={handleClick}
                            /> */}
                        </div>
                    </div>
                </div>
                <div className={styles.menuCol}>
                    <h3 className={styles.menuColTitle}>Information</h3>
                    <div className={styles.menuColMain}>
                        <div className={styles.menuColSide}></div>
                        <div className={styles.menuColText}>
                            <TeamInfo 
                                teamName="Design"
                                onClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Web Development"
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                    team.expanded?
                    <RecruitPosition 
                        teamName={team.name}
                        positions={getPositions(team.name)}
                        // statement={teamInfoMap.get(team.name).statement}
                        // highlight={teamInfoMap.get(team.name).highlight}
                        // statementMore={teamInfoMap.get(team.name).statementMore}
                        // example={teamInfoMap.get(team.name).example}
                        // position={teamInfoMap.get(team.name).position}
                        // description={teamInfoMap.get(team.name).requirement}
                    />
                    : null
            }
            {/* <div className="recruit-menu-link-container">
                <Button 
                    className="recruit-menu-link" 
                    href="https://react-bootstrap.github.io/components/buttons/#api"
                >
                    Apply Here
                </Button>
            </div> */}
            <ManagerInfo/>
        </div>
    )
}
