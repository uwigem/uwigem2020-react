import React, {useState} from 'react';
import TeamInfo from './RecruitTeamInfo'
import RecruitPosition from './RecruitTeamPosition';
import Button from 'react-bootstrap/Button';
import './RecruitmentMenu.css';

/**
 * @returns {React.Component}
 */
export default function RecruitmentMenu() {

    const [team, setTeam] = useState({ name: '', expanded: false});
    const testPosition = "Test Position";
    const postionDescription = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quis maiores assumenda incidunt voluptas fugiat, deserunt commodi? Sapiente, minus maxime dolorem nostrum quo non ipsam maiores corrupti reprehenderit veniam possimus.";

    // #region mock team info
    const teamInfoMap = new Map();
    teamInfoMap.set("Wetlab", {
        statement: "Experiments ",
        highlight: "Experiments and Experiments",
        statementMore: " to show Experiments.",
        example: "Experiments, Experiments, iGEM Experiments",
        position: testPosition,
        requirement: postionDescription
    });
    teamInfoMap.set("Drylab", {
        statement: "People who are dedicated to Simulations ",
        highlight: "Simulations and Simulations",
        statementMore: " to show Simulations.",
        example: "Simulations, Simulations, iGEM Simulations",
        position: testPosition,
        requirement: postionDescription
    });
    teamInfoMap.set("Fundraising", {
        statement: "People who are dedicated to Fundraising ",
        highlight: "Fundraising and Fundraising",
        statementMore: " to Fundraising.",
        example: "Fundraising, Fundraising, iGEM Fundraising",
        position: testPosition,
        requirement: postionDescription
    });
    teamInfoMap.set("Synbio for Everyone", {
        statement: "People who are dedicated to Synbio ",
        highlight: "Synbio and Synbio",
        statementMore: " to Synbio.",
        example: "Synbio, Synbio, iGEM Synbio",
        position: testPosition,
        requirement: postionDescription
    });
    teamInfoMap.set("Human Practices", {
        statement: "People who are dedicated to Outreach ",
        highlight: "Outreach and Outreach",
        statementMore: " to Outreach.",
        example: "Outreach, Outreach, iGEM Outreach",
        position: testPosition,
        requirement: postionDescription
    });
    teamInfoMap.set("Design", {
        statement: "People who are dedicated to design meaningful ",
        highlight: "graphics and products",
        statementMore: " to show empathy to the iGEM competition.",
        example: "Posters, Inforgraphics, iGEM merchandise",
        position: testPosition,
        requirement: postionDescription
    });
    teamInfoMap.set("Web Development", {
        statement: "People who are dedicated to Web Development ",
        highlight: "Web Development and Web Development",
        statementMore: " to Web Development.",
        example: "Web Development, Web Development, iGEM Web Development",
        position: testPosition,
        requirement: postionDescription
    });
    //#endregion

    const handleClick = (teamName) => {
        if (teamName === team.name) {
            setTeam({name: teamName, expanded: !team.expanded});
        } else {
            setTeam({name: teamName, expanded: true});
        }
    }

    return <>
        <div className="m-5">
            <h2 className="recruit-menu-title">Recruitment</h2>
            <div className="recruit-menu-description">
                {postionDescription}
            </div>
            <div className="mt-3 recruit-menu-link-container">
                <Button 
                    className="recruit-menu-link" 
                    href="https://react-bootstrap.github.io/components/buttons/#api"
                >
                    Apply Here
                </Button>
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
                        statement={teamInfoMap.get(team.name).statement}
                        highlight={teamInfoMap.get(team.name).highlight}
                        statementMore={teamInfoMap.get(team.name).statementMore}
                        example={teamInfoMap.get(team.name).example}
                        position={teamInfoMap.get(team.name).position}
                        description={teamInfoMap.get(team.name).requirement}
                    />
                    : null
            }
            <div className="recruit-menu-link-container">
                <Button 
                    className="recruit-menu-link" 
                    href="https://react-bootstrap.github.io/components/buttons/#api"
                >
                    Apply Here
                </Button>
            </div>
        </div>
    </>
}