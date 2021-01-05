import React, {useState} from 'react';
import TeamInfo from './teamInfo'
import TeamStatement from './teamStatement';
import './teamStructure.css';

/**
 * @returns {React.Component}
 */
export default function TeamStructure() {

    const [team, setTeam] = useState({ name: '', expanded: false});

    // #region mock team info
    const teamInfoMap = new Map();
    teamInfoMap.set("Wetlab", {
        statement: "The Washington iGEM wetlab team is in charge of the hands-on parts of synthetic biology. We typically focus on executing experiments, analyzing data, and sending back parameters for drylab modeling. This year’s lab restrictions have limited the ability to conduct lab work so we instead led the strategy and future implementation of our project. We design the biological system and plan future experiments once the lab work becomes possible. The size of this team is currently reduced due to lab restrictions and is tightly integrated with drylab providing biological interpretation of the math models.",
        // highlight: "Experiments and Experiments",
        // statementMore: " to show Experiments.",
        // example: "Experiments, Experiments, iGEM Experiments"
    });
    teamInfoMap.set("Drylab", {
        statement: "Washington iGEM’s projects involve the creation of complex systems that require extensive computational modeling of proteins and reaction kinetics. Utilizing cutting edge software and applying biochemical knowledge, we aim to optimally improve the function of existing proteins and design novel proteins to robustly develop our projects. By applying mathematical models and computer simulations, we seek to provide key insights to evaluate/modify project direction, and forecast performance metrics. As needed, we look to design/engineer hardware implementations to complement our wetlab efforts to create deliverable proof of concepts.",
        // highlight: "Simulations and Simulations",
        // statementMore: " to show Simulations.",
        // example: "Simulations, Simulations, iGEM Simulations"
    });
    teamInfoMap.set("Fundraising", {
        statement: "The fundraising subteam manages all the finances of Washington iGEM and is responsible for raising money for the project. To reach our goal, we contact potential sponsors, such as UW departments and companies that have a similar vision as us, while applying to grants and presenting on crowdfunding platforms.",
        // highlight: "Fundraising and Fundraising",
        // statementMore: " to Fundraising.",
        // example: "Fundraising, Fundraising, iGEM Fundraising"
    });
    // teamInfoMap.set("Synbio for Everyone", {
    //     statement: "We are dedicated to Synbio ",
    //     highlight: "Synbio and Synbio",
    //     statementMore: " to Synbio.",
    //     example: "Synbio, Synbio, iGEM Synbio"
    // });
    teamInfoMap.set("Human Practices", {
        statement: "While iGEM projects revolve around novel research in the realm of synthetic biology, it is integral to our team’s work to bridge these technical aspects to fit in a real-world context. Our Human Practices subteam leads this initiative by facilitating discussions with faculty, advisors, and key stakeholders to explore topics regarding ethical, social, economic, biosafety, and biosecurity factors related to the project’s research. ",
        // highlight: "Outreach and Outreach",
        // statementMore: " to Outreach.",
        // example: "Outreach, Outreach, iGEM Outreach"
    });
    teamInfoMap.set("Design", {
        statement: "The Design team aims to ensure our team’s spirit, efforts, and accomplishments are effectively communicated to the world with specially tailored visuals. Specifically, we are responsible for creating graphics, videos, and animations for our team’s website, presentations, public events, and merchandise.",
        // highlight: "graphics and products",
        // statementMore: " to show empathy to the iGEM competition.",
        // example: "Posters, Inforgraphics, iGEM merchandise"
    });
    teamInfoMap.set("Web Development", {
        statement: "The web development team creates and maintains the portal between the team and the rest of the world. One of the most important parts of the competition is creating the project wiki that will be presented to the judges. This wiki isn’t only a summary of the project, it also needs to have style and flair to capture the reader's attention while maintaining clear visualizations of experimental data and processes. Most of all, it needs to be clear and informative about the entire project from conception, to development, to completion. The presentation of our project wiki will be used by judges to determine our score for the competition.",
        // highlight: "Web Development and Web Development",
        // statementMore: " to Web Development.",
        // example: "Web Development, Web Development, iGEM Web Development"
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
                            onClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Drylab"
                                onClick={handleClick}
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
                <div className="team-structure-col">
                    <h3 className="team-structure-col-title">Information.</h3>
                    <div className="team-structure-col-main">
                        <div className="team-structure-col-side"></div>
                        <div className="team-structure-col-text">
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
    </>
}