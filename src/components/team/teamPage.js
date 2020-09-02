import 'bootstrap/dist/css/bootstrap.css';
import './teamPage.css';

import TeamMember from './membersPage/teamMember';
import OurTeamPage from './OurTeamPage'
import TeamOverview from './teamOverview/teamOverview'
import React, {useState, useEffect} from 'react';
import TeamStructure from './teamStructure/teamStructure';

import Mentors from './membersPage/Mentors';
import Members from './membersPage/Members';

/**
 * @returns {React.Component}
 */
const TeamPage = props => {
  // switch between team & members
  const [membersPage, setMembersPage] = useState(false);


  const currentYear = 2020;
  const [teamMembers, setTeamMembers] = useState([]);
  const [filter, setFilter] = useState('All');
  const [year, setYear] = useState(currentYear);

  let years = [2019, 2020];

  let teams = [
    "All",
    "Drylab",
    "Wetlab",
    "Human Practices",
    "Outreach",
    "Web Development",
    "Fundraising",
    "Design",
    "Adviser",
    "PIs"]

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
      <div className='team-header'>

        <div className='team-header-title'>
          <h1>Our {membersPage? 'Members' : 'Team'}</h1>
        </div>

        <div className='team-header-button'>
          <button onClick={switchPage}>
            {membersPage? 'Team' : 'Members'}
          </button>
        </div>

      </div>

      <div className='team-body'>
        {
          membersPage?
            <>

            <Mentors />

            <Members />

            </>
          :
            <>

            <hr></hr>
            <TeamOverview 
              overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim integer sit lacinia ac tempus enim libero, sed nisl. Mattis integer consectetur vel, cursus lacus, consequat, adipiscing. Risus, id id bibendum turpis sit sit. Duis tortor sed erat sed arcu at."
              imgSrc="PlaceholderImage/arknights5.jpg"
              imgAlt="Placeholder Image"
              caption="Caption: caption goes here"
            />
            <TeamStructure></TeamStructure>

            </>
        }
      </div>
    </div>
  </>;
}

export default TeamPage;