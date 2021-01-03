import React, {useState} from 'react';
import TeamInfo from './RecruitTeamInfo'
import RecruitPosition from './RecruitTeamPosition';
import ManagerInfo from './RecruitmentManagerInfo';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import './RecruitmentMenu.css';

/**
 * @returns {React.Component}
 */
export default function RecruitmentMenu() {

    const [team, setTeam] = useState({ name: '', expanded: false});
    const recruitmentDescription = "Washington iGEM is recruiting for several positions in 2021 for our interdisciplinary, undergraduate-driven, synthetic biology research and entrepreneurship competition team! All skill levels, class standing, and major (intended or declared) are eligible. Our recruitment is from late Autumn quarter to Winter quarter. UW iGEM is a serious time commitment, requiring 10-15 hours/week in winter and spring quarter and 10-20 hours/week in the summer and fall. We expect all members to dedicate themselves to the team for the entire season. Subteams include teams performing biological labwork (wetlab), hardware + software development (drylab), fundraising, human practices, design, and website development." 
    const recruitmentNote = "Note: we are recruiting manager roles and member (non-manager) roles. The managers are expected to be full-time roles, that is, little to no direct involvement in other subteams. Team members, however, are encouraged to participate in more than one subteam (we recommend two). ";

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

    return <>
        <div className="m-5">
            <h2 className="recruit-menu-title">Recruitment</h2>
            <div className="recruit-menu-info-session">
                    We are holding a <b>virtual information session on Saturday, January 9th, 11:00am - 12:30pm</b>. 
                This will be held on zoom, got to the <a href="https://www.facebook.com/WashingtoniGEM">Facebook event</a> and join with link in the description. 
                A recording will be posted here shortly afterwards if you are unable to attend.
            </div>
            <div className="recruit-menu-description">
                <hr/>
                {recruitmentDescription}
                <br/>
                <br/>
                {recruitmentNote}
            </div>
            <div className="mt-3 recruit-menu-link-container">
                <Button 
                    className="recruit-menu-link" 
                    href="https://forms.gle/rgyAy9JMLTFPaHDe6 "
                >
                    Apply Here
                </Button>
                <Alert variant='light' className="recruit-menu-link-more">
                    Click on the team names below to learn more about the positions!
                </Alert>
            </div>
            <div className="recruit-menu-div">
                <div className="recruit-menu-col">
                    <h3 className="recruit-menu-col-title">Research.</h3>
                    <div className="recruit-menu-col-main">
                        <div className="recruit-menu-col-side"></div>
                        <div className="recruit-menu-col-text">
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
                </div>
                <div className="recruit-menu-col">
                    <h3 className="recruit-menu-col-title">Society.</h3>
                    <div className="recruit-menu-col-main">
                        <div className="recruit-menu-col-side"></div>
                        <div className="recruit-menu-col-text">
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
                <div className="recruit-menu-col">
                    <h3 className="recruit-menu-col-title">Information.</h3>
                    <div className="recruit-menu-col-main">
                        <div className="recruit-menu-col-side"></div>
                        <div className="recruit-menu-col-text">
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
    </>
}