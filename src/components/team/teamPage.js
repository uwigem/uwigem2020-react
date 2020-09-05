import 'bootstrap/dist/css/bootstrap.css';
import './teamPage.css';
import React, { useState } from 'react';
import TeamPageMembers from './TeamPageMembers';
import TeamPageTeam from './TeamPageTeam';

import Mentors from './membersPage/Mentors';
import Members from './membersPage/Members';

/**
 * @returns {React.Component}
 */
const TeamPage = props => {
  // switch between team & members
  const [membersPage, setMembersPage] = useState(false);

  const switchPage = () => {
    setMembersPage(!membersPage);
  }

  let mentors = [
    {
      name: 'a',
      description: 'a description'
    },
    {
      name: 'b',
      description: 'b description'
    }
  ];

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