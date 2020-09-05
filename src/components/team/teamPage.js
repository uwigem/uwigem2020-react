import './teamPage.css';
import React, { useState } from 'react';
import TeamPageMembers from './TeamPageMembers';
import TeamPageTeam from './TeamPageTeam';

/**
 * @returns {React.Component}
 */
const TeamPage = props => {
  // switch between team & members
  const [membersPage, setMembersPage] = useState(false);

  const switchPage = () => {
    setMembersPage(!membersPage);
  }

  return <>
    <div className='team-root'>
      {membersPage ?
        <TeamPageMembers onSwitchClick={switchPage}/>
        :
        <TeamPageTeam onSwitchClick={switchPage}/>}
    </div>
  </>;
}

export default TeamPage;