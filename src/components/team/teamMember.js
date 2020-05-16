import React, {useState} from 'react';

/**
 * @returns {React.Component}
 */
const TeamMember = props => {

    let select = false;
    for (let i = 0; i < props.person.teams.length; i++) {
        if (props.filter == props.person.teams[i]) {
            select = true;
        }
    }

    let blur = <section>blur!</section>
    if (select) {
        blur = <section></section>
    }

    return <>
        <div className="person">
            <section className="image"></section>
            {blur}
            <section className="person-name">{props.person.name}</section>
        </div>
    </>;
}

export default TeamMember;