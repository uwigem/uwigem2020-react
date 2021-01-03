import React from 'react';
import './RecruitmentManagerInfo.css';

/**
 * @returns {React.Component}
 */
export default function ManagerInfo() {
    return <>
        <div className="managers-div">
                <div className="managers-col">
                    <h3 className="managers-title">Managers:</h3>
                    <div>

                        <div className='managers-section'>
                            <div className='managers-section-title'>We are recruiting Subteam Managers!</div>
                            We are recruiting for Subteam Managers. Subteam Managers oversee a subteam to ensure successful project completion, specifically focusing on improving accountability, operations, and communications between subteams. Together, they help the entire team work efficiently with clear understanding of our project at any point.
                        </div>

                        <div className='managers-section'>
                            <div className='managers-section-title'>Subteam Manager</div>
                            The subteam manager oversees a subteam - such as wetlab, drylab, human practices, or fundraising - to ensure successful project completion, specifically focusing on improving accountability, operations, and communications between subteams. Together, they help the entire team work efficiently with clear understanding of our project at any point.
                        </div>

                        <div className='managers-section'>
                            <div className='managers-section-title'>Details:</div>
                            <ul>
                                <li>Make sure tasks are clear, deadlines are set, check up on people and keep accountability high.</li>
                                <li>Keeps iGEM effective and morale high by clarifying what needs to be done, who needs to do them, by when, and why.</li>
                                <li>“Ties” whatever tasks are being done to the bigger picture. They should be encouraging the subteam to clarify what certain proposals, tasks, and their significance are.</li>
                                <li>Implements ways to improve project management. Works on keeping Notion and Zulip (our primary documentation and communication tools) organized and clear.</li>
                                <li>The burden of responsibility of accomplishing tasks doesn’t rest with the subteam manager. But they are responsible for maintaining accountability in the subteam. With that, they will need to keep up with the research that is happening.</li>
                                <ul><li>Subteam managers can be responsible for some tasks if they choose</li></ul>
                                <li>If they choose to participate in research (either on the same subteam or another), most of their time should be spent on their managerial tasks.</li>
                            </ul>
                            <br></br>
                            <b>Tasks:</b><br></br>
                            <ul>
                                <li>Attend your subteam's weekly meeting(s), main-team meetings, and meetings with advisors.</li>
                                <li>Organize and facilitate meetings with ample preparation.</li>
                                <ul>
                                    <li>Are not responsible for meeting discussion itself, but make sure everything on meeting agendas are discussed and that the meetings are run efficiently.</li>
                                    <li>Determine if meetings are needed, and if not, move to offline communication.</li>
                                    <li>Consider how to make meetings effective and change the frequency of meetings as necessary.</li>
                                </ul>
                                <li>Take clear and helpful meeting notes.</li>
                                <li>Contribute to a plan of the main team meeting agenda with advisor guidance.</li>
                                <li>Develop organizational tools (e.g. timelines, Zulip, Notion, meta-documents about current state of the project).</li>
                                <li>Ensure all tasks are delegated, have deadlines, and are completed.</li>
                                <li>Communicate with other subteam/subteam managers when collaboration is needed.</li>
                            </ul>
                        </div>

                    </div>
                </div>
        </div>
    </>
}