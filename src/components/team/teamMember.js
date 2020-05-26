import React, {useState} from 'react';

/**
 * @returns {React.Component}
 */
const TeamMember = props => {
    const [expanded, toggleExpand] = useState(false);
    const [hover, toggleHover] = useState(false);
    
    return <>
        <div className="person" 
            onClick={() => toggleExpand(!expanded)}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            style={{
                backgroundColor: hover || expanded ? 'blueviolet' : 'white',
                transition: 'height 0.5s, background-color 0.5s, color 0.5s',
                color: hover || expanded ? 'white' : 'black',}}
            >
            <section className="image"></section>
            <section className="person-name"
            style={{
                visibility: !expanded? 'visible' : 'collapse'
            }}
            >{props.person.name}</section>
            <section className="person-bio"
            style={{
                visibility: expanded? 'visible' : 'collapse'
            }}>{props.person.bio}</section>
        </div>
    </>;
}

export default TeamMember;