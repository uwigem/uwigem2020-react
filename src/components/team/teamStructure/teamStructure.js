import React, {useState} from 'react';
import TeamInfo from './teamInfo'
import TeamStatement from './teamStatement';
import './teamStructure.css';

/**
 * @returns {React.Component}
 */
const TeamStructure = (props) => {

    const [team, setTeam] = useState({ name: '', expanded: false});

    // #region mock team info
    const teamInfoMap = new Map();
    teamInfoMap.set("Wetlab", {
        statement: "Experiments ",
        highlight: "Experiments and Experiments",
        statmentMore: " to show Experiments.",
        example: "Experiments, Experiments, iGEM Experiments"
    });
    teamInfoMap.set("Drylab", {
        statement: "We are dedicated to Simulations ",
        highlight: "Simulations and Simulations",
        statmentMore: " to show Simulations.",
        example: "Simulations, Simulations, iGEM Simulations"
    });
    teamInfoMap.set("Fundraising", {
        statement: "We are dedicated to Fundraising ",
        highlight: "Fundraising and Fundraising",
        statmentMore: " to Fundraising.",
        example: "Fundraising, Fundraising, iGEM Fundraising"
    });
    teamInfoMap.set("Synbio for Everyone", {
        statement: "We are dedicated to Synbio ",
        highlight: "Synbio and Synbio",
        statmentMore: " to Synbio.",
        example: "Synbio, Synbio, iGEM Synbio"
    });
    teamInfoMap.set("Human Practices", {
        statement: "We are dedicated to Outreach ",
        highlight: "Outreach and Outreach",
        statmentMore: " to Outreach.",
        example: "Outreach, Outreach, iGEM Outreach"
    });
    teamInfoMap.set("Design", {
        statement: "We are dedicated to design meaningful ",
        highlight: "graphics and products",
        statmentMore: " to show empathy to the iGEM competition.",
        example: "Posters, Inforgraphics, iGEM merchandise"
    });
    teamInfoMap.set("Web Development", {
        statement: "We are dedicated to Web Development ",
        highlight: "Web Development and Web Development",
        statmentMore: " to Web Development.",
        example: "Web Development, Web Development, iGEM Web Development"
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
        <div>
            <h2 className="team-structure-title">Team Structure</h2>
            <div className="team-structure-div">
                <div className="team-structure-col">
                    <h3 className="team-structure-col-title">Research.</h3>
                    <div className="team-structure-col-main">
                        <div className="team-structure-col-side"></div>
                        <div className="team-structure-col-text">
                            <TeamInfo 
                            teamName="Wetlab"
                            handleClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Drylab"
                                handleClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
                <div className="team-structure-col">
                    <h3 className="team-structure-col-title">Society.</h3>
                    <div className="team-structure-col-main">
                        <div className="team-structure-col-side"></div>
                        <div className="team-structure-col-text">
                            <TeamInfo 
                            teamName="Fundraising"
                            handleClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Human Practices"
                                handleClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Synbio for Everyone"
                                handleClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
                <div className="team-structure-col">
                    <h3 className="team-structure-col-title">Information.</h3>
                    <div className="team-structure-col-main">
                        <div className="team-structure-col-side"></div>
                        <div className="team-structure-col-text">
                            <TeamInfo 
                            teamName="Design"
                            handleClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Web Development"
                                handleClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                    team.expanded?
                    <TeamStatement 
                        teamName={team.name}
                        statement={teamInfoMap.get(team.name).statement}
                        highlight={teamInfoMap.get(team.name).highlight}
                        statementMore={teamInfoMap.get(team.name).statementMore}
                        example={teamInfoMap.get(team.name).example}
                    />
                    : null
            }
        </div>
    </>;
}

export default TeamStructure;